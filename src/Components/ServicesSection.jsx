import React from 'react';

const ServicesSection = () => {
  const freeServices = [
    'LinkedIn Profile Optimization',
    'Author Portfolio Creation',
    'Education Resources',
    'Personal Growth Workshops',
    // Add more free services here
  ];

  const paidServices = [
    'App Development',
    'Content Creation',
    'Web Design',
    'Video Editing',
    // Add more paid services here
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Free Services</h3>
            <ul className="list-disc pl-6">
              {freeServices.map((service, index) => (
                <li key={index} className="text-gray-600 mb-2">{service}</li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Paid Services</h3>
            <ul className="list-disc pl-6">
              {paidServices.map((service, index) => (
                <li key={index} className="text-gray-600 mb-2">{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;