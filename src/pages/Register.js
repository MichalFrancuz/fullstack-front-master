import React, { useState } from 'react';
import { saveUser } from './UserService.js';

const Register = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
    fullName: '',
  });
  const [msg, setMsg] = useState("")

  const { email, password, fullName } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
        await saveUser(user)
        console.log("User Added Successfully");
        setMsg("Used Added Sucessfully");
        setUser({
            email: "",
            password: "",
            fullName: "",
        })
    } catch (error) {
        console.log(error);
        setMsg("Error adding user. Please check your input.");
    }
};

  return (
    <div className="container">
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={email}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={password}
            onChange={onInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full name
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            name="fullName"
            value={fullName}
            onChange={onInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      {msg && <p className="mt-3">{msg}</p>}
    </div>
  );
};

export default Register;

// to do response and msg
