import React from 'react';
import './BestPractices.css';
import BestPracticesImg from '../assets/best-practices.png';

function BestPractices() {

    return (

        <section className="bg-gray-100 py-20" id="best-practices">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-blue-500">
                Best Practices
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">

                <div className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center lg:justify-start">
                    <img src={BestPracticesImg} alt="Best Practices" className="w-full lg:w-full" style={{ maxWidth: '500px', height: 'auto' }} />
                </div>
                
                <div className="lg:w-2/3 lg:pl-8">
                    <p className="text-lg sm:text-xl lg:text-2xl mb-12 text-gray-700 leading-relaxed">
                        Follow these best practices to ensure the security of your EMR systems.
                    </p>
                    <ul className=" list-disc text-lecenterft mx-auto mt-8 max-w-prose space-y-4">
                        <li>Regularly update software and systems.</li>
                        <li>Implement strong password policies.</li>
                        <li>Use multi-factor authentication.</li>
                        <li>Conduct regular security audits.</li>
                        <li>Provide ongoing security training for staff.</li>
                    </ul>
                </div>

            </div>

        </section>
        
    );

}

export default BestPractices;