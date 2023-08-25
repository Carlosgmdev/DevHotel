import React from 'react';
import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
    return (
      <div className="flex h-screen bg-white">
        <Sidebar />
        <main className="flex-1 p-8 bg-gray-100">{children}</main>
      </div>
    );
  };
  
  export default Layout;