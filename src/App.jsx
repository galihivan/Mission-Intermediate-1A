import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar'; // Pastikan path sesuai
import Login from './components/Login'; // Import halaman Login
import Register from './components/Register'; // Import halaman Register
import Home from './components/Home'; // Import halaman Home

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="bg-custom-cream">
        {/* Menambahkan isLoginPage ke Navbar */}
        <Navbar
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
          isLoginPage={window.location.pathname === "/login" || window.location.pathname === "/register"}
        />
        <main className="container mx-auto max-w-screen-lg py-8 px-4">
          <Routes>
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={isAuthenticated ? <Navigate to="/" /> : <Register />} />
            <Route path="/" element={isAuthenticated ? <Home /> : <Navigate to="/login" />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
