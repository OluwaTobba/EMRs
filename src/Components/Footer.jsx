import React from 'react';

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

      </div>

    </footer>

  );

}

export default Footer;