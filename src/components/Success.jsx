import React from 'react';
import CountUp from 'react-countup';

const Success = () => {
  return (
    <div className='mx-auto mt-10 max-w-screen-xl px-4 sm:px-6 lg:px-8'>
      <p className='text-center text-xl md:text-3xl font-semibold'>
        Our Milestones: Celebrating Success Together
      </p>
      <div className='grid grid-cols-2 my-10 md:grid-cols-3 lg:grid-cols-5 gap-5'>
        <div className='flex flex-col justify-center p-4 rounded-2xl border-2 shadow-lg items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-11'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z'
            />
          </svg>

          <p className='text-lg md:text-xl my-4'>Our Users</p>
          <div className='flex items-center'>
            <CountUp
              className='text-2xl md:text-4xl lg:text-5xl font-semibold'
              enableScrollSpy={true}
              end={1000}
              duration={5}
            />
            <p className='text-2xl md:text-4xl lg:text-5xl font-semibold'>+</p>
          </div>
        </div>
        <div className='flex flex-col justify-center p-4 rounded-2xl border-2 shadow-lg items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-11'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
            />
          </svg>

          <p className='text-lg md:text-xl my-4'>Lessons</p>
          <div className='flex items-center'>
            <CountUp
              className='text-2xl md:text-4xl lg:text-5xl font-semibold'
              enableScrollSpy={true}
              end={10}
              duration={5}
            />
            <p className='text-2xl md:text-4xl lg:text-5xl font-semibold'>+</p>
          </div>
        </div>
        <div className='flex flex-col justify-center p-4 rounded-2xl border-2 shadow-lg items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-11'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802'
            />
          </svg>

          <p className='text-lg md:text-xl my-4'>Vocabularies</p>
          <div className='flex items-center'>
            <CountUp
              className='text-2xl md:text-4xl lg:text-5xl font-semibold'
              enableScrollSpy={true}
              end={100}
              duration={5}
            />
            <p className='text-2xl md:text-4xl lg:text-5xl font-semibold'>+</p>
          </div>
        </div>
        <div className='flex flex-col justify-center p-4 rounded-2xl border-2 shadow-lg items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-11'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z'
            />
          </svg>

          <p className='text-lg md:text-xl my-4'>Tutorials</p>
          <div className='flex items-center'>
            <CountUp
              className='text-2xl md:text-4xl lg:text-5xl font-semibold'
              enableScrollSpy={true}
              end={50}
              duration={5}
            />
            <p className='text-2xl md:text-4xl lg:text-5xl font-semibold'>+</p>
          </div>
        </div>
        <div className='flex flex-col justify-center p-7 rounded-2xl border-2 shadow-lg items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-11'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
            />
          </svg>

          <p className='text-lg md:text-xl my-4'>Sponsors</p>
          <div className='flex items-center'>
            <CountUp
              className='text-2xl md:text-4xl lg:text-5xl font-semibold'
              enableScrollSpy={true}
              end={5}
              duration={5}
            />
            <p className='text-2xl md:text-4xl lg:text-5xl font-semibold'>+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
