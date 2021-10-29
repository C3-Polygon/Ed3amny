import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import MainPageD from './MainPage/MainPageD';

const MainPage = ({socket})=> {
    console.log("mainpage")
    return (
        <div className="Main-app-admin">      
        <MainPageD socket={socket}/>
        </div>
        
    )
}

export default MainPage
