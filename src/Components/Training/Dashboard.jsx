import React from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaChalkboardTeacher, FaUserShield, FaVideo } from 'react-icons/fa';

function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">

      <div className="flex-grow flex items-center justify-center">

        <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md text-center">
          <h2 className="text-3xl font-bold mb-6 text-blue-500">Welcome to EMRs Training</h2>
          <p className="text-lg text-gray-700 mb-6">Here you can find various training materials and resources to help you secure your electronic medical records effectively.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/data-breaches" className="block bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-3">
              <FaBook className="text-2xl" />
              <span>Data Breaches</span>
            </Link>
            <Link to="/threats" className="block bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-3">
              <FaChalkboardTeacher className="text-2xl" />
              <span>Insider Threats</span>
            </Link>
            <Link to="/ransomware" className="block bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-3">
              <FaUserShield className="text-2xl" />
              <span>Ransomware</span>
            </Link>
            <Link to="/weak-password" className="block bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-3">
              <FaVideo className="text-2xl" />
              <span>Weak Passwords</span>
            </Link>
            <Link to="/theft" className="block bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-3">
              <FaVideo className="text-2xl" />
              <span>Physical Theft</span>
            </Link>
            <Link to="/phishing" className="block bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 flex items-center justify-center space-x-3">
              <FaVideo className="text-2xl" />
              <span>Phishing Attacks</span>
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;