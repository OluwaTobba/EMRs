import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthContext';

function AdminProtectedRoute({ element }) {

    const { user } = useContext(AuthContext);

    if (user && user.email === 'admin@emrs.com') {
        return element;
    }

    return <Navigate to="/admin-login" />;
}

export default AdminProtectedRoute;