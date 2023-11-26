import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'


const TrendingBlogs = ({ items }) => {
    return (
        <div className='grid grid-cols-3 gap-x-6 items-center'>
            <div className='grid grid-rows-2 gap-y-8'>
                <div className='w-full grid grid-rows-3 items-center'>
                    <p className='text-md p-2 border-b mx-auto'>{items[0].title.slice(0, 50)}...</p>
                    <p className='text-md p-2 border-b mx-auto'>{items[1].title.slice(0, 50)}...</p>
                    <p className='text-md p-2 border-b mx-auto'>{items[2].title.slice(0, 50)}...</p>
                </div>
                <div className='pt-4 w-fit'>
                        <form>
                            <div className=''>
                                <div className='border border-black  p-2 bg-white shadow-sm'>
                                    <input
                                        placeholder='user@gmail.com'
                                        className='border-transparent focus:outline-none focus:border-transparent'
                                    />
                                </div>
                                <div className='mt-2'>
                                    <p className='text-white hover:bg-white hover:text-black w-fit h-full bg-black border border-black  p-2 cursor-pointer'>Subscribe</p>
                                </div>
                            </div>
                        </form>
                    </div>
            </div>
            <div className='w-full h-full'>
                <img className='object-cover w-full h-48 rounded-3xl' src={items[0].blogImage} alt={items[0].title} />
                <p className='pt-1 font-semibold text-xl'>{items[0].title.slice(0, 30)}...</p>
                <p className='pt-2 text-md font-thin'>{items[0].introduction[0].content[0].slice(0, 120)}...</p>
                <p className='mt-2 p-2 border border-black w-fit rounded-full'><AiOutlineArrowRight className='transform -rotate-45' /></p>
            </div>
            <div className='w-full h-full'>
                <img className='object-cover w-full h-48 rounded-3xl' src={items[0].blogImage} alt={items[0].title} />
                <p className='pt-1 font-semibold text-xl'>{items[0].title.slice(0, 30)}...</p>
                <p className='pt-2 text-md font-thin'>{items[0].introduction[0].content[0].slice(0, 120)}...</p>
                <p className='mt-2 p-2 border border-black w-fit rounded-full'><AiOutlineArrowRight className='transform -rotate-45' /></p>
            </div>
        </div>
    )
}

export default TrendingBlogs