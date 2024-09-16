import { FaUser, FaLock } from "react-icons/fa";

import { userState, useState} from "react";

import "./login.css";

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPasssword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Enviando os dados" + username + " - " + password)
        console.log("Sent!")
    };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Login Page</h1>
            <div className="input-field">
                <input type="email"
                 placeholder="E-mail"
                 onChange={(e) => setUsername (e.target.value)}/>
                <FaUser className="icon" />
            </div>
            <div className="input-field">
                <input
                 type="password"
                  placeholder='Password'
                  onChange={(e) => setPasssword (e.target.value)} />
                <FaLock className="icon" />
            </div>
            <div className="recall-forget">
                <label htmlFor="">
                    <input type="checkbox"/>
                    Remember Me
                </label>
                <a href="#"> Forgot Password</a>
            </div>
            <button>Login</button>
            <div className="signup-link">
                <p>
                    New User? <a href="#">Create Account</a>
                </p>
            </div>
            
        </form>
      </div>
    </div>
  )
}

export default Login
