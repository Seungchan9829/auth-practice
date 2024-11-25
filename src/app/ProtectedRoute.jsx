import React from 'react';
import {Navigate} from 'react-router-dom';
import useAuthStore from './store';
import { useAuth } from './AuthProvider';

const ProtectedRoute = ({ children, allowedRoles }) => {
    const { isAuthenticated, userRole, loading } = useAuth();

    if (loading) {
        return <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            <div className="spinner" />
        </div>
    }

    console.log("ProtectedRoute: ", isAuthenticated, userRole)

    if (!isAuthenticated) {
        return <Navigate to="/login" replace state={{ from: window.location.pathname }} />;
    }

    if (!allowedRoles.includes(userRole)) {
        return <Navigate to="/not-authorized" replace />;
    }

    return children;
}   

export default ProtectedRoute