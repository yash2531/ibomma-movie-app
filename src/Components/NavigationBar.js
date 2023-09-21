import React from "react";
import { NavLink } from "react-router-dom";
import "../Styles/NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav className="navbar">
      <div className="container-nav">
        <div className="title-ibomma">
          {/* <h1 className="heading-c">iBOMMA</h1>  */}
          <NavLink  className="heading-c" to='/'>iBOMMA</NavLink>
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/Home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/Bug">Bug</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/SignIn">SignIn</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavigationBar;