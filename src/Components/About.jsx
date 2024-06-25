import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-blue-500">About Us</h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
          Electronic Medical Records (EMR) systems are digital versions of patients' paper charts and have become a cornerstone in modern healthcare for managing patient information. While they offer significant advantages in terms of accessibility, efficiency, and quality of care, they also present considerable security challenges. Ensuring the security of EMR systems is critical to protecting patient privacy, maintaining trust, and complying with legal and regulatory requirements.
        </p>
      </div>
    </section>
  );
}

export default About;
