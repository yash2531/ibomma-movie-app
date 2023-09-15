import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import "../Styles/SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    if (!email || !password) {
      setError("Please enter both email and password !");
      return;
    }

    setError("");
    navigate("/Content");
  };

  return (
    <div className="Signin">
      <div className="Signin-container">
        <h2 className="Signin-header">Sign In</h2>
        {""}
        <br></br>
        <input
          className="input-name"
          type="text"
          placeholder="Enter your Email address"
          value={email}
          // onChange={inputBtn}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="input-pw"
          placeholder="Enter your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        { error && <p className="error-msg">{error}</p>}
        <br></br>
        <button className="Signin-button" onClick={handleSignIn}>
          SignIn
        </button>{" "}
     <br/>
        <br />
        <div className="remember-me">
          <label>
            <input 
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>
          <br />
        
          <nav>
            <p className="text-last">
              New to iBomma?
              <NavLink className="signup-link mt-3" to="/SignUp">
                {" "}
                {""}
                SignUp
              </NavLink>
            </p>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
