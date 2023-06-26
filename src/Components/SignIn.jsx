import React from 'react'
import "./SignIn.css";
import logo from "./Assets/logo1.png.jpeg";

function SignIn() {
  return (
    <div>
        <img id="applogo" src={logo} alt="" />
          <div className="login-form">
            <div>
              {" "}
              <h1 id="heading">WELCOME!</h1>{" "}
            </div>
            <input type="text" placeholder="username" />
            <input type="text" placeholder="password" />

            <button>LOGIN</button>

            <span className="forgot-password">
              <a
                href="no-javascript1.html"
                title="Forgot Password"
                id="link-reset"
              >
                Forgot Password?
              </a>
            </span>
          </div>
    </div>
  )
}

export default SignIn