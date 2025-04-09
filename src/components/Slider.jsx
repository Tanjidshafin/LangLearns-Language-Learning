import { useCallback, useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Slider = () => {
  const { user } = useContext(AppContext);
  const [currentSlider, setCurrentSlider] = useState(0);
  const carouselImages = [
    'https://talkpal.ai/wp-content/uploads/2023/04/TalkPal-illustrations-of-languiage-learning-66.png',
    'https://media.istockphoto.com/id/965099436/photo/opportunity-for-learning.jpg?s=612x612&w=0&k=20&c=meqhCNGoqx67BlcddbU4VUXAZrMj85FbK1-pcVfWn0E=',
    'https://school-education.ec.europa.eu/sites/default/files/generic-article/2024-08/AdobeStock_513836255.jpg',
    'https://media.licdn.com/dms/image/C4D12AQFWNVw43pe_0Q/article-cover_image-shrink_720_1280/0/1580739565729?e=2147483647&v=beta&t=CIQcMvVdDa5f6wYgGuKlo2kj8zKIv7hsgFZp0UvldKA',
    'https://www.peptalkradio.com/wp-content/uploads/2023/07/Master-a-New-Language-10-Essential-Principles-for-Effective-Learning-from-Beginner-to-Fluent.jpg',
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider) =>
      currentSlider === 0 ? carouselImages.length - 1 : currentSlider - 1
    );
  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className='relative'>
      <div className='h-60 w-full md:h-[470px] lg:mt-24  mt-10 lg:h-[540px] mx-auto max-w-screen-xl relative overflow-hidden'>
        <button
          onClick={prevSlider}
          className='absolute top-1/2 left-3 z-50 flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8'>
          <svg
            className='icon h-4 w-4 fill-black/50 md:h-6 md:w-6'
            viewBox='0 0 1024 1024'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z'></path>
          </svg>
        </button>

        <button
          onClick={nextSlider}
          className='absolute top-1/2 z-50 right-3  flex justify-center items-center bg-white rounded-full w-6 h-6 md:w-8 md:h-8'>
          <svg
            className='icon h-4 w-4 fill-black/50 md:h-6 md:w-6'
            viewBox='0 0 1024 1024'
            xmlns='http://www.w3.org/2000/svg'
            transform='rotate(180)'>
            <path d='M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z'></path>
          </svg>
        </button>

        <div
          className='ease-linear duration-500 flex transform-gpu'
          style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
          {carouselImages.map((slide, id) => (
            <img
              key={slide}
              src={slide}
              className='min-w-full h-60 bg-black/20 brightness-75 sm:h-96 md:h-[540px] object-cover'
              alt={`Slider - ${id + 1}`}
            />
          ))}
        </div>
      </div>
     {/* Enhanced CTA Box */}
     <div className="lg:absolute mx-4 bg-white lg:top-1/2 gap-6 lg:left-1/2 lg:-translate-x-1/2 lg:translate-y-36 flex flex-col md:flex-col lg:flex-row p-3 md:p-8 rounded-2xl items-center shadow-xl border border-gray-100">
        <div className="relative basis-1/2 overflow-hidden rounded-xl">
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-full opacity-20"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-gradient-to-br from-emerald-300 to-emerald-500 rounded-full opacity-20"></div>
          
          <img
            className="w-full object-cover h-[300px] rounded-xl transform transition-transform duration-700 hover:scale-105"
            src="https://images.shiksha.com/mediadata/images/articles/1593692498phpqoP7Fd.jpeg"
            alt="Language Learning"
          />
          
          {/* Language bubbles decoration */}
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-emerald-700">English</div>
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-emerald-700">Spanish</div>
          <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-emerald-700">French</div>
          <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-emerald-700">Japanese</div>
        </div>
        
        <div className="basis-1/2">
          <h2 className="font-bold max-w-[24rem] mx-auto text-gray-800 text-2xl text-center leading-tight">
            The <span className="text-emerald-600">Free, Fun, and Effective</span> Way to Learn a Language!
          </h2>
          
          {user ? (
            <div className="mt-6">
              <p className="text-center text-gray-600 my-4 max-w-md mx-auto">
                Welcome to our language-learning app! Unlock vocabulary,
                practice skills, and master new languages in a fun, interactive
                environment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <NavLink 
                  to="/StartLearning" 
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium text-center shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1">
                  Start Learning
                </NavLink>
                <NavLink 
                  to="/Tutorials" 
                  className="px-6 py-3 rounded-full bg-white border border-emerald-500 text-emerald-600 font-medium text-center shadow-lg hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1">
                  View Tutorials
                </NavLink>
              </div>
            </div>
          ) : (
            <div className="flex gap-4 mt-6 flex-col">
              <NavLink
                to="/Signup"
                className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-medium text-center shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-300 transform hover:-translate-y-1 mx-auto w-[18rem]">
                Get Started
              </NavLink>
              <NavLink
                to="/Login"
                className="px-6 py-3 rounded-full bg-white border border-emerald-500 text-emerald-600 font-medium text-center shadow-md hover:bg-emerald-50 transition-all duration-300 transform hover:-translate-y-1 mx-auto w-[18rem]">
                Already Have Account?
              </NavLink>
            </div>
          )}
          
          {/* Language level indicators */}
          <div className="flex justify-center gap-2 mt-6">
            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-md">Beginner</span>
            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-md">Intermediate</span>
            <span className="px-2 py-1 bg-emerald-100 text-emerald-700 text-xs rounded-md">Advanced</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Slider;
