import React, { useRef } from 'react'
import data from '../Utils/Data';
import Top3Blogs from './Top3Blogs';
import blogData from '../Utils/BlogData';

const TopicsInHome = () => {
    const containerRef = useRef(null);

    const handleScrollLeft = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft -= 100; // Adjust the scroll distance as needed
        }
    };

    const handleScrollRight = () => {
        if (containerRef.current) {
            containerRef.current.scrollLeft += 100; // Adjust the scroll distance as needed
        }
    };
    return (
        <div className='pt-12 px-12'>
            {/* About Blog  */}
            <div className='flex justify-start items-center'>
                <div className='w-full text-center'>
                    <h1 className='text-3xl font-semibold'>Crafting Wisdom</h1>
                </div>
                <div className='w-full'>
                    <p className='text-md font-normal'>Discover diverse topics on Campus Crafters' engaging blog, including fitness, finance, health, mythology, stories, movies, coding, and sports. Explore our informative and entertaining content.</p>
                    <div className='pt-4'>
                        <form>
                            <div className='flex items-center gap-x-2'>
                                <div className='border border-black  p-2 flex items-center gap-x-2 bg-white shadow-sm'>
                                    <input
                                        placeholder='user@gmail.com'
                                        className='border-transparent focus:outline-none focus:border-transparent'
                                    />
                                </div>
                                <div className='w-full h-full flex items-center'>
                                    <p className='text-white hover:bg-white hover:text-black w-fit h-full bg-black border border-black  p-2 cursor-pointer'>Subscribe</p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* Blogs with topics  */}
            <div className='py-6'>
                <div className='relative mt-12'>
                    <div className='overflow-x-scroll' ref={containerRef}>
                        <div className='flex items-center gap-x-6'>
                            {data.map((item) => (
                                <div key={item._id} className='w-full'>
                                    <p className='bg-black  text-white p-2 w-full text-center'>{item.categoryName}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Scroll Left Button */}
                    <button
                        className='absolute right-12  bg-black text-white bottom-12 px-4 py-2 flex items-center'
                        onClick={handleScrollLeft}
                    >
                        &lt; {/* Left arrow character */}
                    </button>

                    {/* Scroll Right Button */}
                    <button
                        className='absolute right-0  bg-black text-white bottom-12 px-4 py-2 flex items-center'
                        onClick={handleScrollRight}
                    >
                        &gt; {/* Right arrow character */}
                    </button>
                </div>
                {/* Top 3 blogs  */}
                <div className='pt-12'>
                    <Top3Blogs items={blogData} />
                </div>
            </div>
        </div>
    )
}

export default TopicsInHome