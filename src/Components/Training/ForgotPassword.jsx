import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import Modal from './RegModal';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setModalMessage('Password reset link sent! Check your email.');
      setModalOpen(true);
    } catch (error) {
      let message;
      switch (error.code) {
        case 'auth/user-not-found':
          message = 'No user found with this email.';
          break;
        case 'auth/invalid-email':
          message = 'Invalid email format.';
          break;
        default:
          message = 'An error occurred. Please try again.';
      }
      setModalMessage(message);
      setModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition duration-400"
          >
            Reset Password
          </button>
        </form>
        <p className="mt-4 text-center">
          Password Reset Done? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
        </p>
      </div>
      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} message={modalMessage} />
    </div>
  );
}

export default ForgotPassword;