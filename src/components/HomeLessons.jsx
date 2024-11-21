import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';

const HomeLessons = () => {
  const { lessons, user } = useContext(AppContext);

  return (
    <div className='mt-6 lg:mt-[18rem] mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
      <div>
        <p className='text-center text-xl md:text-3xl font-semibold'>
          Start Your Journey: Explore Featured Lessons
        </p>
        <div className='grid mt-7 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {lessons.slice(0, 5).map((lesson) => (
            <NavLink
              to={`/Lesson/${lesson.Lesson_no}`}
              className='relative shadow-lg block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8'>
              <span className='absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></span>

              <div className='sm:flex sm:justify-between sm:gap-4'>
                <div>
                  <h3 className='font-bold  text-gray-900 sm:text-xl'>
                    Lesson No: <span className=''>{lesson.Lesson_no}</span>
                  </h3>
                </div>

                <div className='hidden sm:block sm:shrink-0'>
                  <img
                    alt=''
                    src='https://www.pngitem.com/pimgs/m/505-5054502_spain-fifa-logo-spain-flag-logo-circle-hd.png'
                    className='size-12 rounded-lg object-cover shadow-sm'
                  />
                </div>
              </div>

              <dl className='mt-6 justify-between flex gap-4 sm:gap-6'>
                <div className=' hidden md:flex flex-col-reverse'>
                  <dt className='text-sm font-medium text-gray-600'>
                    Vocabularies
                  </dt>
                  <dd className='text-xs font-semibold text-center text-gray-500'>
                    <CountUp enableScrollSpy={true} duration={5} end={10} />
                  </dd>
                </div>

                <div className='flex flex-col-reverse'>
                  <dt className='text-sm font-medium text-gray-600'>
                    Difficulty
                  </dt>
                  <dd className='text-xs text-center text-gray-500'>
                    {lesson.difficulty}
                  </dd>
                </div>
              </dl>
            </NavLink>
          ))}
          <div className='flex items-center justify-center md:justify-normal'>
            <NavLink
              to={user ? '/StartLearning' : '/Login'}
              className='group relative inline-flex  border-2 items-center overflow-hidden rounded bg-[#F4F9FF] px-8 py-3 text-[black] focus:outline-none focus:ring active:scale-95 duration-150'
              href='#'>
              <span className='absolute -end-full transition-all group-hover:end-4'>
                <svg
                  className='size-5 rtl:rotate-180'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17 8l4 4m0 0l-4 4m4-4H3'
                  />
                </svg>
              </span>

              <span className='text-sm font-medium transition-all group-hover:me-4'>
                {' '}
                See more{' '}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLessons;
