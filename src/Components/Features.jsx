import React from 'react';

function Features() {

  return (

    <section className="bg-white py-20" id="features">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-blue-500">Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Data Breaches</h3>
              <p>Protect your medical records from unauthorized access with cutting-edge encryption technologies that safeguard sensitive information.</p>
          </div>

          <div className="feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Insider Threats</h3>
              <p>Implement robust access controls to ensure that only authorized personnel can access and manage sensitive medical data.</p>
          </div>

          <div className="feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Ransomware</h3>
              <p>Adopt comprehensive backup and recovery solutions to mitigate the risk of ransomware attacks and ensure business continuity.</p>
          </div>

          <div className="feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Weak Passwords</h3>
              <p>Enhance security by enforcing strong password policies and multi-factor authentication to protect user accounts.</p>
          </div>

          <div className="feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Physical Theft</h3>
              <p>Implement physical security measures and device encryption to prevent unauthorized access to medical data from stolen devices.</p>
          </div>

          <div className="feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">Phishing Attacks</h3>
              <p>Educate users about phishing threats and deploy email filtering solutions to prevent malicious emails from reaching your inbox.</p>
          </div>

        </div>


      </div>

    </section>

  );

}

export default Features;