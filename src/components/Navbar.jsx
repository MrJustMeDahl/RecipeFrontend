import React, { useState } from "react";
import "../styling/Navbar.css";

const Navbar = () => {

  const [currentUser, setCurrentUser] = useState({
    username: "guest",
    role: "guest", //skal lige rettes til så den tager et input fra backend
  });

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);

  const handleUserDropdownToggle = () => {
    console.log("User Dropdown has been clicked");
    setIsUserDropdownOpen(!isUserDropdownOpen);
    setIsLoginDropdownOpen(false);
  };

  const handleLoginDropdownToggle = () => {
    console.log("Login Dropdown has been clicked");
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
    setIsUserDropdownOpen(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="/recommended#">Home</a>
        <a href="/about#">About</a>
        <a href="/contact#">Contact</a>
        <a href="#">Sign Up</a>
      </div>
      <div className="navbar-right">
      <button className="nav-button" onClick={handleUserDropdownToggle}>
          User
          {isUserDropdownOpen && (
            <div className="dropdown-content">
              {currentUser.role === "admin" && (
                <>
                <a href="/recipes#">Show recipies</a>
                <a href="#">See users/writers</a>
                </>
              )}
              {currentUser.role === "user" && (
                <>
                <a href="recipes#">Show recipies</a>
                <a href="#">Show favorites</a>
                </>
              )}
              {currentUser.role === "writer" && (
                <>
                <a href="recipes#">Show recipies</a>
                <a href="#">Show favorites</a>
                <a href="#">Add new recipies</a>
                <a href="#">Edit recipies</a>
                </>
              )}
              {currentUser.role === "guest" && (
                <>
                <a href="recipes#">Show recipies</a>
                </>
              )}
              
            </div>
          )}
        </button>
      <button className="nav-button" onClick={handleLoginDropdownToggle}>
          Login
          {isLoginDropdownOpen && (
            <div className="dropdown-content login-dropdown">
              <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                <button type="submit">Login</button>
              </form>
            </div>
          )}
        </button>
        <button className="nav-button">Log Out</button>
      </div>
      </div>
  );
};

export default Navbar;
