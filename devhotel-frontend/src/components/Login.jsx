// Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Agregar lógica de inicio de sesión
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 shadow-md rounded-md">
        <h1 className='text-center text-3xl mb-5 font-medium'>DevHotel</h1>
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            onClick={handleLogin}
          >
            Login
          </button>
          <p className="mt-4 text-center">
            Don't have an account?{' '}
            <Link to="/signup" className="text-purple-600 hover:underline">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
