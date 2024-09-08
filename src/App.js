
// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Navbar from './layout/Navbar';
// import Home from './pages/Home';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import EmployersList from './pages/EmployersList';
// import SignUp from './pages/SignUp';

// function App() {
//   return (
//   <div className="App">
//     <Router>
//     <Navbar/>

//     <Routes>
//     <Route exact path="/" element={<Home/>}/>
//     <Route path="/signup" element={<SignUp />}/>
//     <Route path="/login" element={<Login />}/>
//     <Route path="/employerslist" element={<EmployersList />}/>
//     </Routes>
     
//     </Router>

//     </div>
//   );
  
// }

// export default App;

// src/App.js
import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import EmployersList from './pages/EmployersList';
import SignUp from './pages/SignUp';
import { AuthProvider } from './pages/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/employerslist" element={<EmployersList />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

