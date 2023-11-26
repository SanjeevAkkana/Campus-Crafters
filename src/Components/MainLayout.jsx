import React from 'react'
import Navbar from './Navbar'

const MainLayout = ({children}) => {
  return (
    <div>
       <div className='sticky h-full w-full top-0 z-50 bg-white px-12'>
                <Navbar />
            </div>
        {children}
    </div>
  )
}

export default MainLayout