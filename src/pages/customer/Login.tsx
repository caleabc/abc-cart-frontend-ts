// Lib
import React, { useState } from "react";

// CSS
import "../../css/customer/login/login.css";

// Components
import Navbar from "../../components/customer/shared/Navbar";
import Spacer from "../../components/customer/shared/Spacer";

function Login() {
  let [email, setEmail] = useState("");

  return (
    <React.Fragment>
      <Navbar />

      <Spacer height={1} />

      <div className="login-main-div">
        <div className="login-div">
          <p className="login-header-text">Login</p>

          <label className="label-email">Email</label>
          <input
            className="login-input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Spacer height={0.5} />

          <label className="label-email">Password</label>
          <input
            className="login-input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Spacer height={0.5} />

          <button className="login-button">LOGIN</button>
          <Spacer height={2} />
          <div className="register-text-div">
            <p className="register-text">Register</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Login;
