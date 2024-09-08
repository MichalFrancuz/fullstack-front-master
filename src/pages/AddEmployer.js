import React, { useState } from 'react';
import { addEmployer } from './UserService';

const AddEmployer = ({ userId, onSave, onCancel }) => {
  const [employer, setEmployer] = useState({
    name: '',
    surname: '',
    profession: '',
    grossSalary: '',
    dateOfStartContract: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addEmployer(employer);
      onSave()
    } catch (error) {
      console.error('Error adding employer:', error)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={employer.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Surname:</label>
        <input
          type="text"
          name="surname"
          value={employer.surname}
          onChange={handleChange}
          required
        />

      </div>
      <div>
        <label>Profession:</label>
        <input
          type="text"
          name="profession"
          value={employer.profession}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Gross Salary:</label>
        <input
          type="number"
          name="grossSalary"
          value={employer.grossSalary}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Date of Start of Contract:</label>
        <input
          type="date"
          name="dateOfStartContract"
          value={employer.dateOfStartContract}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <button type="submit">Add Employer</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default AddEmployer;
