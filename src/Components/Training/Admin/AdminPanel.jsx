import React from 'react';

function AdminPanel() {

    return (

        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            
            <div className="bg-white p-8 rounded shadow-md w-full max-w-7xl">
                <h2 className="text-2xl font-bold mb-8 text-center text-blue-600">Admin Panel</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="bg-blue-200 p-6 rounded-lg shadow-md hover:bg-blue-300 transition duration-300">
                        <h3 className="text-xl font-bold mb-4 text-center">Manage Users</h3>
                        <p className="text-gray-700 text-center">Add, remove, or update user information.</p>
                        <button className="mt-4 w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300">
                            Go to User Management
                        </button>
                    </div>
                    <div className="bg-blue-200 p-6 rounded-lg shadow-md hover:bg-blue-300 transition duration-300">
                        <h3 className="text-xl font-bold mb-4 text-center">View Logs</h3>
                        <p className="text-gray-700 text-center">Access system logs and monitor activities.</p>
                        <button className="mt-4 w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300">
                            View Logs
                        </button>
                    </div>
                    <div className="bg-blue-200 p-6 rounded-lg shadow-md hover:bg-blue-300 transition duration-300">
                        <h3 className="text-xl font-bold mb-4 text-center">Upload Content</h3>
                        <p className="text-gray-700 text-center">Upload training materials and resources.</p>
                        <button className="mt-4 w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300">
                            Upload Content
                        </button>
                    </div>
                    <div className="bg-blue-200 p-6 rounded-lg shadow-md hover:bg-blue-300 transition duration-300">
                        <h3 className="text-xl font-bold mb-4 text-center">Settings</h3>
                        <p className="text-gray-700 text-center">Configure system settings and preferences.</p>
                        <button className="mt-4 w-full py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 transition duration-300">
                            Go to Settings
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );

}

export default AdminPanel