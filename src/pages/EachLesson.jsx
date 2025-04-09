import React, { useContext, useState, useEffect } from 'react';
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
  const [sortOrder, setSortOrder] = useState('easyToHard');
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimateCards(true);
    }, 100);
  }, []);

  const difficultyOrder = {
    Hard: 3,
    Medium: 2,
    Easy: 1,
  };

  const filtered = lessons.filter(
    (lesson) => lesson.Lesson_no === parseInt(lessonNo)
  );

  const sortedLessons = filtered.sort((a, b) => {
    if (sortOrder === 'hardToEasy') {
      return difficultyOrder[b.difficulty] - difficultyOrder[a.difficulty];
    } else {
      return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
    }
  });

  function pronounceWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'es-ES';
    window.speechSynthesis.speak(utterance);
  }

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return 'from-emerald-400 to-teal-500';
      case 'Medium': return 'from-amber-400 to-yellow-500';
      case 'Hard': return 'from-rose-500 to-red-600';
      default: return 'from-emerald-400 to-teal-500';
    }
  };

  const getDifficultyBadge = (difficulty) => {
    switch(difficulty) {
      case 'Easy': 
        return (
          <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 text-white shadow-md">
            Easy
          </span>
        );
      case 'Medium': 
        return (
          <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-white shadow-md">
            Medium
          </span>
        );
      case 'Hard': 
        return (
          <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-md">
            Hard
          </span>
        );
      default: return null;
    }
  };

  return (
    <div className='relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8'>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full -z-10 blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50 rounded-full -z-10 blur-3xl opacity-70"></div>
      
      <div className="relative">
        {/* Enhanced Header Section */}
        <div className="mb-12 relative">
          <div className="absolute -top-6 -left-6 w-20 h-20 bg-emerald-100 rounded-full opacity-50"></div>
          <h1 className='text-3xl text-center md:text-start md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
            Let's <span className='font-extrabold'>Start</span> With Lesson: {lessonNo}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-3 mx-auto md:mx-0"></div>
          
          <p className='mt-6 text-center md:text-start max-w-2xl text-gray-600 leading-relaxed'>
            Master essential vocabulary and phrases related to learning new
            languages in <span className='font-semibold text-emerald-600'>Spanish</span>. 
            This lesson ({lessonNo}) is designed to make learning engaging and
            interactive. Start expanding your{' '}
            <span className='font-semibold text-emerald-600'>Spanish </span>
            vocabulary today!
          </p>
        </div>

        {/* Enhanced Filter Section */}
        <div className='mt-10 flex flex-col sm:flex-row justify-between items-center gap-4 mb-8'>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg blur opacity-30"></div>
            <p className='relative z-10 text-lg border-2 border-emerald-500 text-emerald-700 py-3 font-bold px-8 rounded-lg bg-white'>
              Lesson: {lessonNo}
            </p>
          </div>
          
          <div className="relative group">
            <label htmlFor='SortBy' className='block text-sm font-medium text-gray-700 mb-1'>
              Sort by Difficulty
            </label>
            <div className="relative">
              <select
                id='SortBy'
                className='h-11 w-full sm:w-48 px-4 py-2 rounded-lg border-2 border-gray-200 text-gray-700 bg-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer appearance-none'
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}>
                <option value='easyToHard'>Easy to Hard</option>
                <option value='hardToEasy'>Hard to Easy</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Vocabulary Cards */}
        <div className={`grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-3 gap-6 ${animateCards ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          {sortedLessons.map((leson, index) => (
            <div 
              key={leson.word}
              className={`transform transition-all duration-500 ${animateCards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div 
                onClick={() => pronounceWord(leson.word)}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                {/* Card background with gradient based on difficulty */}
                <div className={`absolute inset-0 bg-gradient-to-br ${getDifficultyColor(leson.difficulty)} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Difficulty badge */}
                {getDifficultyBadge(leson.difficulty)}
                
                {/* Card content */}
                <div className="relative bg-white p-6 h-full border border-gray-100 rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                      {leson.word}
                    </h3>
                    <div className="relative">
                      <img 
                        className="w-10 h-10 rounded-full shadow-sm transform group-hover:scale-110 transition-transform duration-300"
                        src="https://www.pngitem.com/pimgs/m/505-5054502_spain-fifa-logo-spain-flag-logo-circle-hd.png"
                        alt="Spanish flag"
                      />
                      <div className="absolute inset-0 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Pronunciation:</span>
                      <span className="text-sm text-gray-700">{leson.pronunciation}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">Parts of Speech:</span>
                      <span className="text-sm text-gray-700">{leson.part_of_speech}</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-start border-t border-gray-100 pt-3">
                    <div>
                      <span className="block text-xs font-semibold uppercase tracking-wider text-emerald-600">Meaning</span>
                      <span className="text-sm text-gray-700">{leson.meaning}</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenModal(true);
                        setExample(leson.example);
                        setSay(leson.when_to_say);
                        setWord(leson.word);
                        seMeaning(leson.meaning);
                      }}
                      className={`w-full py-2.5 px-4 mt-4 rounded-lg font-medium text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg bg-gradient-to-r ${
                        leson.difficulty === 'Easy'
                          ? 'from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600'
                          : leson.difficulty === 'Medium'
                          ? 'from-amber-400 to-yellow-500 hover:from-amber-500 hover:to-yellow-600'
                          : 'from-rose-500 to-red-600 hover:from-rose-600 hover:to-red-700'
                      }`}>
                      When to say
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Modal */}
        <div
          onClick={() => setOpenModal(false)}
          className={`fixed z-[100] w-screen inset-0 grid place-items-center bg-black/40 backdrop-blur-sm transition-all duration-300 ${
            openModal ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}>
          <div
            onClick={(e_) => e_.stopPropagation()}
            className={`relative max-w-md w-full rounded-2xl bg-white p-8 shadow-2xl transition-all duration-300 transform ${
              openModal ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
            }`}>
            {/* Close button */}
            <button 
              onClick={() => setOpenModal(false)}
              className="absolute right-4 top-4 p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.615 84 7.38538 6.61584 6.99486 7.00636Z" fill="currentColor"></path>
              </svg>
            </button>

            {/* Modal content */}
            <div className="text-center mb-4">
              <div className="inline-block p-3 rounded-full bg-emerald-100 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{word}</h2>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-6 space-y-4">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-600 mb-1">Meaning</h3>
                <p className="text-gray-700">{meaning}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-600 mb-1">When To Say</h3>
                <p className="text-gray-700">{say}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-600 mb-1">Example</h3>
                <p className="text-gray-700 italic">"{example}"</p>
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpenModal(false)}
                className="px-6 py-2.5 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors shadow-md hover:shadow-lg">
                Got it
              </button>

              <NavLink
                to="/StartLearning"
                className="px-6 py-2.5 rounded-lg border border-rose-500 text-rose-600 font-medium hover:bg-rose-50 transition-colors">
                Back to Lessons
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachLesson;