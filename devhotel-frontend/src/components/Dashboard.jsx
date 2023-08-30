import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';

const Dashboard = ({ isAuthenticated, user, setIsAuthenticated, setUser }) => {
  const navigate = useNavigate();
  const {id, name, email} = user;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated]);

  const handleLogout = (e) => {
    setUser({})
    setIsAuthenticated(false)
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
  }

  return (
    <div className="flex h-screen bg-white ">
      <Sidebar />
      <main className="flex-1 p-4 bg-gray-100 overflow-y-scroll">
        <div className='bg-white w-auto rounded-xl h-14 p-3 flex justify-between items-center shadow-md mb-2'>
          <h1 className='italic text-purple-800'>{`¡Welcome ${name}!`}</h1>
          <button className='bg-red-600 text-white py-1 px-2 rounded-md'
            onClick={e => handleLogout(e)}
          >
            Logout
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;

