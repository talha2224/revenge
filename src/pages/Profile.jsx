import React, { useState } from 'react';
import Navbar from '../Navbar';

const Profile = () => {
  const [formData, setFormData] = useState({
    username: 'Talha Dev',
    email: 'talha@example.com',
    password: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add logic to update user profile
    console.log('Updated Profile:', formData);
  };

  return (
    <div className="w-screen h-screen bg-[#051427] text-white p-5 flex flex-col">
      <Navbar />

      <div className="flex justify-center items-center flex-1">
        <form
          onSubmit={handleSubmit}
          className="bg-white text-[#051427] p-8 rounded-lg shadow-md w-96"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Edit Profile</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition duration-200"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
