import React from 'react';
import { Link } from 'react-router-dom';
import { FaComments } from 'react-icons/fa';
import DataBreachesImage from '../../assets/data-breach.jpg';
import InsiderThreatsImage from '../../assets/insider-threat.jpg';
import RansomwareImage from '../../assets/ransomware.jpg';
import WeakPasswordsImage from '../../assets/weak-password.png';
import PhysicalTheftImage from '../../assets/physical_theft.png';
import PhishingAttacksImage from '../../assets/phishing.jpg';

function Dashboard() {

  return (

    <div className="min-h-screen flex flex-col bg-gray-100">

      <div className="flex-grow flex items-center justify-center">

        <div className="max-w-5xl w-full bg-white p-8 rounded-lg shadow-md text-center">

          <h2 className="text-4xl font-bold mb-3 text-blue-700 underline">Welcome to EMRs Training</h2>

          <p className="text-lg mb-5 underline text-red-400">DON'T CLICK - 'Never trust, Always Verify'</p>

          <p className="text-lg text-gray-700 mb-6">Here you can find various training materials and resources to help you secure your electronic medical records effectively.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="relative group">

              <img src={DataBreachesImage} alt="Data Breaches" className="w-full h-64 object-cover rounded-lg" />
              
              <div className="absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <h3 className="text-2xl text-white font-bold mb-4">DATA BREACHES</h3>

                <Link to="/training/data-breaches" className="bg-black text-white py-2 px-4 rounded-lg">
                  Go to Course
                </Link>

              </div>

            </div>

            <div className="relative group">

              <img src={InsiderThreatsImage} alt="Insider Threats" className="w-full h-64 object-cover rounded-lg" />
              
              <div className="absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <h3 className="text-2xl text-white font-bold mb-4">INSIDER THREATS</h3>

                <Link to="/training/insider-threats" className="bg-black text-white py-2 px-4 rounded-lg" target='_blank'>
                  Go to Course
                </Link>

              </div>

            </div>

            <div className="relative group">

              <img src={RansomwareImage} alt="Ransomware" className="w-full h-64 object-cover rounded-lg" />
              
              <div className="absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <h3 className="text-2xl text-white font-bold mb-4">RANSOMWARE</h3>

                <Link to="/training/ransomware" className="bg-black text-white py-2 px-4 rounded-lg" target='_blank'>
                  Go to Course
                </Link>

              </div>

            </div>

            <div className="relative group">

              <img src={WeakPasswordsImage} alt="Weak Passwords" className="w-full h-64 object-cover rounded-lg" />
              
              <div className="absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <h3 className="text-2xl text-white font-bold mb-4">WEAK PASSWORDS</h3>

                <Link to="/training/weak-passwords" className="bg-black text-white py-2 px-4 rounded-lg" target='_blank'>
                  Go to Course
                </Link>

              </div>

            </div>

            <div className="relative group">

              <img src={PhysicalTheftImage} alt="Physical Theft" className="w-full h-64 object-cover rounded-lg" />
              
              <div className="absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <h3 className="text-2xl text-white font-bold mb-4">PHYSICAL THEFT</h3>

                <Link to="/training/physical-theft" className="bg-black text-white py-2 px-4 rounded-lg" target='_blank'>
                  Go to Course
                </Link>

              </div>

            </div>

            <div className="relative group">

              <img src={PhishingAttacksImage} alt="Phishing Attacks" className="w-full h-64 object-cover rounded-lg" />
              
              <div className="absolute inset-0 bg-blue-600 bg-opacity-75 flex flex-col items-center justify-center rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                <h3 className="text-2xl text-white font-bold mb-4">PHISHING ATTACKS</h3>

                <Link to="/training/phishing-attacks" className="bg-black text-white py-2 px-4 rounded-lg" target='_blank'>
                  Go to Course
                </Link>

              </div>

            </div>

            <Link to="/training/feedback" className="mt-6 block bg-blue-800 text-white py-4 rounded-lg shadow-md hover:bg-white hover:text-blue-800 transition duration-300 flex items-center justify-center space-x-3 col-span-full">
              <FaComments className="text-2xl" />
              <span>Provide Feedback</span>
            </Link>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;