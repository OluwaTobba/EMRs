import React from 'react';

function LoginModal({ isOpen, onClose, message }) {
    if (!isOpen) return null;

    return (

        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60">
            <div className="bg-white p-6 rounded shadow-lg text-center">
                <h2 className="text-xl font-bold mb-4">EMRs Says:</h2>
                <p>{message}</p>
                <button
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-800 transition duration-400"
                onClick={onClose}
                >
                Try Again!
                </button>
            </div>
        </div>

    );
}

export default LoginModal;