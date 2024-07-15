import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaWhatsapp } from "react-icons/fa";
function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {

    let timer;

    if (submitted || error) {
      timer = setTimeout(() => {
        setSubmitted(false);
        setError('');
      }, 4000);
    }
    
    return () => clearTimeout(timer);
  }, [submitted, error]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!name || !email || !message) {
      setError('All fields are required.');
      return;
    }

    try {
      await addDoc(collection(db, 'contacts'), {
        name,
        email,
        message,
        timestamp: new Date()
      });

      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(true);
      setError('');
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    }

  };

  return (

    <section className="bg-white py-20" id="contact">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-blue-500 text-center">Contact Us</h2>

        <div className='grid shadow-md rounded-lg grid-cols-1 lg:grid-cols-2 gap-12'>

          <div className='mt-9 p-8'>

            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold">Get in touch</h3>
            </div>

            <div className="mb-4 flex items-center justify-center space-x-2">
              <HiOutlinePhone className="text-blue-500 text-lg" />
              <p>+234 808 845 9071</p>
            </div>

            <div className="mb-4 flex items-center justify-center space-x-2">
              <FaWhatsapp className="text-blue-500 text-lg" />
              <p>+234 706 328 9337</p>
            </div>

            <div className="mb-4 flex items-center justify-center space-x-2">
              <HiOutlineMail className="text-blue-500 text-lg" />
              <p>jjcomputerlinks@gmail.com</p>
            </div>

          </div>

          <div className="p-8">
            <form className="max-w-lg mx-auto" onSubmit={handleSubmit}>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              {submitted && <p className="text-green-500 mb-4">Message sent successfully!</p>}

              <div className="mb-4">
                <input
                  type="text"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder="Message"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>

    </section>

  );
}

export default Contact;