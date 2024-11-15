import React from 'react';

function UserCard({ user, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-md p-4 flex justify-between items-center">
      <div>
        <h3 className="font-bold text-lg">{user.firstName} {user.lastName}</h3>
        <p>{user.email}</p>
        <p className="text-sm text-gray-500">Department: {user.department}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => onEdit(user)}
          className="bg-blue-500 text-white px-3 py-1 rounded-md"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default UserCard;
