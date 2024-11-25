import React from 'react';
import ProtectedRoute from '../app/ProtectedRoute';
import { ROLES } from '../features/roles/roleConstants';
import LogoutButton from '../features/ui/LogoutButton';
const APage = () => (
    <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
        <h1>Admin Page A</h1>
        <LogoutButton/>
    </ProtectedRoute>
);

export default APage;