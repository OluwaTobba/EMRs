import React from 'react';
import { Link } from 'react-router-dom';

function Register() {

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-100">

            <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">Register</h2>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700">Name</label>
                        <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">Password</label>
                        <input type="password" className="w-full p-3 border border-gray-300 rounded-lg" required />
                    </div>

                    <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300">Register</button>
                </form>

                <p className="mt-4 text-center">
                Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login</Link>
                </p>

            </div>

        </div>

    );

}

export default Register;