import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';

function RegisterProtectedRoute({ element }) {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/quiz" replace />;
    }

    return element;
}

export default RegisterProtectedRoute;