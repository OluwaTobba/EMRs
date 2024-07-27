import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3, HiX } from "react-icons/hi";
import './NavBar.css';

function NavBar() {

    const [navOpen, setNavOpen] = useState(false);

    return (

        <>

            <nav className="bg-blue-800 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">

                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="logo text-2xl font-bold">
                        <Link to="/">EMRs</Link>
                    </div>

                    <div className="hidden md:flex space-x-6 justify-center flex-grow">
                        <a href="#about" className="hover:text-yellow-300 transition duration-300">ABOUT</a>
                        <a href="#features" className="hover:text-yellow-300 transition duration-300">FEATURES</a>
                        <a href="#best-practices" className="hover:text-yellow-300 transition duration-300">BEST PRACTICES</a>
                        <a href="#contact" className="hover:text-yellow-300 transition duration-300">CONTACT US</a>
                    </div>
                    <div className="hidden md:flex font-bold">
                        <Link to="/training" className="bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">TRAINING</Link>
                    </div>
                    
                    <div className="md:hidden">
                        <button onClick={() => setNavOpen(!navOpen)}>
                            {navOpen ? <HiX className="h-6 w-6 transition duration-300" /> : <HiMenuAlt3 className="h-6 w-6 transition duration-300" />}
                        </button>
                    </div>
                </div>

                <div className={`md:hidden flex flex-col space-y-5 transition-all duration-300 ${navOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <a href="#about" className="mt-6 hover:text-yellow-300 transition duration-300">ABOUT</a>
                    <a href="#features" className="hover:text-yellow-300 transition duration-300">FEATURES</a>
                    <a href="#best-practices" className="hover:text-yellow-300 transition duration-300">BEST PRACTICES</a>
                    <a href="#contact" className="hover:text-yellow-300 transition duration-300">CONTACT US</a>
                    <Link to="/training" className="bg-blue-400 text-white w-full py-2 px-6 rounded-full hover:bg-blue-600 transition duration-700 ease-in-out transform hover:scale-105">TRAINING</Link>
                </div>

            </nav>

        </>

    );

}

export default NavBar;