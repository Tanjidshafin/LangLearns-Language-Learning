import React, { useContext, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const EachLesson = () => {
  const { lessonNo } = useParams();
  const { lessons } = useContext(AppContext);
  const [openModal, setOpenModal] = useState(false);
  const [example, setExample] = useState('');
  const [word, setWord] = useState('');
  const [say, setSay] = useState('');
  const [meaning, seMeaning] = useState('');

  const filtered = lessons.filter(
    (lesson) => lesson.Lesson_no === parseInt(lessonNo)
  );

  return (
    <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
      <div>
        <p className='text-xl text-center md:text-start md:text-3xl font-semibold'>
          Lets <span className='text-[#2C6E49]'>Start</span> With{' '}
          <span className='text-[#2C6E49]'>Lesson: {lessonNo}</span>
        </p>
        <p className='mt-4 text-center md:text-start max-w-lg text-gray-500'>
          Master essential vocabulary and phrases related to learning new
          languages in <span className='text-[#2C6E49]'>Spanish</span>. This
          lesson ({lessonNo}) is designed to make learning engaging and
          interactive. Start expanding your{' '}
          <span className='text-[#2C6E49]'>Spanish </span>
          vocabulary today!
        </p>
        <div className='mt-10 flex justify-between items-center'>
          <div>
            <p className='text-lg border-dashed border-2 text-[#2C6E49] py-4 font-semibold px-6'>
              Lesson: {lessonNo}
            </p>
          </div>
          <div>
            <label htmlFor='SortBy' className='sr-only'>
              Filter
            </label>

            <select
              id='SortBy'
              className='h-10 px-2 rounded border-gray-300 text-sm'>
              <option>Filter</option>
              <option>By Difficulty</option>
            </select>
          </div>
        </div>
        <div className='grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-4 gap-5'>
          {filtered.map((leson) => (
            <NavLink className='hover:animate-background rounded-xl bg-gradient-to-r from-[#2C6E49] via-[#9E2B25] to-[#A0D2DB] p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]'>
              <div className='rounded-[10px] bg-white h-[15rem] p-4 sm:p-6'>
                <a href='#'>
                  <h3 className='mt-0.5 mb-5 text-lg font-semibold text-gray-900'>
                    {leson.word}
                  </h3>
                </a>
                <p className='mt-1 text-xs font-medium '>
                  Pronunciation:
                  <span className='text-gray-600'> {leson.pronunciation}</span>
                </p>
                <p className='mt-1 text-xs font-medium '>
                  Parts of Speech:
                  <span className='text-gray-600'> {leson.part_of_speech}</span>
                </p>

                <dl className='mt-2 justify-between flex gap-4 sm:gap-6'>
                  <div className='flex flex-col-reverse'>
                    <dt className='text-sm font-medium text-gray-600'>
                      Meaning
                    </dt>
                    <dd className='text-xs text-gray-500'>{leson.meaning}</dd>
                  </div>

                  <div className='flex flex-col-reverse'>
                    <dt className='text-sm font-medium text-gray-600'>
                      Difficulty
                    </dt>
                    <dd className='text-xs text-gray-500'>
                      {leson.difficulty}
                    </dd>
                  </div>
                </dl>
                <div className='mt-3'>
                  <button
                    onClick={() => {
                      setOpenModal(true);
                      setExample(leson.example);
                      setSay(leson.when_to_say);
                      setWord(leson.word);
                      seMeaning(leson.meaning);
                    }}
                    className='btn text-[#2C6E49] hover:bg-[#2C6E49] hover:text-white border-[#2C6E49] bg-white w-full'>
                    When to say
                  </button>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
        <div className='mx-auto w-fit'>
          <div
            onClick={() => setOpenModal(false)}
            className={`fixed z-[100] w-screen ${
              openModal ? 'visible opacity-100' : 'invisible opacity-0'
            } inset-0 grid place-items-center bg-black/20 backdrop-blur-sm duration-100 dark:bg-transparent`}>
            <div
              onClick={(e_) => e_.stopPropagation()}
              className={`absolute max-w-md rounded-lg bg-white p-6 drop-shadow-lg dark:bg-zinc-900 dark:text-white ${
                openModal
                  ? 'opacity-1 duration-300'
                  : 'scale-110 opacity-0 duration-150'
              }`}>
              <svg
                onClick={() => setOpenModal(false)}
                className='absolute right-3 top-3 w-6 cursor-pointer fill-zinc-600 dark:fill-white'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path d='M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z'></path>
              </svg>

              <h1 className='mb-2 text-2xl font-semibold'>{word}</h1>

              <div className='my-5'>
                <p className=' text-sm opacity-80'>Meaning: {meaning}</p>
                <p className='my-2 text-sm opacity-80'>When To Say: {say}</p>
                <p className=' text-sm opacity-80'>Example: {example}</p>
              </div>

              <div className='flex justify-end gap-2'>
                <button
                  onClick={() => setOpenModal(false)}
                  className='rounded-md bg-emerald-600 px-6 py-[6px] text-white hover:bg-emerald-700'>
                  Ok
                </button>

                <NavLink
                  to='/StartLearning'
                  className='rounded-md border border-[#9E2B25] px-6 py-[6px] text-[#9E2B25] duration-150 hover:bg-rose-600 hover:text-white'>
                  Back to Lesson
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachLesson;
