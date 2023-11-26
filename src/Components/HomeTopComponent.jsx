import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AiFillStar } from 'react-icons/ai';
import Carousel from './Carousel';

const HomeTopComponent = () => {
  const [importantPoints, setImportantPoints] = useState([
    "Optimize Your LinkedIn Profile for Free",
    "Create an Impressive Author Portfolio",
    "Access Valuable Personal Growth Resources",
    "Unleash Your Career Potential",
    "Tailored Solutions for Your Journey"
  ]);
  const [showPoints, setShowPoints] = useState(false);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <div className="z-[-10] w-64 h-64 rounded-full bg-blue-200 absolute top-80 right-96 blur-3xl"></div>
      {/* <div className="z-[-10] w-96 h-64 rounded-full bg-blue-200 absolute top-30 left-2/3 blur-3xl"></div> */}
      <motion.div className="h-[80%] flex items-center">
        <div className="w-full sm:w-2/3 sm:px-24 py-6 rounded-r-full rounded-l-3xl">
          <h1 className="text-4xl text-red-900 font-semibold">
            Unlock Your Future with <span className="text-orange-500">Campus Crafters</span>
          </h1>
          <motion.div className="w-fit pl-1">
            <Carousel items={importantPoints} />
          </motion.div>
          <p className="pt-4">
            Elevate your career with LinkedIn optimization, author portfolios, and expert guidance.
          </p>
          <p className="p-2 mt-6 border border-orange-500 w-fit text-orange-500 cursor-pointer" onClick={() => setShowPoints(!showPoints)}>
            Know more!
          </p>
        </div>
        <div className="hidden sm:block w-1/2">
          <img
            className="custom-box w-64 h-96 object-cover border-4 shadow-[50px] rounded-3xl"
            src="https://images.pexels.com/photos/5053732/pexels-photo-5053732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Campus Crafters"
          />
        </div>
      </motion.div>
      <div className="flex justify-center items-center sm:bottom-48 relative">
        <div className="flex items-center justify-end p-6 rounded-t-xl rounded-b-xl bg-white shadow-2xl absolute top-3/4 right-3 left-auto sm:w-72">
          <div className="mr-4">
            <div className="text-sm">
              <p className="font-semibold">Covers a wide range of topics</p>
              <p className="text-gray-500">10+</p>
            </div>
            <div className="text-sm mt-2">
              <p className="font-semibold">Coding Languages</p>
              <p className="text-gray-500">15+</p>
            </div>
          </div>
        </div>
      </div>
      {showPoints ? (
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
            y: 0,
          }}
          animate={{
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          }}
          exit={{
            opacity: 0,
            x: -100,
            y: 0,
            transition: {
              type: "spring",
              stiffness: 100,
              damping: 10,
            },
          }}
          drag
          dragConstraints={{
            left: -window.innerWidth / 4,
            right: window.innerWidth / 4,
            top: -window.innerHeight / 4,
            bottom: window.innerHeight / 4,
          }}
          className="shadow-md w-fit h-fit p-6 rounded-tl-xl rounded-br-xl bg-white absolute top-48 left-96"
        >
          <h1 className="text-xl font-medium pb-2">Unlock Your Future with Campus Crafters:</h1>
          {importantPoints.map((point) => (
            <div key={point} className="py-1">
              <p className="text-sm font-medium w-fit flex items-center justify-center gap-x-2">
                <span className='text-green-500'><AiFillStar /></span>
                {point}
              </p>
            </div>
          ))}
        </motion.div>
      ) : null}
    </div>
  );
};

export default HomeTopComponent;