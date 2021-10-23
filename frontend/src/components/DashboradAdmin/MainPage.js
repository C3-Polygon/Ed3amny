import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; 
import NavbarAdmin from './Navbar/NavbarAdmin';
import './MainPage.css';
import Slider from './Slider/Slider';
import MainPageD from './MainPage/MainPageD';

const MainPage = ()=> {
    return (
        <div className="Main-app-admin">
        <NavbarAdmin/>
        <Slider/>
        <MainPageD/>
        </div>
        
    )
}

export default MainPage
