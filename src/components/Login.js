import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform login logic
    await login(); // Assuming login is an asynchronous function

    // Redirect to the home page after successful login using Link component
    window.location.href = '/'; // Redirect to the home page
  };

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="max-w-md w-full">
        <h2 className="text-4xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-bold text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-lg font-bold text-gray-700">Password</label>
            <input type="password" id="password" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">Login</button>
            <Link to="/signup" className="text-primary hover:text-blue-800">Sign up</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
