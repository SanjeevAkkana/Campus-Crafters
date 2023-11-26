import React from 'react'
import authorData from '../Utils/AuthorData'
import { AiOutlineArrowRight } from 'react-icons/ai';

const AuthorsInHome = () => {
    console.log(authorData);
  return (
    <div className='px-12 pb-12'>
        <p className='font-semibold text-xl border-b-4 border-black pb-2 w-fit mb-12'>Top Authors</p>
        <div className='grid grid-cols-4 gap-6'>
            {authorData.map((author)=>{
                return(
                    <div className='w-full'>
                        <div className='w-full'>
                            <img className='w-full h-48 rounded-xl object-cover' src={author.authorImage} alt={author.authorName} />
                        </div>
                        <div className='w-full'>
                            <p className='text-xl pt-2 border-b-2 border-black font-semibold w-fit'>{author.authorName}</p>
                            <p className='mt-4 pr-2 font-serif'>{author.authorDescription}</p>
                        </div>
                        <p className='p-2 rounded-full border border-black w-fit mt-2'><AiOutlineArrowRight className='transform -rotate-45' /></p>
                        </div>
                )
            })}
        </div>
    </div>
  )
}

export default AuthorsInHome