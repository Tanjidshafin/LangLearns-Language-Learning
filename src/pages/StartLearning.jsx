import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { NavLink } from 'react-router-dom';
import CountUp from 'react-countup';
import Tutorial from '../components/Tutorial';

const StartLearning = () => {
  const { lessons } = useContext(AppContext);
  const [langSelector, setLangSelector] = useState('spanish');
  const [toggle, setToggle] = useState('grid');

  return (
    <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
      <div>
        <p className='text-center text-xl md:text-3xl font-semibold'>
          Starting Your <span className='text-[#2C6E49]'>Language </span>
          Learning Journey
        </p>
        <p className='text-gray-500 text-center max-w-[55rem] my-5 mx-auto'>
          Welcome to your language learning journey! Our interactive web app
          helps you expand vocabulary and improve communication skills in
          various languages. Log in to start your fun and engaging lessons
          today!
        </p>
        <div>
          <div className='mt-8 flex justify-between'>
            <div className='flex h-10 rounded border border-gray-100'>
              <button
                onClick={() => {
                  toggle === 'grid' ? setToggle('grid') : setToggle('grid');
                }}
                className={`inline-flex size-10 ${
                  toggle === 'grid' ? 'bg-[#f4f7ff]' : ''
                } items-center justify-center border-e text-gray-600 transition `}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='size-5'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
                  />
                </svg>
              </button>

              <button
                onClick={() => {
                  toggle !== 'grid' ? setToggle('line') : setToggle('line');
                }}
                className={`inline-flex size-10 items-center justify-center ${
                  toggle === 'line' ? 'bg-[#f4f7ff]' : ''
                } transition `}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='size-5'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                  />
                </svg>
              </button>
            </div>

            <div className='mb-5'>
              <label htmlFor='SortBy' className='sr-only'>
                Language
              </label>

              <select
                id='Language'
                className='h-10 px-2 rounded border-gray-300 text-sm'>
                <option onClick={() => setLangSelector('spanish')}>
                  Spanish
                </option>
                <option onClick={() => setLangSelector('japan')}>
                  Japanese
                </option>
                <option onClick={() => setLangSelector('hindi')}>Hindi</option>
                <option onClick={() => setLangSelector('korean')}>
                  Korean
                </option>
                <option onClick={() => setLangSelector('arabic')}>
                  Arabic
                </option>
              </select>
            </div>
          </div>
        </div>
        <div
          className={`${
            langSelector === 'spanish' ? 'lg:h-[36rem] overflow-auto' : ''
          }`}>
          <div
            className={`${langSelector === 'spanish' ? 'grid' : 'flex'} ${
              toggle === 'grid'
                ? 'grid-cols-2 md:grid-cols-2 lg:grid-cols-3'
                : 'grid-cols-1'
            } justify-center gap-5`}>
            {langSelector === 'spanish' ? (
              lessons.slice(0, 10).map((lesson) => (
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
                    <div
                      className={` ${
                        toggle === 'grid' ? 'hidden' : ''
                      } md:flex flex-col-reverse`}>
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
              ))
            ) : (
              <div className='mt-10'>
                <img
                  className='w-[200px] rounded-2xl mx-auto lg:w-[300px]'
                  src='https://img.freepik.com/premium-vector/window-operating-system-error-warning-dialog-window-popup-message-with-system-failure-flat-design_812892-54.jpg'
                  alt=''
                />
                <p className='text-center my-10 font-semibold text-xl md:text-2xl'>
                  Unfortunate Not Avalaible
                </p>
              </div>
            )}
          </div>
          <div></div>
        </div>
        <Tutorial />
      </div>
    </div>
  );
};

export default StartLearning;
