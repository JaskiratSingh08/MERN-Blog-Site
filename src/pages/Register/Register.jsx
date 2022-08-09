import './Register.css'

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
                placeholder='Middle Name' />
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
            <button className="registerLogButton">Login</button>
        </form>
    </div>
  )
}

export default Register