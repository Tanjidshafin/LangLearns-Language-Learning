import React from 'react';
import { NavLink } from 'react-router-dom';

const Tutorial = () => {
  return (
    <div className='mt-14'>
      <div>
        <p className='text-center text-xl md:text-3xl font-semibold'>
          Interactive <span className='text-[#2C6E49]'>Tutorials </span>
          for Learning
        </p>
        <p className='text-gray-500 text-center max-w-[55rem] my-5 mx-auto'>
          Welcome to your language learning journey! Our interactive web app
          helps you expand vocabulary and improve communication skills in
          various languages. Log in to start your fun and engaging lessons
          today!
        </p>
      </div>
      <div>
        <iframe
          className='w-full md:h-[38rem]'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/hyLl_0d0EBw?si=vvoDRtzHaPz8p0Qq'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerpolicy='strict-origin-when-cross-origin'
          allowfullscreen></iframe>
        <div className='text-center md:text-end mt-5'>
          <NavLink to="/Tutorials" className='relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-primary transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group'>
            <span className='absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-primary group-hover:h-full'></span>
            <span className='absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12'>
              <svg
                className='w-5 h-5 text-green-400'
                fill='none'
                stroke='#3B9DF8'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
              </svg>
            </span>
            <span className='absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200'>
              <svg
                className='w-5 h-5 text-green-400'
                fill='none'
                stroke='#fff'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'></path>
              </svg>
            </span>
            <span className='relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white'>
              View More
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
