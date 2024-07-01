import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";

function LoginNavbar() {

    const [navOpen, setNavOpen] = useState(false);

    return (

        <>
            <nav className="bg-blue-800 text-white p-4 shadow-md">

                <div className="max-w-7xl mx-auto flex justify-between items-center">

                    <div className="logo text-2xl font-bold">
                        <Link to="/admin">EMRs (Admin)</Link>
                    </div>
                    {/* <div className="hidden md:flex space-x-6 justify-center flex-grow">
                        <Link to="/admin-data" className="hover:text-yellow-300 transition duration-300">Data Breaches</Link>
                        <Link to="/admin-threats" className="hover:text-yellow-300 transition duration-300">Insider Threats</Link>
                        <Link to="/admin-ransomware" className="hover:text-yellow-300 transition duration-300">Ransomware</Link>
                        <Link to="/admin-passwords" className="hover:text-yellow-300 transition duration-300">Weak Passwords</Link>
                        <Link to="/admin-theft" className="hover:text-yellow-300 transition duration-300">Physical Theft</Link>
                        <Link to="/admin-phishing" className="hover:text-yellow-300 transition duration-300">Phishing Attacks</Link>
                    </div> */}
                    <div className="hidden md:flex font-bold">
                        <Link to="/admin-logout" className="bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">LOGOUT</Link>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setNavOpen(!navOpen)}>
                            {navOpen ? <HiX className="h-6 w-6 transition duration-300" /> : <HiMenuAlt3 className="h-6 w-6 transition duration-300" />}
                        </button>
                    </div>

                </div>

                <div className={`md:hidden flex flex-col space-y-6 transition-all duration-300 ${navOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    {/* <Link to="/admin-data" className="hover:text-yellow-300 mt-6 transition duration-300">Data Breaches</Link>
                    <Link to="/admin-threats" className="hover:text-yellow-300 transition duration-300">Insider Threats</Link>
                    <Link to="/admin-ransomware" className="hover:text-yellow-300 transition duration-300">Ransomware</Link>
                    <Link to="/admin-passwords" className="hover:text-yellow-300 transition duration-300">Weak Passwords</Link>
                    <Link to="/admin-theft" className="hover:text-yellow-300 transition duration-300">Physical Theft</Link>
                    <Link to="/admin-phishing" className="hover:text-yellow-300 transition duration-300">Phishing Attacks</Link> */}
                    <Link to="/admin-logout" className="mt-7 bg-blue-400 text-white py-2 px-6 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">LOGOUT</Link>
                </div>

            </nav>

        </>

    );
    
}

export default LoginNavbar;