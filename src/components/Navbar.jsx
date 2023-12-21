import React, { useEffect, useState } from "react";
import "../styling/Navbar.css";
import { Link } from 'react-router-dom';
import Modal from "./Modal";
import loginFacade from "../facade/loginFacade";

const Navbar = ({currentUser, setCurrentUser}) => {

  const { logout, isLoggedIn, login, getUserRole } = loginFacade;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if(isLoggedIn()){
    const user = {
      username: localStorage.getItem('username'),
      role: getUserRole(),
    }
    setCurrentUser(user);
  } else {
    const user = {
      username: "guest",
      role: "guest"
    };
    setCurrentUser(user);
  }
    
  }, [])

  const handleUserDropdownToggle = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
  };

  const handleLogout = () => {
    logout();
    const user = {
      username: "guest",
      role: "guest",
    }
    setCurrentUser(user);
  };

  const handleLogin = async () => {
      await login(email, password);
      const user = {
        username: localStorage.getItem('username'),
        role: getUserRole(),
      }
      setIsModalOpen(false);
      setCurrentUser(user);
  }

  return (
    <div className="navbar">
      <div className="navbar-left">
        <a href="/recommended#">Home</a>
        <a href="/about#">About</a>
        <a href="/contact#">Contact</a>
      </div>
      <div className="navbar-right">
        <p>{currentUser.username}</p>
      <button className="nav-button" onClick={handleUserDropdownToggle}>
          {currentUser.role}
          {isUserDropdownOpen && (
            <div className="dropdown-content">
              {currentUser.role === "admin" && (
                <>
                <a href="/recipes">Show recipies</a>
                <a href="/admin">See users/writers</a>
                </>
              )}
              {currentUser.role === "reader" && (
                <>
                <a href="recipes">Show recipies</a>
                <a href="#">Show favorites</a>
                </>
              )}
              {currentUser.role === "author" && (
                <>
                <a href="recipes">Show recipies</a>
                <a href="#">Show favorites</a>
                <a href="#">Add new recipies</a>
                <a href="#">Edit recipies</a>
                </>
              )}
              {currentUser.role === "guest" && (
                <>
                <a href="recipes">Show recipies</a>
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
              <input type="text" onChange={(event) => setEmail(event.target.value)} id="username" name="username" placeholder="Username" style={{marginBottom: '10px', border: 'groove'}}/>  
              <input type="password" onChange={(event) => setPassword(event.target.value)} id="password" name="password" placeholder="Password" style={{marginBottom: '10px', border: 'groove'}}/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <button type="submit" onClick={handleLogin}>Login</button>
              <Link to="/signup" onClick={() => setIsModalOpen(false)}>Sign Up</Link>
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
