// src/pages/BPage.jsx
import React from 'react';
import ProtectedRoute from '../app/ProtectedRoute';
import { ROLES } from '../features/roles/roleConstants';
import LogoutButton from '../features/ui/LogoutButton';

const BPage = () => (
    <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
        <h1>Admin Page B</h1>
        <LogoutButton/>
    </ProtectedRoute>
);

export default BPage;
