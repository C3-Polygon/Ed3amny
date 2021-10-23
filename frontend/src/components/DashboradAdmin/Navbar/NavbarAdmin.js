import React from 'react' 
import Nav from 'react-bootstrap/Nav';
import '../Slider/Slider.css';
import {useHistory} from 'react-router-dom';

// import NavDropdown from 'react-bootstrap/NavDropdown';

const  NavbarAdmin = () => {
  const history = useHistory();
    return (
      <div className="main-content">
      <header>
      <h2>
          <label for="nav-toggle">
              <span class="las la-bars"></span>
          </label> Admin
      </h2>

      <div class="search-wrapper">
          <span class="las la-search"></span>
          <input type="search" placeholder="Search ..." />
      </div>
      <div class="user-wrapper">
          <img src="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png" width="80px" height="50px" alt=""/>
          <div>
              <h4>Administrador</h4>
              <button onClick={()=>{history.push('/')}}>Logout</button>
          </div>
      </div>
  </header>
  </div>
    )
}

export default NavbarAdmin
