import React, { useState } from 'react';
import { useLogin } from '../auth/hooks/useLogin';

export const LoginForm = () => {
    const [credentials, setCredentials] = useState ([{username : '', password : ''}])
    const {login, error} = useLogin();

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials((prev) => ({...prev, [name]: value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(credentials)
    }

    return(
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
        />
        <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
        />
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
    </form>
    )
}