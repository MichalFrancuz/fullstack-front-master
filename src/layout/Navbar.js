// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Navbar() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [loading, setLoading] = useState(true); // Loading state to ensure token check
//   const navigate = useNavigate();

//   // Check authentication status on component mount
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     setIsLoggedIn(!!token); // Use double negation to convert to boolean
//     setLoading(false); // Stop loading once check is done
//   }, []);

//   // Function to handle logout and account navigation
//   const handleAuthClick = () => {
//     if (isLoggedIn) {
//       // Log out logic here, removing token from local storage
//       localStorage.removeItem('token');
//       localStorage.removeItem('userId');
//       setIsLoggedIn(false); // Update state to reflect logout
//       navigate('/login'); // Redirect to login page after logout
//     } else {
//       navigate('/signup'); // Redirect to the SignUp component
//     }
//   };

//   // Function to handle account navigation
//   const handleAccountClick = () => {
//     if (isLoggedIn) {
//       navigate('/employerslist'); // Redirect to the list of employers
//     } else {
//       navigate('/login'); // Redirect to Login page if not logged in
//     }
//   };

//   // Update isLoggedIn state when localStorage changes
//   useEffect(() => {
//     const handleStorageChange = () => {
//       const token = localStorage.getItem('token');
//       setIsLoggedIn(!!token); // Update the isLoggedIn state based on token presence
//     };

//     window.addEventListener('storage', handleStorageChange);

//     // Cleanup event listener on unmount
//     return () => {
//       window.removeEventListener('storage', handleStorageChange);
//     };
//   }, []);

//   // Show a loading spinner or empty state while checking authentication
//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//         <div className="container-fluid">
//           <Link className="navbar-brand" to="/">
//             Employers Manager
//           </Link>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <button
//                   className="btn btn-outline-light me-2"
//                   onClick={handleAuthClick}
//                 >
//                   {isLoggedIn ? 'Logout' : 'Create Account'}
//                 </button>
//               </li>
//               <li className="nav-item">
//                 <button
//                   className="btn btn-outline-light"
//                   onClick={handleAccountClick}
//                 >
//                   {isLoggedIn ? 'My Account' : 'Login'}
//                 </button>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }



// src/layout/Navbar.js
import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '/Users/michal/Desktop/Entry Software Developer Admission/ListOfEmployers_SpringBoot_React/ListOfEmployers_React/fullstack-front-master/src/pages/AuthContext.js';

export default function Navbar() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isLoggedIn) {
      logout(); // Call the logout function from context
      navigate('/login'); // Redirect to login page after logout
    } else {
      navigate('/signup'); // Redirect to the SignUp component
    }
  };

  const handleAccountClick = () => {
    if (isLoggedIn) {
      navigate('/employerslist'); // Redirect to the list of employers
    } else {
      navigate('/login'); // Redirect to Login page if not logged in
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Employers Manager
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <button
                  className="btn btn-outline-light me-2"
                  onClick={handleAuthClick}
                >
                  {isLoggedIn ? 'Logout' : 'Create Account'}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-light"
                  onClick={handleAccountClick}
                >
                  {isLoggedIn ? 'My Account' : 'Login'}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

