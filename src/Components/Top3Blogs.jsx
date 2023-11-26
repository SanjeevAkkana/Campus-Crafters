import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'


const Top3Blogs = ({ items }) => {
    return (
        <div className='grid grid-cols-3 gap-x-6 items-center'>
            <div className='w-full h-full'>
                <img className='object-cover w-full h-48' src={items[0].blogImage} alt={items[0].title} />
                <p className='pt-1 font-semibold text-xl'>{items[0].title.slice(0, 30)}...</p>
                <p className='pt-2 text-md font-thin'>{items[0].introduction[0].content[0].slice(0, 120)}...</p>
                <p className='mt-2 p-2 border border-black w-fit rounded-full'><AiOutlineArrowRight className='transform -rotate-45' /></p>
            </div>
            <div className='w-full h-full'>
                <img className='object-cover w-full h-48' src={items[0].blogImage} alt={items[0].title} />
                <p className='pt-1 font-semibold text-xl'>{items[0].title.slice(0, 30)}...</p>
                <p className='pt-2 text-md font-thin'>{items[0].introduction[0].content[0].slice(0, 120)}...</p>
                <p className='mt-2 p-2 border border-black w-fit rounded-full'><AiOutlineArrowRight className='transform -rotate-45' /></p>
            </div>
            <div className='grid grid-rows-2 gap-y-8'>
                <div className='w-full grid grid-rows-3'>
                    <p className='text-md p-2 border-b mx-auto'>{items[0].title.slice(0, 50)}...</p>
                    <p className='text-md p-2 border-b mx-auto'>{items[1].title.slice(0, 50)}...</p>
                    <p className='text-md p-2 border-b mx-auto'>{items[2].title.slice(0, 50)}...</p>
                </div>
                <div>
                    <p>If you're eager to delve deeper into this topic and expand your knowledge, simply click here to explore more.</p>
                    <p className='mt-2 p-2 border border-black w-fit rounded-full'><AiOutlineArrowRight className='transform -rotate-45' /></p>
                </div>
            </div>
        </div>
    )
}

export default Top3Blogs