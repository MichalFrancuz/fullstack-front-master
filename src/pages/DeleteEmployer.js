import React, { useState } from 'react';
import { deleteUser } from './UserService';

const DeleteUser = ({ userId, onDelete, onCancel }) => {
  const [confirmation, setConfirmation] = useState('');

  const handleChange = (e) => {
    setConfirmation(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmation.toLowerCase() === 'delete') {
      try {
        await deleteUser(userId);
        onDelete();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    } else {
      alert('Please type "delete" to confirm.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>Are you sure you want to delete your account? This action cannot be undone.</p>
      <p>Please type <strong>"delete"</strong> to confirm.</p>
      <div>
        <input
          type="text"
          name="confirmation"
          value={confirmation}
          onChange={handleChange}
          placeholder="Type 'delete' to confirm"
          required
        />
      </div>
      <div>
        <button type="submit">Delete Account</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default DeleteUser;
