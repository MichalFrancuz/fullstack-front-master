// import React, { useEffect, useState, useCallback } from 'react';
// import { getEmployersByUser, deleteEmployer } from './UserService';
// import AddEmployer from './AddEmployer';
// import EditEmployer from './EditEmployer';
// import { useNavigate } from 'react-router-dom';

// const EmployersList = ({ userId }) => {
//   const [employers, setEmployers] = useState([]);
//   const [error, setError] = useState(null);
//   const [editingEmployer, setEditingEmployer] = useState(null);
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const navigate = useNavigate();

//   const fetchEmployers = useCallback(async () => {
//     try {
//       const response = await getEmployersByUser(userId);
//       if (response.data && Array.isArray(response.data)) {
//         setEmployers(response.data);
//       } else {
//         setError("Unexpected response format");
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   }, [userId]);

//   useEffect(() => {
//     fetchEmployers();
//   }, [fetchEmployers]);

//   const handleAddClick = () => {
//     setEditingEmployer(null);
//     setIsFormVisible(true);
//   };

//   const handleEditClick = (employer) => {
//     setEditingEmployer(employer);
//     setIsFormVisible(true);
//   };

//   const handleDeleteClick = async (employerId) => {
//     if (window.confirm("Are you sure you want to delete this employer?")) {
//       try {
//         await deleteEmployer(employerId);
//         fetchEmployers();  // Refresh the list after deletion
//       } catch (error) {
//         setError("Error deleting employer: " + error.message);
//       }
//     }
//   };

//   const handleFormSave = () => {
//     setIsFormVisible(false);
//     fetchEmployers();
//   };

//   const handleFormCancel = () => {
//     setIsFormVisible(false);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     navigate("/");
//   };

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Employers List</h2>
//       <button onClick={handleAddClick}>Add Employer</button>
//       <button onClick={handleLogout} className="btn btn-danger ms-2">Logout</button>
//       {isFormVisible && (
//         editingEmployer ? (
//           <EditEmployer
//           employerData={editingEmployer}
//           onSave={handleFormSave}
//           onCancel={handleFormCancel}
//           />
//         ) : (
//         <AddEmployer
//           userId={userId}
//           onSave={handleFormSave}
//           onCancel={handleFormCancel}
//         />
//         )
//       )}

//       {employers.length > 0 ? (
//         <ul>
//           {employers.map((employer) => (
//             <li key={employer.id}>
//               <strong>Name:</strong> {employer.name} <br />
//               <strong>Surname:</strong> {employer.surname} <br />
//               <strong>Profession:</strong> {employer.profession} <br />
//               <strong>Gross Salary:</strong> {employer.grossSalary} <br />
//               <strong>Date of Start of Contract:</strong> {new Date(employer.dateOfStartContract).toLocaleDateString()} <br />
//               <button onClick={() => handleEditClick(employer)}>Edit</button>
//               <button onClick={() => handleDeleteClick(employer.id)} className="btn btn-danger ms-2">Delete</button>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>No employers found for this user.</p>
//       )}
//     </div>
//   );
// };

// export default EmployersList;


import React, { useEffect, useState, useCallback } from 'react';
import { getEmployersByUser, deleteEmployer } from './UserService';
import AddEmployer from './AddEmployer';
import EditEmployer from './EditEmployer';
import { useNavigate } from 'react-router-dom';

const EmployersList = ({ userId }) => {
  const [employers, setEmployers] = useState([]);
  const [error, setError] = useState(null);
  const [editingEmployer, setEditingEmployer] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const navigate = useNavigate();

  const fetchEmployers = useCallback(async () => {
    try {
      const response = await getEmployersByUser(userId);
      if (response.data && Array.isArray(response.data)) {
        setEmployers(response.data);
      } else {
        setError("Unexpected response format");
      }
    } catch (error) {
      setError(error.message);
    }
  }, [userId]);

  useEffect(() => {
    fetchEmployers();
  }, [fetchEmployers]);

  const handleAddClick = () => {
    setEditingEmployer(null);
    setIsFormVisible(true);
  };

  const handleEditClick = (employer) => {
    setEditingEmployer(employer);
    setIsFormVisible(true);
  };

  const handleDeleteClick = async (employerId) => {
    if (window.confirm("Are you sure you want to delete this employer?")) {
      try {
        await deleteEmployer(employerId);
        fetchEmployers();  // Refresh the list after deletion
      } catch (error) {
        setError("Error deleting employer: " + error.message);
      }
    }
  };

  const handleFormSave = () => {
    setIsFormVisible(false);
    fetchEmployers();
  };

  const handleFormCancel = () => {
    setIsFormVisible(false);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Employers List</h2>
      <button onClick={handleAddClick}>Add Employer</button>
      {isFormVisible && (
        editingEmployer ? (
          <EditEmployer
            employerData={editingEmployer}
            onSave={handleFormSave}
            onCancel={handleFormCancel}
          />
        ) : (
          <AddEmployer
            userId={userId}
            onSave={handleFormSave}
            onCancel={handleFormCancel}
          />
        )
      )}

      {employers.length > 0 ? (
        <ul>
          {employers.map((employer) => (
            <li key={employer.id}>
              <strong>Name:</strong> {employer.name} <br />
              <strong>Surname:</strong> {employer.surname} <br />
              <strong>Profession:</strong> {employer.profession} <br />
              <strong>Gross Salary:</strong> {employer.grossSalary} <br />
              <strong>Date of Start of Contract:</strong> {new Date(employer.dateOfStartContract).toLocaleDateString()} <br />
              <button onClick={() => handleEditClick(employer)}>Edit</button>
              <button onClick={() => handleDeleteClick(employer.id)} className="btn btn-danger ms-2">Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No employers found for this user.</p>
      )}
    </div>
  );
};

export default EmployersList;

