import React, {useState} from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
// import './NavBar.css';

function NavBar() {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <nav className="bg-blue-800 text-white p-4 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">EMRs</div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#home" className="hover:text-yellow-300 transition duration-300">HOME</a>
                        <a href="#about" className="hover:text-yellow-300 transition duration-300">ABOUT</a>
                        <a href="#best-practices" className="hover:text-yellow-300 transition duration-300">BEST PRACTICES</a>
                        <a href="#resources" className="hover:text-yellow-300 transition duration-300">RESOURCES</a>
                        <a href="#contact" className="hover:text-yellow-300 transition duration-300">CONTACT US</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setNavOpen(!navOpen)}>
                            {navOpen ? <HiX className="h-6 w-6 transition duration-300" /> : <HiMenuAlt3 className="h-6 w-6 transition duration-300" />}
                        </button>
                    </div>
                </div>
                <div className={`md:hidden flex flex-col space-y-5 transition-all duration-300 ${navOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <a href="#home" className="hover:text-yellow-300 mt-6 transition duration-300">Home</a>
                    <a href="#about" className="hover:text-yellow-300 transition duration-400">About</a>
                    <a href="#best-practices" className="hover:text-yellow-300 transition duration-500">Best Practices</a>
                    <a href="#resources" className="hover:text-yellow-300 transition duration-600">Resources</a>
                    <a href="#contact" className="hover:text-yellow-300 transition duration-700">Contact Us</a>
                </div>
            </nav>
        </>
    );
}

export default NavBar;