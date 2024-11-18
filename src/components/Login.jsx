import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PasswordToggle from './PasswordToggle';

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password) {
            onLogin();
            navigate('/');
        } else {
            alert("Email dan kata sandi tidak boleh kosong!");
        }
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="bg-custom-cream min-h-screen flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-4">
                <h2 className="text-2xl font-semibold text-center mb-2">Masuk ke Akun</h2>
                <p className="text-center text-sm text-gray-600 mb-6">Yuk lajutin belajarmu di videobelajar.</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2"
                        />
                    </div>

                    {/* Password Input */}
                    <PasswordToggle
                        showPassword={showPassword}
                        togglePassword={togglePassword}
                        password={password}
                        setPassword={setPassword}
                    />

                    {/* Lupa Password */}
                    <div className="text-right">
                        <Link to="#" className="text-sm text-gray-700 hover:underline">Lupa Password?</Link>
                    </div>

                    {/* Button Masuk */}
                    <button
                        type="submit"
                        className="w-full bg-custom-green text-white font-semibold rounded-md py-2 hover:bg-green-600"
                    >
                        Masuk
                    </button>

                    {/* Garis Atau */}
                    <div className="flex items-center justify-center space-x-2 my-4">
                        <span className="border-t w-full"></span>
                        <span className="text-gray-500 text-sm">Atau</span>
                        <span className="border-t w-full"></span>
                    </div>

                    {/* Button Google */}
                    <button
                        type="button"
                        className="w-full bg-gray-200 rounded-md py-2 hover:bg-gray-300 flex justify-center items-center space-x-2"
                    >
                        <i className="fab fa-google text-lg"></i>
                        <span>Daftar dengan Google</span>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
