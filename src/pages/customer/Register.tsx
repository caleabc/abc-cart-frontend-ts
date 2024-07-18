// Lib
import React, { useState } from "react";

// CSS
import "../../css/customer/register/register.css";

// Components
import Navbar from "../../components/customer/shared/Navbar";
import Spacer from "../../components/customer/shared/Spacer";

function Register() {
  let [email, setEmail] = useState("");

  return (
    <React.Fragment>
      <Navbar />

      <Spacer height={1} />

      <div className="register-main-div">
        <div className="register-div">
          <p className="register-header-text">Register</p>

          <label className="label-email">Email</label>
          <input
            className="register-input-field"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Spacer height={0.5} />

          <label className="label-password">Password</label>
          <input
            className="register-input-field"
            type="password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Spacer height={0.5} />

          <label className="label-password">Confirm Password</label>
          <input
            className="register-input-field"
            type="password"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Spacer height={0.5} />

          <button className="register-button">REGISTER</button>
          <Spacer height={2} />
          <div className="login-text-div">
            <p className="login-text">Login</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
