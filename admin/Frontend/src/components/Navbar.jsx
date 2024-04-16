import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-white text-2xl font-bold">Your Logo</Link>
        <div className="flex items-center">
          <Link to="/dashboard" className="text-white mr-4 hover:text-gray-300">Dashboard</Link>
          <Link to="/profile" className="text-white mr-4 hover:text-gray-300">Profile</Link>
          <Link to="/settings" className="text-white mr-4 hover:text-gray-300">Settings</Link>
          <button className="text-white focus:outline-none">
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
