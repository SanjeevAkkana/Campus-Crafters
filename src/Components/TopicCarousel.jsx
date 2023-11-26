import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function TopicCarousel({ items }) {
    console.log(items)

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === items.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000);

        // Clear the interval when the component unmounts or currentIndex changes
        return () => clearInterval(intervalId);
    }, [currentIndex])
    return (
        <div className='pt-1 cursor-pointer w-full' onClick={nextSlide}>
            <div
                className=''
            >
                <div className='rounded-3xl'>
                    <img className='h-56 w-56 object-cover rounded-t-3xl rounded-bl-3xl' src={items[currentIndex].categoryImage} />
                </div>
                <div className={`relative left-56 h-56 w-56 rounded-b-3xl rounded-tr-3xl border-2`}  style={{ borderColor: `${items[currentIndex].color}` }}>
                <div className='backdrop-blur-3xl flex justify-center flex-col rounded-b-3xl rounded-tr-3xl'>
                    <h1 className='text-xl font-semibold'>{items[currentIndex].categoryName.slice(0,10)}...</h1>
                    <p className='text-sm font-thin text-gray-600'>{items[currentIndex].categorySlogan.slice(0,25)}...</p>
                    <p className='pt-4'>{items[currentIndex].categoryDescription.slice(0, 150)}...</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default TopicCarousel;