import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

function AdminLogout() {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        console.log("Logging out...");
        logout();
        navigate('/admin-login');
    };

    useEffect(() => {
        handleLogout();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md text-center">
                <h2 className="text-2xl font-bold mb-6 text-center text-blue-500">Log Out</h2>
                <p className="mb-6 text-lg text-gray-700">You are being logged out...</p>
            </div>
        </div>
    );
}

export default AdminLogout;