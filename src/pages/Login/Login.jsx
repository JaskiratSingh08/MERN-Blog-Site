import './Login.css'

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
            <button className="loginRegButton">Register</button>
        </form>
    </div>
  )
}

export default Login