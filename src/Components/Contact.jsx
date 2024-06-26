import React from 'react';

function Contact() {

  return (

    <section className="bg-white py-20" id="contact">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-blue-500">Contact Us</h2>

        <form className="max-w-lg mx-auto">
          
          <div className="mb-4">
            <input type="text" className="w-full p-4 border border-gray-300 rounded-lg" placeholder="Name" />
          </div>
          <div className="mb-4">
            <input type="email" className="w-full p-4 border border-gray-300 rounded-lg" placeholder="Email" />
          </div>
          <div className="mb-4">
            <textarea className="w-full p-4 border border-gray-300 rounded-lg" placeholder="Message" rows="4"></textarea>
          </div>

          <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">Send Message</button>

        </form>

      </div>

    </section>
  );
}

export default Contact;