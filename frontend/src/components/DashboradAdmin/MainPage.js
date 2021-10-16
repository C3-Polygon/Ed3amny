import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; 
import NavbarAdmin from './Navbar/NavbarAdmin';
import Count from './COUNT/Count';
import './MainPage.css';
const MainPage = ()=> {
    return (
        <>
        <div className='container'>
        <NavbarAdmin/>
        <Count/>
        </div>
        </>
    )
}

export default MainPage