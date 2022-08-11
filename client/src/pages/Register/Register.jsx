import './Register.css'
import { Link } from 'react-router-dom'

/*
import TextField from '@mui/material/TextField';
<TextField className="registerInput" id="standard-basic" label="Write your ToDo" placeholder="Middle Name"/>
*/

function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>First Name</label>
                <input className="registerInput" 
                type="text" 
                placeholder='First Name' 
                required/>
            <label>Middle Name</label>
                <input className="registerInput" 
                type="text" 
                placeholder='Middle Name' required/>
            <label>Last Name</label>
                <input className="registerInput" 
                type="text" 
                placeholder='Last Name' required/>
            <label>Email id</label>
                <input className="registerInput" 
                type="email" 
                placeholder='Enter Your Email....' required/>
            <label>Password</label>
                <input className="registerInput" 
                type="password" 
                placeholder='Enter Your Password....' required/>
            <button className="registerButton">Register</button>
            <button className="registerLogButton">
            <Link to="/login" style={{textDecoration:"none",color:"#fff"}} >LOGIN</Link>
            </button>
        </form>
    </div>
  )
}

export default Register