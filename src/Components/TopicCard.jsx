import React from 'react';

const TopicCard = ({ categoryImage, categoryName, categoryDescription, categorySlogan }) => {
  // Define the character limit for the description text
  const descriptionLimit = 150;

  // Function to limit the text and add an ellipsis
  const limitText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.slice(0, limit) + '...';
  };

  return (
    <div className="bg-white mb-6">
      <div className="relative">
        <img src={categoryImage} alt={categoryName} className="w-full h-48 object-cover mb-4" />
        <div className="absolute top-4 left-4 bg-opacity-80 bg-gray-800 text-white py-1 px-2 flex items-center justify-center">
          <span className="text-sm font-medium">
            <a href="#">{categoryName}</a>
          </span>
        </div>
      </div>
      <h3 className="text-xl mt-4">{categoryName}</h3>
      <p className="text-orange-500 text-sm mb-2">{categorySlogan}</p>
      <p className="text-gray-600 mb-4">{limitText(categoryDescription, descriptionLimit)}</p>
      <button className="border-orange-500 border-2 px-2 py-1 transition duration-300">
        Explore More
      </button>
    </div>
  );
};

export default TopicCard;