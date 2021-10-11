import React from 'react'
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsBellFill ,BsSearch,BsGrid3X3GapFill} from 'react-icons/bs';
const Navbar = ()=> {
    return (
        <>
        <div class='container'>
            <div className="navbar">
                <h5>LogoName</h5>
                <div className="search-bar">
                    <input type='search' placeholder='Search Here ...'/>
                    <BsSearch className="search"/>
                </div>
                <div>
                    <button className='btn-login'>Login</button>
                    <BsBellFill/>
                    <BsGrid3X3GapFill className="small-media"/>
                </div>

            </div>
        </div>

        </>
    )
}

export default Navbar
