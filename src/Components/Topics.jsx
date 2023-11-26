import React from 'react'
import data from '../Utils/Data';
import Timelinehome from './Timelinehome';
import TopicCarousel from './TopicCarousel';

const Topics = () => {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-1/2 px-16'>
           <Timelinehome data={data} />
        </div>
        <div className='w-1/2'>
            <TopicCarousel items={data} />
        </div>
    </div>
  )
}

export default Topics