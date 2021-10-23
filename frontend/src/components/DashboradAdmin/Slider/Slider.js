import React from 'react'
import './Slider.css';

const Slider = () => {
    return (
        <>
        <input type="checkbox" id="nav-toggle"/>
        
        <div class="sidebar">
        <div class="sidebar-brand">
            <h2> <span>Dashborad</span></h2>
        </div>
        <div class="sidebar-menu">
            <ul>
                <li>
                    <a href="" class="active"><span class="las la-home"></span>
                    <span>Home</span></a>
                </li>
                <li>
                    <a href=""><span class="las la-user"></span>
                    <span>Users</span></a>
                </li>
                <li>
                    <a href=""><span class="las la-user"></span>
                    <span>Account</span></a>
                </li>
                <li>
                    <a href=""><span class="las la-user-injured"></span>
                    <span>Pending</span></a>
                </li>
            </ul>
        </div>
    </div>
</>
    )
}

export default Slider
