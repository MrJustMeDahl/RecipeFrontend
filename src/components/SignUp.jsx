import React, { useState } from "react";
import "../styling/SignUp.css";
import loginFacade from "../facade/loginFacade";

const SignUp = () => {

    const { register } = loginFacade;

    const [newUser, setNewUser] = useState({ 
        email: "",
        name: "",
        password: "",
        isAuthor: false
 });

 const handleSubmission = (event) => {
    event.preventDefault();
    if(newUser.isAuthor){
        register(newUser.email, newUser.password, newUser.name, 'author');
    } else {
        register(newUser.email, newUser.password, newUser.name, 'reader');
    }
    
    setNewUser({
        email: "",
        name: "",
        password: "",
    });
 };

 const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewUser({ ...newUser, [name]: value });
 };

 const handleChekboxChange = (event) => {
    setNewUser({ ...newUser, isAuthor: event.target.checked });
    };

 return (
    <div className="signup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmission}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newUser.email}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={newUser.name}
                    onChange={handleInputChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={newUser.password}
                    onChange={handleInputChange}
                />
                <div><input
                    type="checkbox"
                    name="isAuthor"
                    checked={newUser.isAuthor}
                    onChange={handleChekboxChange}
                /> I want to be an author</div>
            
            <button type="submit">Sign Up</button>
        </form>
    </div>
    );
}

export default SignUp;