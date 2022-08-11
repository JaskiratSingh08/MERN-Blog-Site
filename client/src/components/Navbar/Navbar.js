import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  const user = false;
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
          <li className="NavListItem">
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="Navright">
        {user ? (
          <img className="NavrightImg"
          src='https://www.w3schools.com/howto/img_avatar.png'
          alt='Profile-img'
          />

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