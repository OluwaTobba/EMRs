import React from 'react';

const Features = () => {
  return (
    <section className="bg-white py-20" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-blue-500">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">Data Encryption</h3>
                <p>Secure your medical records with advanced encryption technologies.</p>
            </div>
            <div className="feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">Access Control</h3>
                <p>Ensure only authorized personnel can access sensitive data.</p>
            </div>
            <div className="feature-item p-6 bg-gray-100 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <h3 className="text-2xl font-bold mb-4">Compliance</h3>
                <p>Stay compliant with industry regulations and standards.</p>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
