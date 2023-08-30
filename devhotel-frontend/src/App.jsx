import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Bedrooms from './components/Bedrooms';
import Reservations from './components/Reservations';

const App = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const storedIsAuthenticated = localStorage.getItem('isAuthenticated');
  const [user, setUser] = useState(storedUser || {});
  const [isAuthenticated, setIsAuthenticated] = useState(storedIsAuthenticated || false);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} setUser={setUser} />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/dashboard/*" element={<Dashboard isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} user={user} setUser={setUser} />}>
                    <Route path="bedrooms" element={<Bedrooms user={user} />} />
                    <Route path="reservations" element={<Reservations user={user} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;