import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const HomeLessons = () => {
  const { lessons } = useContext(AppContext);

  return (
    <div className='mt-6 lg:mt-[18rem] mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
      <div>
        <p className='text-center text-xl md:text-3xl font-semibold'>
          Start Your Journey: Explore Featured Lessons
        </p>
        <div className='grid mt-7 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
          {lessons.slice(0, 5).map((lesson) => (
            <div
              key={lesson.id}
              className='group relative w-full rounded-xl overflow-hidden border-[#F4F9FF] px-6 py-6 text-black shadow'>
              <span className='absolute left-[-40%] top-[30%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#DDE1E6] via-[#DDE1E6] to-[#F7FAFF] duration-300 group-hover:top-[-30%] group-hover:blur-sm'></span>

              <span className='absolute right-[-40%] top-[-40%] z-10 h-[200px] w-[200px] rounded-full bg-gradient-to-tr from-[#DDE1E6] via-[#DDE1E6] to-[#F7FAFF] duration-300 group-hover:top-[40%] group-hover:blur-sm'></span>

              <div className='relative z-20 space-y-6'>
                <h1 className='text-2xl font-bold'>{lesson.title}</h1>

                <p className='text-black flex items-center gap-2 font-semibold text-xl'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-6'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25'
                      />
                    </svg>
                  </span>
                  Language: <span className='font-medium'>Spanish</span>
                </p>
                <p className='text-black font-normal flex items-center gap-2'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='size-5'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25'
                      />
                    </svg>
                  </span>
                  Lesson no {lesson.Lesson_no}
                </p>
                {lesson.difficulty === 'easy' ? (
                  <span className='inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='-ms-1 me-1.5 size-4'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                      />
                    </svg>

                    <p className='whitespace-nowrap text-sm'>
                      {lesson.difficulty}
                    </p>
                  </span>
                ) : lesson.difficulty === 'medium' ? (
                  <span className='inline-flex items-center justify-center rounded-full bg-amber-100 px-2.5 py-0.5 text-amber-700'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='-ms-1 me-1.5 size-4'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z'
                      />
                    </svg>

                    <p className='whitespace-nowrap text-sm'>
                      {lesson.difficulty}
                    </p>
                  </span>
                ) : (
                  <span className='inline-flex items-center justify-center rounded-full bg-red-100 px-2.5 py-0.5 text-red-700'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='-ms-1 me-1.5 size-4'>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                      />
                    </svg>

                    <p className='whitespace-nowrap text-sm'>
                      {lesson.difficulty}
                    </p>
                  </span>
                )}
                <p className='font-semibold'>
                  Words About:{' '}
                  <span className='font-normal'>{lesson.word}</span>
                </p>
                <button className='relative w-[10rem] h-14 origin-top transform rounded-lg border-2 border-[#DDE1E6] text-md text-black before:absolute before:top-0 before:block before:h-0 before:w-full before:duration-500 hover:text-black hover:before:absolute hover:before:left-0 hover:before:-z-10 hover:before:h-full hover:before:bg-[#DDE1E6]'>
                  Learn More
                </button>
              </div>
            </div>
          ))}
          <div className='flex items-center justify-center md:justify-normal'>
            <a
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
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLessons;
