import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button'; 

const Register = () => {
    const togglePassword = (id) => {
        const input = document.getElementById(id);
        const icon = document.getElementById(id + '-toggle');
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        } else {
            input.type = 'password';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        }
    };

    return (
        <div className="bg-custom-cream min-h-screen">
            <main className="flex justify-center items-center min-h-screen pt-20 sm:pt-0">
                <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mx-4 mb-8">
                    <h2 className="text-2xl font-semibold text-center mb-2">Pendaftaran Akun</h2>
                    <p className="text-center text-sm text-gray-600 mb-4">Yuk daftarkan akunmu sekarang juga.</p>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">Nama Lengkap <span className="text-red-500">*</span></label>
                            <input type="text" id="fullname" name="fullname" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                            <input type="email" id="email" name="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2" />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="country-code" className="block text-sm font-medium text-gray-700">No HP <span className="text-red-500">*</span></label>
                            <div className="flex flex-col sm:flex-row items-center">
                                <select id="country-code" name="country-code" className="border border-gray-300 rounded-md shadow-sm p-2 w-full sm:w-1/3 mb-2 sm:mb-0 sm:mr-2">
                                    <option value="+62">🇮🇩 +62</option>
                                </select>
                                <input type="tel" id="phone" name="phone" required placeholder="Nomor Telepon" className="mt-1 block border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 w-full sm:w-2/3" />
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Kata Sandi <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <input type="password" id="password" name="password" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 pr-8" />
                                < button type="button" id="password-toggle" onClick={() => togglePassword('password')} className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <i id="password-toggle" className="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Konfirmasi Kata Sandi <span className="text-red-500">*</span></label>
                            <div className="relative">
                                <input type="password" id="confirm-password" name="confirm-password" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 pr-8" />
                                <button type="button" id="confirm-password-toggle" onClick={() => togglePassword('confirm-password')} className="absolute inset-y-0 right-0 flex items-center pr-3">
                                    <i id="confirm-password-toggle" className="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>

                        <div className="mb-4 text-right">
                            <Link to="#" className="text-sm text-gray-700 hover:underline">Lupa Password?</Link>
                        </div>
                        <Button type="submit" className="bg-custom-green text-white font-semibold rounded-md py-2 hover:bg-green-600 mb-4">
                            Daftar
                        </Button>
                        <div className="mt-2 flex justify-center">
                            <Button type="button" className="bg-background: bg-green-200 text-custom-green rounded-md py-2 px-4 hover:bg-green-400">
                                Masuk
                            </Button>
                        </div>
                        <div className="mt-2">
                            <div className="flex items-center">
                                <div className="flex-1 border-t border-gray-300"></div>
                                <span className="mx-4 text-sm text-gray-600">Atau</span>
                                <div className="flex-1 border-t border-gray-300"></div>
                            </div>
                        </div>
                        <div className="mt-2 flex justify-center">
                            <Button type="button" className="bg-gray-200 rounded-md py-2 px-4 hover:bg-gray-300">
                                <i className="fab fa-google mr-2"></i> Daftar dengan Google
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default Register;