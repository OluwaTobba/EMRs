import React from 'react';
import FooterImg from '../assets/footer-img.jpg';

function Footer(){

  return (

    <footer className="bg-blue-800 text-white py-6">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* <div className="mt-6"></div> */}

        <p>&copy; 2024 EMRs Security. All rights reserved.</p>

        <div className="mt-4">
          <a href="#" className="mx-2">Privacy Policy</a>
          <a href="#" className="mx-2">Terms of Service</a>
        </div>

        <div className="mt-6 text-red-400">
          {/* <img src={FooterImg} alt="Footer Image" className="mx-auto" /> */}
          <p>DON'T CLICK - 'Never trust, Always Verify'</p>
        </div>

      </div>

    </footer>

  );

}

export default Footer;