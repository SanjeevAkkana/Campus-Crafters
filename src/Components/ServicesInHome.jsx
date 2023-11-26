import React from 'react';
import { FaLinkedin, FaFileAlt } from 'react-icons/fa'; // You can use appropriate icons for LinkedIn and Author Portfolio

const ServicesInHome = () => {
  return (
    <section className="p-12">
        <div className='w-96 h-96 z-[-10] bg-blue-100 absolute rounded-tr-full blur-3xl'></div>
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-semibold mb-6">Student-Focused Free Offerings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Blog Content */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="bg-blue-200 p-3 rounded-full">
              <FaFileAlt className="text-blue-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Blog Content</h3>
              <p className="text-gray-600">Explore a wide range of topics for free.</p>
            </div>
          </div>

          {/* LinkedIn Profile Optimization */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="bg-blue-200 p-3 rounded-full">
              <FaLinkedin className="text-blue-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">LinkedIn Profile Optimization</h3>
              <p className="text-gray-600">Maximize your LinkedIn presence.</p>
            </div>
          </div>

          {/* Author Portfolio Creation */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex items-center">
            <div className="bg-yellow-200 p-3 rounded-full">
              <FaFileAlt className="text-yellow-500 text-2xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold">Author Portfolio Creation</h3>
              <p className="text-gray-600">Showcase your education, experience, and more.</p>
            </div>
          </div>

          {/* Add more blog or free services here */}
        </div>
      </div>
    </section>
  );
};

export default ServicesInHome;
