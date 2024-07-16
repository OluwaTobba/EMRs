import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import './NavBar.css';

function NavBar() {

    const [navOpen, setNavOpen] = useState(false);

    return (

        <>
            <nav className="bg-blue-800 text-white p-4 shadow-md">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="logo text-2xl font-bold">
                        <Link to="/">EMRs</Link>
                    </div>
                    <div className="hidden md:flex space-x-6 justify-center flex-grow">
                        <Link to="/#home" className="hover:text-yellow-300 transition duration-300">HOME</Link>
                        <Link to="/#about" className="hover:text-yellow-300 transition duration-300">ABOUT</Link>
                        <Link to="/#best-practices" className="hover:text-yellow-300 transition duration-300">BEST PRACTICES</Link>
                        <Link to="/#contact" className="hover:text-yellow-300 transition duration-300">CONTACT US</Link>
                    </div>
                    <div className="hidden md:flex font-bold">
                        <Link to="/training" className="bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105" target='_blank'>TRAINING</Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setNavOpen(!navOpen)}>
                            {navOpen ? <HiX className="h-6 w-6 transition duration-300" /> : <HiMenuAlt3 className="h-6 w-6 transition duration-300" />}
                        </button>
                    </div>
                </div>
                <div className={`md:hidden flex flex-col space-y-5 transition-all duration-300 ${navOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <Link to="/#home" className="hover:text-yellow-300 mt-6 transition duration-300">HOME</Link>
                    <Link to="/#about" className="hover:text-yellow-300 transition duration-400">ABOUT</Link>
                    <Link to="/#best-practices" className="hover:text-yellow-300 transition duration-500">BEST PRACTICES</Link>
                    <Link to="/#contact" className="hover:text-yellow-300 transition duration-600">CONTACT US</Link>
                    <Link to="/training" className="bg-blue-400 text-white w-full py-2 px-6 rounded-full hover:bg-blue-600 transition duration-700 ease-in-out transform hover:scale-105" target='_blank'>TRAINING</Link>
                </div>
            </nav>
        </>
    );
}

export default NavBar;