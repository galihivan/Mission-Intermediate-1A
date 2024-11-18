import React from 'react';

const PasswordToggle = ({ showPassword, togglePassword, password, setPassword }) => {
    return (
        <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Kata Sandi <span className="text-red-500">*</span>
            </label>
            <div className="relative">
                <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 pr-10"
                />
                <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-500 hover:text-gray-700"
                >
                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                </button>
            </div>
        </div>
    );
};

export default PasswordToggle;
