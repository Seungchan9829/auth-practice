// src/app/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import APage from '../pages/Apage';
import BPage from '../pages/Bpage';
import CPage from '../pages/Cpage';
import LoginPage from '../pages/LoginPage';
import { AuthProvider } from './AuthProvider';
function App() {
    return (
        <AuthProvider>
        <Router>
            <Routes>
                <Route path='/' element = {<div>hello!</div>}/>
                <Route path="/a" element={<APage />} />
                <Route path="/b" element={<BPage />} />
                <Route path="/c" element={<CPage />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/not-authorized" element={<h1>Not Authorized</h1>} />
            </Routes>
        </Router>
        </AuthProvider>
    );
}

export default App;
