import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import {AuthContext} from '../../context/AuthContext'
import axios from 'axios'

function Navbar() {

  
  const {user,dispatch} = useContext(AuthContext);

   console.log(user)


   const handleLogout = async()=>{

    await axios.get('/auth/logout')
    localStorage.setItem('user',null);
    dispatch({type:"LOGOUT"})

   }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking.com</span>
        </Link>
        <div className="navItems">
          {user? (<div className="container">
          <div className="name">
            Hello, {user.username}
            </div>
            <div className="signout">
              <a onClick={handleLogout}>Signout</a>
              
            </div>
          
          </div>):(<><Link to="/register">
            <button className="navButton">Register</button>
          </Link>
          <Link to="/login">
            <button className="navButton">Login</button>
          </Link></>)}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
