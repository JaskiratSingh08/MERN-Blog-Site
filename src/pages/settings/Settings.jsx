import Sidebar from '../../sidebar/Sidebar'
import './Settings.css'

function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">
                    Update Your Account
                </span>
                <span className="settingsDeleteTitle">
                    Delete Your Account
                </span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img 
                    className='settingsPPImg'
                    src="https://www.w3schools.com/howto/img_avatar.png" 
                    alt="Profile_Img" />
                    <label htmlFor="fileinput">
                    <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input type="file" id='fileinput' style={{display:"none"}} />
                </div>
                <label>Username</label>
                <input type="text" placeholder='Username' />
                <label>Email</label>
                <input type="email" placeholder='Email ID' />
                <label>Password</label>
                <input type="password" placeholder='Password' />
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings