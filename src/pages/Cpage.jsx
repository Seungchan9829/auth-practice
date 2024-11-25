// src/pages/CPage.jsx
import React from 'react';
import ProtectedRoute from '../app/ProtectedRoute';
import { ROLES } from '../features/roles/roleConstants';
import LogoutButton from '../features/ui/LogoutButton';
import GetUserButton from '../features/ui/GetUserButton';
const CPage = () => (
    <ProtectedRoute allowedRoles={[ROLES.ADMIN, ROLES.TEACHER]}>
        <h1>Page C (Admin and Teacher access)</h1>
        <GetUserButton/>
        <LogoutButton/>
    </ProtectedRoute>
);

export default CPage;