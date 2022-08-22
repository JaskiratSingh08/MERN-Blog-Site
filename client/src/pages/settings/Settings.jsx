import axios from 'axios';
import { useContext, useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import { Context } from '../../context/Context'
import './Settings.css'

function Settings() {
    const {user, dispatch} = useContext(Context);
    const [file, setFile] = useState(null);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [success, setSuccess] = useState(false);
    const PF = "http://localhost:4000/images/";

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({type:"UPDATE_START"})
        const updatedUser = {
            userId:user._id,
            username,
            email,
            password
        }

    if(file){
        const data = new FormData();
        const filename = Date.now() + file.name;
        data.append("name",filename);
        data.append("file",file);
        updatedUser.profilepic = filename;
        try{
            await axios.post("/upload", data);
        }catch(err){
            console.log(err)    
        }
    }
    try {
        const res = await axios.put("/users/"+user._id,updatedUser);
        setSuccess(true);
        dispatch({type:"UPDATE_SUCCESS", payload:res.data});
    }catch(err){
        console.log(err)   
        dispatch({type:"UPDATE_FAILURE"}) 
    }
}

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
            <form className="settingsForm" onSubmit={handleSubmit}>
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img 
                    className='settingsPPImg'
                    src={file ? URL.createObjectURL(file) : PF+user.profilepic} 
                    alt="Profile_Img" />
                    <label htmlFor="fileinput">
                    <i className="settingsPPIcon fa-solid fa-circle-user"></i>
                    </label>
                    <input 
                    type="file" 
                    id='fileinput' 
                    style={{display:"none"}} 
                    onChange={(e)=>setFile(e.target.files[0])}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)}/>
                <label>Email</label>
                <input type="email" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" placeholder={user.password} onChange={e=>setPassword(e.target.value)}/>
                <button className="settingsSubmit" type='submit'>Update</button>
                {success && 
                <span style={{color:"green",textAlign:"center",marginTop:"20px"}}>Profile has been Updated!</span>}
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings