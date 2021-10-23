import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"; 
import NavbarAdmin from './Navbar/NavbarAdmin';
import Count from './COUNT/Count';
import './MainPage.css';
import ShowAllfundreiser from './ShowAllPost/ShowAllfundreiser';

const MainPage = ()=> {
    return (
        <div className="Main-app-admin">
        <div className='container'>
        <NavbarAdmin/>
        <Count/>
        <ShowAllfundreiser/>
        </div>
        </div>
    )
}

export default MainPage
