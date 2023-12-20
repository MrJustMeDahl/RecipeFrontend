import React, { useState } from "react";
import "../styling/Navbar.css";
import { Link } from 'react-router-dom';
import Modal from "./Modal";
import loginFacade from "../facade/loginFacade";

const Navbar = () => {

  const { logout, isLoggedIn } = loginFacade;

  const initialUser = {
    username: "guest",
    role: "guest"
  };

  const [currentUser, setCurrentUser] = useState(initialUser);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUserDropdownToggle = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = () => {
    setCurrentUser(initialUser);
    logout();
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="/recommended#">Home</a>
        <a href="/about#">About</a>
        <a href="/contact#">Contact</a>
      </div>
      <div className="navbar-right">
        <p>{currentUser.user}</p>
      <button className="nav-button" onClick={handleUserDropdownToggle}>
          {currentUser.role}
          {isUserDropdownOpen && (
            <div className="dropdown-content">
              {currentUser.role === "admin" && (
                <>
                <a href="/recipes#">Show recipies</a>
                <a href="/admin#">See users/writers</a>
                </>
              )}
              {currentUser.role === "reader" && (
                <>
                <a href="recipes#">Show recipies</a>
                <a href="#">Show favorites</a>
                </>
              )}
              {currentUser.role === "author" && (
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

        {!isLoggedIn() ? (
        <div>
          <button className="nav-button-modal" onClick={() => setIsModalOpen(true)}>Login</button>

          <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
            <label htmlFor="username"></label>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <input type="text" id="username" name="username" placeholder="Username" style={{marginBottom: '10px', border: 'groove'}}/>  
              <input type="password" id="password" name="password" placeholder="Password" style={{marginBottom: '10px', border: 'groove'}}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="submit">Login</button>
              <Link to="/signup">Sign Up</Link>
            </div>
          </Modal> 
        </div>
        ) : (
        <div>
          <button className="nav-button" onClick={handleLogout}>Log Out</button>
        </div>
        )}
      </div>
      </div>
  );
};

export default Navbar;
