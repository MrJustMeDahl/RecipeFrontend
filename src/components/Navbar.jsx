import React, { useState } from "react";
import "../styling/Navbar.css";
import Modal from "./Modal";

const Navbar = () => {

  const [currentUser, setCurrentUser] = useState({
    username: "guest",
    role: "guest", //skal lige rettes til så den tager et input fra backend
  });

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      </div>
      <div className="navbar-right">
      <button className="nav-button" onClick={handleUserDropdownToggle}>
          {currentUser.username}
          {isUserDropdownOpen && (
            <div className="dropdown-content">
              {currentUser.role === "admin" && (
                <>
                <a href="/recipes#">Show recipies</a>
                <a href="/admin#">See users/writers</a>
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

        <button className="nav-button-modal" onClick={() => setIsModalOpen(true)}>Login</button>

        <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <label htmlFor="username"></label>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <input type="text" id="username" name="username" placeholder="Username" style={{marginBottom: '10px', border: 'groove'}}/>
                <label htmlFor="password"></label>
                <input type="password" id="password" name="password" placeholder="Password" style={{marginBottom: '10px', border: 'groove'}}/>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button type="submit">Login</button>
                <a href="#">Sign Up</a>
                </div>
        </Modal>
        <button className="nav-button">Log Out</button>
      </div>
      </div>
  );
};

export default Navbar;
