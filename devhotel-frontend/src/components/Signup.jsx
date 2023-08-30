// Signup.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault()
    fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    .then(response => {
      if (response.ok) {
        Swal.fire({
          title: "Success",
          text: "Registration successful, please login.",
          icon: 'success'
        }).then(() => {
          navigate('/');
        });
      } else {
        throw new Error("Registration failed");
      }
    })
    .catch(error => {
      Swal.fire({
        title: "Error",
        text: "An error occurred during registration.",
        icon: 'error'
      });
    });
  };
  

  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="bg-white p-8 shadow-md rounded-md">
      <h1 className='text-center text-3xl mb-5 font-medium'>DevHotel</h1>
        <h2 className="text-2xl font-semibold mb-4">Signup</h2>
        <form>
          <div className="mb-4">
            <input
              className="w-full px-3 py-2 border rounded-md"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
            onClick={e => handleSignup(e)}
          >
            Signup
          </button>
          <p className="mt-4 text-center">
            Already have an account?{' '}
            <Link to="/" className="text-purple-600 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
