// Newsletter.jsx
import React from 'react';
import backgroundImage from '../assets/Newletter.jpg'; // Pastikan jalur ini benar

const Newsletter = () => {
    return (
        <div
            className="relative bg-cover bg-center rounded-lg text-white p-8 text-center w-full h-64" // Menambahkan tinggi di sini
            style={{ backgroundImage: `url(${backgroundImage})` }} // Menggunakan gambar yang diimpor
        >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div> {/* Overlay hitam */}
            <h3 className="text-lg font-semibold mb-2 relative z-10">NEWSLETTER</h3>
            <h2 className="text-2xl font-bold mb-2 relative z-10">Mau Belajar Lebih Banyak?</h2>
            <p className="text-sm mb-5 relative z-10">
                Daftarkan dirimu untuk mendapatkan informasi terbaru dan penawaran spesial dari program-program terbaik hariesto.id
            </p>
            <form className="flex justify-center gap-3 max-w-2xl mx-auto relative z-10">
                <input
                    type="email"
                    placeholder="Masukkan Emailmu"
                    className="w-2/3 max-w-xs p-3 rounded-lg border border-gray-300 focus:outline-none text-gray-800"
                />
                <button type="submit" className="bg-yellow-500 text-white font-semibold px-5 py-3 rounded-lg hover:bg-yellow-600">
                    Subscribe
                </button>
            </form>
        </div>
    );
};

export default Newsletter;