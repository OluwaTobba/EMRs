import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { auth } from '../../firebase';
import { sendEmailVerification, reload } from 'firebase/auth';
import Modal from './RegModal';

function EmailVerification() {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    useEffect(() => {
        const checkVerification = async () => {
        if (user) {
            await reload(user);
            if (user.emailVerified) {
            navigate('/login');
            }
        }
        };
        checkVerification();
    }, [user, navigate]);

    const handleVerification = async () => {
        if (user) {
        await reload(user);
        if (user.emailVerified) {
            navigate('/quiz');
        } else {
            setModalMessage('Email not verified yet. Please check your email.');
            setModalOpen(true);
        }
        }
    };

    const handleResendVerificationEmail = async () => {
        try {
        await sendEmailVerification(auth.currentUser);
        setModalMessage('Verification email sent successfully!');
        setModalOpen(true);
        } catch (error) {
        console.error('Error sending verification email:', error);
        setModalMessage('Error sending verification email. Please try again later.');
        setModalOpen(true);
        }
    };

    return (

        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="bg-white p-7 rounded shadow-md w-full max-w-md">
                
                <h3 className="text-2xl font-bold mb-5 text-center text-blue-700">Email Verification</h3>

                <p className="mb-4 text-center">A verification link will be sent to your email. Please check your email and click on the link to verify your account.</p>
                
                <button
                onClick={handleResendVerificationEmail}
                className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800 transition duration-400"
                >
                Send Verification Email
                </button>
                
                <button
                onClick={handleVerification}
                className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-800 transition duration-400"
                >
                Confirm Verification
                </button>
                
                {/* {modalMessage && <p className="mt-4 text-red-500">{modalMessage}</p>} */}

            </div>
            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} message={modalMessage} />
        </div>

    );
}

export default EmailVerification;
