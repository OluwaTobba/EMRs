import React from 'react';

function Dashboard() {

  return (

    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-md text-center">

        <h2 className="text-3xl font-bold mb-6 text-blue-500">Welcome to EMRs Training</h2>

        <p className="text-lg text-gray-700 mb-6">Here you can find various training materials and resources to help you secure your electronic medical records effectively.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="#course1" className="block bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Course 1</a>
          <a href="#course2" className="block bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Course 2</a>
          <a href="#course3" className="block bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Course 3</a>
          <a href="#course4" className="block bg-blue-500 text-white py-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">Course 4</a>
        </div>

      </div>

    </div>

  );

}

export default Dashboard;