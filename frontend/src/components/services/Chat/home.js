import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillChatRightTextFill } from "react-icons/bs";


function Home ({socket}){

    let username = localStorage.getItem('CurrentUserId')
    let roomname = localStorage.getItem('CurrentUserId')
    const sendData = () => {
        if(username !== "" && roomname !== "" ){
            socket.emit('joinRoom',{username, roomname })
        }else{
            alert("username and roomname are must !");
            window.location.reload();
        }
    }

    return (<>
      <Link to={`/chat/${roomname}/${username}`}>
        <BsFillChatRightTextFill onClick={sendData} className='chat-icon'/> 
      </Link>
    </>)
}

export default Home;