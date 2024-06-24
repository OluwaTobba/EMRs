import React, {useState} from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import './NavBar.css';

function NavBar() {

    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <nav className="bg-blue-500 text-white p-4 shadow-md">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-2xl font-bold">EMRs</div>
                    <div className="hidden md:flex space-x-6">
                        <a href="#home" className="hover:text-yellow-300">Home</a>
                        <a href="#about" className="hover:text-yellow-300">About</a>
                        <a href="#best-practices" className="hover:text-yellow-300">Best Practices</a>
                        <a href="#resources" className="hover:text-yellow-300">Resources</a>
                        <a href="#contact" className="hover:text-yellow-300">Contact Us</a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setNavOpen(!navOpen)}>
                            {navOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
                {navOpen && (
                    <div className="md:hidden flex flex-col space-y-4 mt-4">
                        <a href="#home" className="hover:text-yellow-300">Home</a>
                        <a href="#about" className="hover:text-yellow-300">About</a>
                        <a href="#best-practices" className="hover:text-yellow-300">Best Practices</a>
                        <a href="#resources" className="hover:text-yellow-300">Resources</a>
                        <a href="#contact" className="hover:text-yellow-300">Contact Us</a>
                    </div>
                )}
            </nav>
        </>
    );
}

export default NavBar