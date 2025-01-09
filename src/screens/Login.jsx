import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user.context';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const { setUser } = useContext(UserContext);

  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();

    if (email === 'Ayushsharma@gmail.com' && password === 'helloworld') {
      // Simulate user data for setting context
      const user = { name: 'Ayush Sharma', email };

      localStorage.setItem('token', 'dummyToken123'); // Store a dummy token
      setUser(user);

      alert('Logged in successfully!'); // Show alert on successful login
      navigate('/'); // Navigate to the home page
    } else {
      setErrorMessage('Invalid email or password.'); // Set error message
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-white mb-6">Login</h2>
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p> // Display error message if any
        )}
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <p className="text-gray-400 mt-4">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-500 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
