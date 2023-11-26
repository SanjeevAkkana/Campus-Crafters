import React from 'react';
import { FaLinkedin, FaFileAlt } from 'react-icons/fa'; // Import appropriate icons

const PaidServices = () => {
  return (
    <section className="px-12 py-12 relative">
      <div className='w-96 h-96 z-[-10] bg-blue-100 absolute rounded-tr-full blur-3xl'></div>
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-semibold mb-6">Paid Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Paid Service 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="bg-blue-200 p-3 rounded-full">
              <FaLinkedin className="text-blue-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Service 1</h3>
              <p className="text-gray-600">Description of Service 1.</p>
            </div>
          </div>

          {/* Paid Service 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="bg-blue-200 p-3 rounded-full">
              <FaFileAlt className="text-blue-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Service 2</h3>
              <p className="text-gray-600">Description of Service 2.</p>
            </div>
          </div>

          {/* Add more paid services here */}
        </div>
      </div>
    </section>
  );
};

export default PaidServices;