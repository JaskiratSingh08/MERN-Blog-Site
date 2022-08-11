import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email id</label>
                <input className="loginInput" type="text" placeholder='Enter Your Email....' />
            <label>Password</label>
                <input className="loginInput" type="password" placeholder='Enter Your Password....' />
            <button className="loginButton">Login</button>
            <button className="loginRegButton">
              <Link to="/register" style={{textDecoration:"none",color:"#fff"}} >REGISTER</Link>
            </button>
        </form>
    </div>
  )
}

export default Login