import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

function RegisterProtectedRoute({ element }) {
    const { user, isVerified } = useContext(AuthContext);

    // if (!user) {
    //     return <Navigate to="/quiz" replace />;
    // }

    if (user && !isVerified) {
        return <Navigate to="/verify" replace />;
    }

    return element;
}

export default RegisterProtectedRoute;