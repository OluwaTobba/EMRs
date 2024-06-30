import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';

function AdminProtectedRoute({ element }) {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/admin-login" replace />;
    }

    return element;
}

export default AdminProtectedRoute;