import React from 'react';
import AboutImg from '../assets/about.png';

function About() {
  return (

    <section className="bg-gray-100 py-20" id="about">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">

        <div className="lg:w-2/3 mb-8 lg:mb-0">

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-blue-500">About Us</h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 leading-relaxed">
            Electronic Medical Records (EMR) systems are digital versions of patients' paper charts and have become a cornerstone in modern healthcare for managing patient information. While they offer significant advantages in terms of accessibility, efficiency, and quality of care, they also present considerable security challenges. Ensuring the security of EMR systems is critical to protecting patient privacy, maintaining trust, and complying with legal and regulatory requirements.
          </p>

        </div>

        <div className="lg:w-1/3 lg:pl-8 flex justify-center lg:justify-end">
          <img src={AboutImg} alt="About Us" className="w-full lg:w-full" />
        </div>
        {/* <div className="lg:w-1/3 lg:pl-8 flex justify-center lg:justify-end">
          <img src={AboutImg} alt="About Us" className="w-full lg:w-full" style={{ maxWidth: '500px', height: 'auto' }} />
        </div> */}
        
      </div>

    </section>

  );

}

export default About;