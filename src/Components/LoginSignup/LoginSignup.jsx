import React, { useState } from "react";
import "./LoginSignup.css";
import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");

  // ⭐ Add email + password states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ⭐ Firebase Signup
  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("Signup successful"))
      .catch((err) => alert(err.message));
  };

  // ⭐ Firebase Login
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("Login successful"))
      .catch((err) => alert(err.message));
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">
          {action}
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {/* Hide username in Login */}
          {action === "Login" ? null : (
            <div className="input">
              <img src={user_icon} alt="" />
              <input type="text" placeholder="Username" />
            </div>
          )}

          <div className="input">
            <img src={email_icon} alt="" />
            <input
              type="email"
              placeholder="Email-Id"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input">
            <img src={password_icon} alt="" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>

        {/* Hide forgot password in Sign Up */}
        {action === "Sign Up" ? null : (
          <div className="forget-password">
            Lost Password?<span> Click Here</span>
          </div>
        )}

        {/* Buttons */}
        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
              handleSignup();
            }}
          >
            Sign Up
          </div>

          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
              handleLogin();
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
