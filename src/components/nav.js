import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

function Nav(){
  const navStyle = {
    color: 'white', 
  }
  return(
    <>
      <div className="App">
        <nav >
          <Link style={navStyle} to='/'><h3>Home</h3></Link>
          <ul className="nav-links">
            <Link style={navStyle} to='/services'><li>Services</li></Link>
            <Link style={navStyle} to='/about' ><li>About</li></Link>
            <Link style={navStyle} to='/contact'><li>Contact</li></Link>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Nav;