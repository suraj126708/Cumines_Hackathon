import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-blue-600 p-4">
            <div className="container mx-auto flex flex-wrap items-center justify-between">
                <div className="text-white text-lg font-bold">College Recommender</div>
                <div className="block lg:hidden">
                    <button className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <ul className="hidden lg:flex lg:items-center lg:space-x-4 w-full lg:w-auto">
                    <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
                    <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
                    <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
