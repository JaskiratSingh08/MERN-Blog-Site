import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [firstname, setFirstname] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        firstname,
        middlename,
        lastname,
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>

      <label>First Name</label>
                <input className="registerInput" 
                type="text" 
                placeholder='First Name' 
                required
                onChange={e=>setFirstname(e.target.value)}
                />
            <label>Middle Name</label>
                <input className="registerInput" 
                type="text" 
                placeholder='Middle Name'
                onChange={e=>setMiddlename(e.target.value)}
                />
            <label>Last Name</label>
                <input className="registerInput" 
                type="text" 
                placeholder='Last Name' required
                onChange={e=>setLastname(e.target.value)}
                />

        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLogButton">
        <Link to="/login" style={{textDecoration:"none",color:"inherit"}}>
          Login
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}