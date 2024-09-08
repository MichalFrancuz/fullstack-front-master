// import React, { useState } from 'react';
// import { getEmployersByUser, loginUser } from './UserService.js';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: '',
//   });
//   const [msg, setMsg] = useState("")
//   const navigate = useNavigate();

//   const { email, password } = credentials;

//   const onInputChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     console.log(credentials);
//     try {
//         const response = await loginUser(credentials)


//         console.log("User Logged In Successfully", response);
//         setMsg("User Logged In Successfully");
//         localStorage.setItem("token", response.data.token); // Save token to localStorage
//         const userId = response.data.userId
//         localStorage.setItem("userId", userId)
//         getEmployersByUser(userId)
//         navigate("/employerslist")
//         setCredentials({
//             email: "",
//             password: "",
//         });
//     } catch (error) {
//         console.log(error);
//         setMsg("Error logging in. Please check your credentials.");
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Login</h2>
//       <form onSubmit={onSubmit}>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">
//             Email
//           </label>
//           <input
//             type="email"
//             className="form-control"
//             id="email"
//             name="email"
//             value={email}
//             onChange={onInputChange}
//             required
//           />
//         </div>

//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">
//             Password
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             id="password"
//             name="password"
//             value={password}
//             onChange={onInputChange}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary">
//           Login
//         </button>
//         {msg && <p className="text-danger">{msg}</p>}
//       </form>
//     </div>
//   );
// };

// export default Login;




import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext'; // Import AuthContext
import { getEmployersByUser, loginUser } from './UserService.js';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext); // Use login function from context
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const { email, password } = credentials;

  const onInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(credentials);
    try {
      const response = await loginUser(credentials);

      console.log("User Logged In Successfully", response);
      setMsg("User Logged In Successfully");
      
      // Use the login method from AuthContext
      login(response.data.token); // Save token to AuthContext
      const userId = response.data.userId;
      localStorage.setItem("userId", userId); // Save userId to localStorage
      getEmployersByUser(userId); // Fetch employers by user ID
      
      navigate("/employerslist"); // Redirect to employers list
      setCredentials({
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      setMsg("Error logging in. Please check your credentials.");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
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
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        {msg && <p className="text-danger">{msg}</p>}
      </form>
    </div>
  );
};

export default Login;
