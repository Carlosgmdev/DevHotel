import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="bg-purple-600 h-screen w-72 py-8 px-6">
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-white text-2xl font-semibold">DevHotel</h1>
      </div>
      <nav>
        <ul>
          <li className="mb-4">
            <Link
              to="/dashboard/bedrooms"
              className={`${
                location.pathname === '/dashboard/bedrooms'
                  ? 'bg-white text-purple-600'
                  : 'text-white'
              } hover:text-purple-300 transition duration-300 block rounded-lg py-2 px-4`}
            >
              Bedrooms
            </Link>
          </li>
          <li>
            <Link
              to="/dashboard/reservations"
              className={`${
                location.pathname === '/dashboard/reservations'
                  ? 'bg-white text-purple-600'
                  : 'text-white'
              } hover:text-purple-300 transition duration-300 block rounded-lg py-2 px-4`}
            >
              My Reservations
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

