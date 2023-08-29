import React from 'react';
import Sidebar from './Sidebar';

const Dashboard = ({ children }) => {
    return (
      <div className="flex h-screen bg-white ">
        <Sidebar />
        <main className="flex-1 p-4 bg-gray-100 overflow-y-scroll">{children}</main>
      </div>
    );
  };
  
  export default Dashboard;