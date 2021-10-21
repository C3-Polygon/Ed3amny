import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillChatRightTextFill } from "react-icons/bs";
import Chat from "./chat";

function Home({ socket }) {
  let username = localStorage.getItem("CurrentUserId");
  let roomname = localStorage.getItem("CurrentUserId");
  const [show, setShow] = useState();
  const sendData = () => {
    if (username !== "" && roomname !== "") {
      socket.emit("joinRoom", { username, roomname });
      setShow(!show);
    } else {
      alert("username and roomname are must !");
      window.location.reload();
    }
  };

  return (
    <>
      <BsFillChatRightTextFill onClick={sendData} className="chat-icon" />
      {show && (
        <Chat
          username={username}
          roomname={roomname}
          socket={socket}
          onBlur={() => {
            setTimeout(() => {
              setShow(!show);
            }, 100);
          }}
        ></Chat>
      )}
    </>
  );
}

export default Home;
