import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gray-900 p-4">
      <div className="flex items-center justify-between">
        <button
          className="text-white text-xl focus:outline-none"
          onClick={toggleSidebar}
        >
          ☰
        </button>
        <h1 className="text-white text-lg font-semibold">TEs</h1>
      </div>

      {isSidebarOpen && (
        <div className="fixed h-full bg-gray-800 text-white w-64 transition-transform transform " style={{margin:"16px -16px"}}>
          <div className="p-4">
            <ul>
              <li className="mb-4 p-4 bg-slate-600">
                <Link
                  to="/"
                  className="block text-gray-400 hover:text-white transition"
                >
                  Summary Dashboard
                </Link>
              </li>
              <li className="mb-4 p-4 bg-slate-600">
                <Link
                  to="/attendence"
                  className="block text-gray-400 hover:text-white transition"
                >
                  Attendence Tracking
                </Link>
              </li>
              <li className="mb-4 p-4 bg-slate-600">
                <Link
                  to="/behaviour"
                  className="block text-gray-400 hover:text-white transition"
                >
                  Behaviors analysis
                </Link>
              </li>
              <li className="mb-4 p-4 bg-slate-600">
                <Link
                  to="/academic"
                  className="block text-gray-400 hover:text-white transition"
                >
                  Academic Performance
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
