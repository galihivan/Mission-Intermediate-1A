// Banner.jsx
import React from 'react';
import backgroundImage from '../assets/Banner1.png'; // Perbaiki jalur di sini

const Banner = () => {
    return (
        <div
            className="relative flex flex-col md:flex-row justify-center items-center bg-cover bg-center mt-8 pt-4 text-white rounded-lg overflow-hidden h-auto" // Ubah h-64 menjadi h-auto
            style={{ backgroundImage: `url(${backgroundImage})` }} // Menggunakan gambar yang diimpor
        >
            <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div> {/* Mengurangi opasitas */}
            <div className="relative flex flex-col items-center justify-center p-4 md:p-8 text-center z-10">
                <h1 className="text-2xl md:text-3xl font-bold mb-4">
                    Revolusi Pembelajaran: Temukan Ilmu Baru melalui Platform Video Interaktif!
                </h1>
                <p className="text-sm md:text-lg mb-6">
                    Temukan ilmu baru yang menarik dan mendalam melalui koleksi video pembelajaran berkualitas tinggi. 
                    Tidak hanya itu, Anda juga dapat berpartisipasi dalam latihan interaktif yang akan meningkatkan pemahaman Anda.
                </p>
                <button className="bg-custom-green text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600 transition duration-300 mb-4"> {/* Tambahkan mb-4 di sini */}
                    Temukan Video Course untuk Dipelajari!
                </button>
            </div>
        </div>
    );
};

export default Banner;