import React from 'react';
import VideoCard from './VideoCard';
import videoImage1 from '../assets/Gambar1.png'; // Ganti dengan jalur yang benar
import videoImage2 from '../assets/Gambar2.png';
import videoImage3 from '../assets/Gambar3.png';
import videoImage4 from '../assets/Gambar4.png';
import videoImage5 from '../assets/Banner1.png';
import videoImage6 from '../assets/Gambar6.png';
import videoImage7 from '../assets/Gambar7.png';
import videoImage8 from '../assets/Gambar8.png';
import videoImage9 from '../assets/Gambar9.png';
import avatarImage from '../assets/Avatar.png'; // Ganti dengan jalur yang benar

const videoData = [
    {
        image: videoImage1, // Menggunakan gambar yang diimpor
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
        instructor: {
            name: 'Jenna Ortega',
            role: 'Senior Accountant di Gojek',
            avatar: avatarImage, // Menggunakan avatar yang diimpor
        },
        rating: { stars: 3.5, count: 86 },
        price: 'Rp 300K',
    },
    {
        image: videoImage2, // Menggunakan gambar yang diimpor
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
        instructor: {
            name: 'Jenna Ortega',
            role: 'Senior Accountant di Gojek',
            avatar: avatarImage, // Menggunakan avatar yang diimpor
        },
        rating: { stars: 3.5, count: 86 },
        price: 'Rp 300K',
    },
    {
        image: videoImage3, // Menggunakan gambar yang diimpor
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
        instructor: {
            name: 'Jenna Ortega',
            role: 'Senior Accountant di Gojek',
            avatar: avatarImage, // Menggunakan avatar yang diimpor
        },
        rating: { stars: 3.5, count: 86 },
        price: 'Rp 300K',
    },
    {
        image: videoImage4, // Menggunakan gambar yang diimpor
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
        instructor: {
            name: 'Jenna Ortega',
            role: 'Senior Accountant di Gojek',
            avatar: avatarImage, // Menggunakan avatar yang diimpor
        },
        rating: { stars: 3.5, count: 86 },
        price: 'Rp 300K',
    },
    {
        image: videoImage5, // Menggunakan gambar yang diimpor
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
        instructor: {
            name: 'Jenna Ortega',
            role: 'Senior Accountant di Gojek',
            avatar: avatarImage, // Menggunakan avatar yang diimpor
        },
        rating: { stars: 3.5, count: 86 },
        price: 'Rp 300K',
    },
    {
        image: videoImage6, // Menggunakan gambar yang diimpor
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
        instructor: {
            name: 'Jenna Ortega',
            role: 'Senior Accountant di Gojek',
            avatar: avatarImage, // Menggunakan avatar yang diimpor
        },
        rating: { stars: 3.5, count: 86 },
        price: 'Rp 300K',
    },
    {
        image: videoImage7, // Menggunakan gambar yang diimpor
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
        instructor: {
            name: 'Jenna Ortega',
            role: 'Senior Accountant di Gojek',
            avatar: avatarImage, // Menggunakan avatar yang diimpor
        },
        rating: { stars: 3.5, count: 86 },
        price: 'Rp 300K',
    },
    {
        image: videoImage8, // Menggunakan gambar yang diimpor
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
        instructor: {
            name: 'Jenna Ortega',
            role: 'Senior Accountant di Gojek',
            avatar: avatarImage, // Menggunakan avatar yang diimpor
        },
        rating: { stars: 3.5, count: 86 },
        price: 'Rp 300K',
    },
    {
        image: videoImage9, // Menggunakan gambar yang diimpor
        title: 'Big 4 Auditor Financial Analyst',
        description: 'Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan...',
        instructor: {
            name: 'Jenna Ortega',
            role: 'Senior Accountant di Gojek',
            avatar: avatarImage, // Menggunakan avatar yang diimpor
        },
        rating: { stars: 3.5, count: 86 },
        price: 'Rp 300K',
    },
    // Tambahkan data video lainnya di sini...
];

const VideoCollection = () => {
    return (
        <section className="py-10">
            <h2 className="text-3xl font-bold text-gray-800">Koleksi Video Pembelajaran Unggulan</h2>
            <p className="text-gray-600 mt-2">Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!</p>
            <div className="flex justify-left space-x-6 text-gray-500 font-semibold text-sm">
                <a href="#" className="text-red-500 border-b-2 border-red-500 pb-2">Semua Kelas</a>
                <a href="#" className="hover:text-red-500">Pemasaran</a>
                <a href="#" className="hover:text-red-500">Desain</a>
                <a href="#" className="hover:text-red-500">Pengembangan Diri</a>
                <a href="#" className="hover:text-red-500">Bisnis</a>
            </div>
            <div className="container mx-auto px-4 py-8 grid gap-8 md:grid-cols-3">
                {videoData.map((video, index) => (
                    <VideoCard key={index} video={video} />
                ))}
            </div>
        </section>
    );
};

export default VideoCollection;