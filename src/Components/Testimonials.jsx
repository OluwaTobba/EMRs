import React from 'react';

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-20" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-blue-500">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <div className="testimonial-item p-6 bg-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <p className="text-lg leading-relaxed text-gray-700">
                "The security measures implemented by this service have significantly improved our data protection."
                </p>
                <p className="mt-4 font-bold">- John Doe, Healthcare Professional</p>
            </div>
            <div className="testimonial-item p-6 bg-white rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                <p className="text-lg leading-relaxed text-gray-700">
                "We are very satisfied with the comprehensive security solutions provided."
                </p>
                <p className="mt-4 font-bold">- Jane Smith, Hospital Administrator</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
