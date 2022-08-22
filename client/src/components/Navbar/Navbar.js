import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

import {useContext} from "react";
import {Context} from "../../context/Context"


function Navbar() {
  const PF = "http://localhost:4000/images/";
  const {user, dispatch} = useContext(Context) ;
  const handleLogout = ()=>{
    dispatch({type:"LOGOUT"});
  }
  return (
    <div className="Navbar">
      <div className="Navleft">
        <i className=" NavleftIcon fa-brands fa-square-facebook"></i>
        <i className=" NavleftIcon fa-brands fa-square-github"></i>
        <i className=" NavleftIcon fa-brands fa-square-instagram"></i>
        <i className=" NavleftIcon fa-brands fa-square-twitter"></i>
      </div>
      <div className="Navcenter">
        <ul className="NavList">
          <Link  className="NavListItem" to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
          <Link  className="NavListItem" to="/about" style={{textDecoration:"none", color:"inherit"}}>ABOUT</Link>
          <Link  className="NavListItem" to="/contact" style={{textDecoration:"none", color:"inherit"}}>CONTACT</Link>
          <Link  className="NavListItem" to="/write" style={{textDecoration:"none", color:"inherit"}}>WRITE</Link>
          <li className="NavListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="Navright">
        {user ? (
          <Link to="/settings">
          <img className="NavrightImg"
          src={PF+user.profilepic}
          alt='Profile-img'
          />
          </Link>

        ) :(
          <span className="NavList"> 
            <Link  className="NavListItem" to="/register" style={{textDecoration:"none", color:"inherit"}}>REGISTER</Link>
            <Link  className="NavListItem" to="/login" style={{textDecoration:"none", color:"inherit"}}>LOGIN</Link>
          </span>
          )
      
      }
        <i className=" NavSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Navbar