import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Modal from '../LoginModal';

function AdminLogin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);

            if (email === 'admin@emrs.com') {
                navigate('/admin');
            } else {
                throw new Error('Unauthorized access');
            }
        } catch (error) {
            let message;
            switch (error.code) {
                case 'auth/user-not-found':
                message = 'No user found with this email.';
                break;
                case 'auth/wrong-password':
                message = 'Invalid password. Please try again.';
                break;
                case 'auth/invalid-email':
                message = 'Invalid email format.';
                break;
                case 'auth/invalid-credential':
                message = 'Invalid Login Credentials.';
                break;
                default:
                message = error.message || 'Invalid Login Credentials. Please try again.';
            }
            setModalMessage(message);
            setModalOpen(true);
        }

    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">

                <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Admin Login</h2>
                
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Username</label>
                        <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
                        />
                    </div>
                    <p className="mt-4 text-left">
                        <Link to="/login" className="text-blue-600 hover:underline">Training</Link>
                    </p>
                    <button
                        type="submit"
                        className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        Login
                    </button>
                </form>

            </div>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} message={modalMessage} />

        </div>

    );
}

export default AdminLogin;