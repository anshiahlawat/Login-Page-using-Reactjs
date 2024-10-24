import React, { useState } from "react";

export default function Authform() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container">
      <div className="form-container">
        <div className="button">
          <button
            className={isLogin ? "active" : ""}
            onClick={() => setIsLogin(true)}>
          
            Login
          </button>
          <button
            className={!isLogin ? "active" : ""}
            onClick={() => setIsLogin(false)}>
          
            SignUp
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="enter your email" />
              <input type="password" placeholder="enter your password" />
              <a href="#">forget password</a>
              <button>Login</button>
              <p>
                Not a Member?{" "}
                <a href="#" onClick={() => setIsLogin(false)}>
                  SignUp Now
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>Signup Form</h2>
              <input type="email" placeholder="enter your email" />
              <input type="password" placeholder="enter your password" />
              <input type="password" placeholder="confirm password" />
              <button>SignUp</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
