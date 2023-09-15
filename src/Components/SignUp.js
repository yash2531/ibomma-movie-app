import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Styles/SignUp.css";
import { useLocation } from "react-router-dom";


const SignUp = () => {
  
  const navigate = useNavigate();

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [redirecting,setRedirecting] =useState(false);
  const location = useLocation();
  const message = location.state?.message;

  const isFormValid = () => {
    return (
      firstname.trim() !== "" &&
      lastname.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== ""
    );
  };

  const handleSignUp = (e) => {
    e.preventDefault()
    if (!isFormValid()) {
      setPasswordError("Please fill all required fields !");
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match!");
      return;
    }
    setPasswordError("");
    setRedirecting(!redirecting);
    setTimeout(() =>{
      // navigate("/SignIn");
      navigate("/SignIn", { message: "Redirecting to SignIn page..." });

    },3000
    )
   
  };

  return (
    <div>
    {
      redirecting ? <div className="signup"> 
       <div className="signup-container">Redirecting to SignIn page ... {message} </div></div> :
       <form  className="signup" required>
      <div className="signup-container">
        <h2 className="signup-header">New User? SignUp</h2>
        <br />
        
          <input 
          className="input-fname"
          type="text"
          placeholder="First Name"
          value={firstname}
          // required
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <input
          className="input-lname"
          type="text"
          placeholder="Last Name"
          value={lastname}
          // required

          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <input
          className="input-email"
          type="text"
          placeholder="Email"
          value={email}
          // required

          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          className="input-pw"
          type="password"
          placeholder="Password"
          value={password}
          // required

          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
          className="input-pw-c"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          // required

          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
        /> 
       
        {passwordError && <p className="error-message">{passwordError}</p>}
        
        <button
          className="signup-button"
          onClick={handleSignUp}
          
          disabled={!isFormValid()}
        >
          SignUp
        </button>
        {""}
        <br />
        <br/>
        <nav>
          <p>
            Already Registered?
            <NavLink className="signin-link" to="/SignIn">
              {" "}
              SignIn
            </NavLink>
          </p>
        </nav>
      </div> 
        
    </form>
    
    } </div>
  );
};

export default SignUp;


// {message && <p className="error-message">{message}</p>}