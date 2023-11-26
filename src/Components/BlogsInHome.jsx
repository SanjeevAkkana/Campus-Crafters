import React from 'react'
import TrendingBlogs from './TrendingBlogs'
import data from '../Utils/BlogData';

const BlogsInHome = () => {
  return (
    <div className='px-12'>
        <p className='font-semibold text-xl border-b-4 border-black pb-2 w-fit mb-12'>Trending Blogs</p>
        <TrendingBlogs items={data} />
    </div>
  )
}

export default BlogsInHome