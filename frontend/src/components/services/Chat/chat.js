// 7ushki.com
import { to_Decrypt, to_Encrypt } from "../../aes";
import { process } from "../../reducers/chat/reducers";
import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";

function Chat({ username, roomname, socket }) {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);

  const dispatch = useDispatch();
  const dispatchProcess = (encrypt, msg, cipher) => {
    dispatch(process(encrypt, msg, cipher));
  };

  useEffect(() => {
    socket.on("message", (data) => {
      const ans = to_Decrypt(data.text, data.username);
      dispatchProcess(false, ans, data.text);
      let temp = messages;
      temp.push({
        userId: data.userId,
        username: data.username,
        text: ans,
      });
      setMessages([...temp]);
    });
  }, [socket]);
  const sendData = () => {
    if (text !== '') {
      //encrypt the message here
      const ans = to_Encrypt(text);
      socket.emit("chat", ans);
      setText("");
    }
  };
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div>
      <div>
        <h2>
          {username} <span style={{ fontSize: "0.7rem" }}> in {roomname}</span>
        </h2>
      </div>
      <div>
        {messages.map((elm) => {
          if (elm.username === username) {
            return (
              <div>
                <p>{elm.text}</p>
                <span>{elm.username}</span>
              </div>
            );
          } else {
            return (
              <div>
                <p>{elm.text}</p>
                <span>{elm.username}</span>
              </div>
            );
          }
        })}
        <div ref={messagesEndRef}></div>
      </div>
      <div>
        <input
          placeholder="enter your message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              sendData();
            }
          }}
        ></input>
        <button onClick={sendData}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
