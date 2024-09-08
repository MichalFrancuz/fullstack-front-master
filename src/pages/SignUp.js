import React, { useState } from 'react';
import { registerUser } from './UserService.js'; // Ensure you have a registerUser function in UserService
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const { email, password, confirmPassword } = credentials;

  const onInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMsg("Passwords do not match");
      return;
    }

    try {
      const response = await registerUser({ email, password });
      console.log("User Registered Successfully", response);
      setMsg("User Registered Successfully");
      navigate("/login"); // Redirect to login after successful registration
    } catch (error) {
      console.log(error);
      setMsg("Error registering. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Create Account</h2>
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
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={onInputChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create Account
        </button>
        {msg && <p className="text-danger">{msg}</p>}
      </form>
    </div>
  );
};

export default SignUp;
