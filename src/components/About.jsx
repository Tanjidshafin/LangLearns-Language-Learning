import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const About = () => {
  const { user } = useContext(AppContext);
  return (
    <div
      data-aos='fade-right'
      className='mt-6 md:mt-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
      <p className='text-center text-xl md:text-3xl font-semibold'>About Us</p>
      <div className='flex mt-10 items-center flex-col md:flex-row gap-4 bg-[#F4F9FF] rounded-xl'>
        <div className='basis-1/2'>
          <img
            className='rounded-xl md:rounded-none md:rounded-l-xl'
            src='https://blog.duolingo.com/content/images/2024/06/cover_Understanding-culture-is-key-to-language-learning.png'
            alt=''
          />
        </div>
        <div className='basis-1/2 p-6'>
          <p className='text-2xl font-semibold my-4 md:text-xl '>
            Unlock New Horizons with Every Word
          </p>
          <p className='text-gray-500'>
            Our mission is to make language learning fun and effective. Users
            can master vocabulary effortlessly through interactive tools,
            personalized lessons, and a seamless experience designed to improve
            communication skills in any language.
          </p>
          <p className='my-4 font-semibold'>
            Want to get started, Here is your answer..
          </p>
          <div>
            <NavLink
              to='/StartLearning'
              className=' btn bg-[#F4F9FF] w-[10rem] hover:bg-blue-500 hover:text-white text-blue-500 border-blue-500'>
              {user ? 'Start Learning' : 'Get Started'}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
