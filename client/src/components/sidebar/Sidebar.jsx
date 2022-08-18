import './Sidebar.css'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

function Sidebar() {
    const [cat, setCat] = useState([]);
    
    useEffect(()=>{
        const getCat = async ()=>{
            const res = await axios.get('/categories')
            setCat(res.data)
        }
        getCat();
    },[])

  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">
                    About Me
            </span>
                <img className="sidebarImg"
                src='https://www.w3schools.com/howto/img_avatar.png'
                alt="Sidebar-img"/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    Placeat minus laborum quia expedita modi adipisci ex voluptatum, 
                    repellat pariatur!
                </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                    CATEGORIES
            </span>
            <ul className="sidebarList">
                {cat.map(c=>(
                    <Link to={`/?cat=${c.name}`}>
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">
                Follow Us!
            </span>
            <div className="sidebarSocials">
                <i className=" sidebarIcon fa-brands fa-square-facebook"></i>
                <i className=" sidebarIcon fa-brands fa-square-github"></i>
                <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
                <i className=" sidebarIcon fa-brands fa-square-twitter"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar