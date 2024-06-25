import React from 'react';

const Resources = () => {
  return (
    <section className="bg-white py-20" id="resources">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-blue-500">Resources</h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
          Explore our resources to stay informed about the latest in EMR security.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <a href="#" className="resource-item p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Whitepapers</h3>
                <p>In-depth reports and analyses on EMR security.</p>
            </a>
            <a href="#" className="resource-item p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Articles</h3>
                <p>Read the latest articles on best practices and trends.</p>
            </a>
            <a href="#" className="resource-item p-6 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Tools</h3>
                <p>Discover tools to help you secure your EMR systems.</p>
            </a>
        </div>
      </div>
    </section>
  );
}

export default Resources;
