import './Sidebar.css'

function Sidebar() {
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
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Sports</li>
                <li className="sidebarListItem">Movies</li>
                <li className="sidebarListItem">Politics</li>
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