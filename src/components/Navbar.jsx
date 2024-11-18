import React from 'react';
import { useLocation } from 'react-router-dom'; // Impor useLocation untuk mengetahui rute saat ini
import logo from '../assets/Logo.png'; // Pastikan jalur ini benar
import profilePic from '../assets/b7fca2f32639871454da0de95f951709.png'; // Pastikan jalur ini benar

const Navbar = ({ isAuthenticated, onLogout }) => {
    const location = useLocation(); // Menggunakan hook untuk mendapatkan lokasi saat ini

    // Cek apakah halaman yang sedang dibuka adalah login atau register
    const isLoginPage = location.pathname === '/login' || location.pathname === '/register';

    return (
        <header className="w-full border-b border-gray-300 bg-white shadow-md">
            <div className="flex justify-between items-center h-[80px] px-4 sm:px-[120px]">
                {/* Logo */}
                <img src={logo} alt="Logo" className="w-[120px] sm:w-[237px] h-auto" />
                <div className="flex items-center space-x-4">
                    {/* Menyembunyikan kategori jika di halaman login atau register */}
                    {!isLoginPage && <span className="text-gray-500 font-medium hidden sm:inline">Kategori</span>}
                    {isAuthenticated ? (
                        <>
                            <img 
                                src={profilePic} 
                                alt="Profile" 
                                className="w-8 h-8 rounded-full bg-yellow-400 object-cover hidden sm:inline" 
                            />
                            <button onClick={onLogout} className="text-gray-600">Logout</button>
                        </>
                    ) : (
                        <>
                            <a href="/login" className="text-gray-600">Login</a>
                            <a href="/register" className="text-gray-600">Register</a>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
