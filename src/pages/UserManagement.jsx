import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import UserCard from '../components/UserCard';
import UserFormModal from '../components/UserFormModal';
import Pagination from '../components/Pagination';
import api from '../services/api';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const USERS_PER_PAGE = 6;

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.get('/users');
      setUsers(response.data.slice(0, 30)); // Limiting to 30 users for simplicity.
    } catch (error) {
      alert('Failed to fetch users. Please try again later.');
    }
  };

  const handleAddOrEditUser = (userData) => {
    if (editingUser) {
      // Edit existing user
      const updatedUsers = users.map((user) =>
        user.id === editingUser.id ? { ...user, ...userData } : user
      );
      setUsers(updatedUsers);
      alert('User updated successfully!');
    } else {
      // Add new user
      const newUser = { ...userData, id: users.length + 1 }; // Mocking ID
      setUsers([newUser, ...users]);
      alert('User added successfully!');
    }
    setIsModalOpen(false);
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    alert('User deleted successfully!');
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingUser(null);
    setIsModalOpen(true);
  };

  const handlePageChange = (page) => {
    if (page > 0 && page <= Math.ceil(users.length / USERS_PER_PAGE)) {
      setCurrentPage(page);
    }
  };

  const paginatedUsers = users.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  return (
    <div>
      <Header />
      <main className="p-4">
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded-md mb-4"
        >
          Add New User
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {paginatedUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              onEdit={handleEdit}
              onDelete={handleDeleteUser}
            />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil(users.length / USERS_PER_PAGE)}
          onPageChange={handlePageChange}
        />
      </main>
      <UserFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={editingUser}
        onSubmit={handleAddOrEditUser}
      />
    </div>
  );
}

export default UserManagement;
