import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Modal from './RegModal';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate('/login');
        } catch (error) {
            let message;
            switch (error.code) {
                case 'auth/email-already-in-use':
                message = 'This email is already registered. Please use a different email or log in.';
                break;
                case 'auth/invalid-email':
                message = 'Invalid email format.';
                break;
                case 'auth/weak-password':
                message = 'Password should be at least 6 characters.';
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

            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">

                <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">Register</h2>

                <form onSubmit={handleRegister}>
                    
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                        type="email"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input
                        type="password"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-2 w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                    >
                        Register
                    </button>

                </form>

                <p className="mt-4 text-center">
                Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                </p>

            </div>

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} message={modalMessage} />

        </div>

    );
}

export default Register;