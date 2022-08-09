import React from 'react'
import './Navbar.css'

function Navbar() {
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
          <li className="NavListItem">Home</li>
          <li className="NavListItem">Contact</li>
          <li className="NavListItem">About</li>
          <li className="NavListItem">Write</li>
          <li className="NavListItem">Logout</li>
        </ul>
      </div>
      <div className="Navright">
        <img className="NavrightImg"
        src='https://www.w3schools.com/howto/img_avatar.png'
        alt='Profile-image'
        />
        <i className=" NavSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Navbar