import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Tutorials = () => {
  const [loader, setLoader] = useState(true);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [animateCards, setAnimateCards] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoader(false);
    }, 1000);

    // Trigger animation after component mounts
    setTimeout(() => {
      setAnimateCards(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const videos = [
    {
      id: 1,
      video: 'https://www.youtube.com/embed/luj8bpvRQ34?si=_wlxKTQAgthLC1Cs',
      title: "Mastering the Verb 'SER' | Spanish For Beginners (Ep.2)",
      duration: "12:45",
      level: "Beginner",
      views: "24K"
    },
    {
      id: 2,
      video: 'https://www.youtube.com/embed/z7c0IlnBr7k?si=LisUzvk3MuaxgiNw',
      title: "Mastering the Verb 'SER' | Spanish For Beginners (Ep.2.5)",
      duration: "10:18",
      level: "Beginner",
      views: "18K"
    },
    {
      id: 3,
      video: 'https://www.youtube.com/embed/OhruBtJCWT4?si=xnHDTvp4t2T2wOaj',
      title: "Mastering the Verb 'SER' | Spanish For Beginners (Ep.3)",
      duration: "15:22",
      level: "Beginner",
      views: "31K"
    },
    {
      id: 4,
      video: 'https://www.youtube.com/embed/Hpp0TO3LxeQ?si=URKOnPyNxgzFWXEy',
      title: "Mastering the Verb 'SER' | Spanish For Beginners (Ep.4)",
      duration: "14:05",
      level: "Intermediate",
      views: "22K"
    },
    {
      id: 5,
      video: 'https://www.youtube.com/embed/p2JLyK1dLpE?si=ieY4BeTa4DfZvmpS',
      title: "Mastering the Verb 'SER' | Spanish For Beginners (Ep.5)",
      duration: "16:30",
      level: "Intermediate",
      views: "19K"
    },
    {
      id: 6,
      video: 'https://www.youtube.com/embed/D95mAYdT9m4?si=ASeoJt-fV4t0umdA',
      title: "Mastering the Verb 'SER' | Spanish For Beginners (Ep.6)",
      duration: "18:15",
      level: "Intermediate",
      views: "27K"
    },
  ];

  return (
    <div className='relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 py-8'>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-50 rounded-full -z-10 blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-50 rounded-full -z-10 blur-3xl opacity-70"></div>
      
      <div className="relative">
        {/* Enhanced Header Section */}
        <div className="text-center mb-12">
          <h1 className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent'>
            Master Vocabulary Effortlessly
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-3 mx-auto"></div>
          
          <p className='mt-6 text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Learn language vocabulary effortlessly with our interactive tutorial
            videos! Discover practical tips and engaging techniques to expand your
            word bank, retain words effectively, and kickstart your journey to
            fluency.
          </p>
        </div>

        {/* Featured Video Banner */}
        {selectedVideo ? (
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 bg-black">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`${selectedVideo.video}?autoplay=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gradient-to-t from-black/80 to-transparent absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-xl font-bold mb-2">{selectedVideo.title}</h2>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  {selectedVideo.views} views
                </span>
                <span className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  {selectedVideo.duration}
                </span>
                <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                  {selectedVideo.level}
                </span>
              </div>
            </div>
          </div>
        ) : (
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/90 to-teal-600/90 z-10"></div>
            <img 
              src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Language Learning" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Interactive Spanish Tutorials</h2>
              <p className="max-w-2xl mb-6">Watch our carefully crafted video lessons to master Spanish vocabulary and grammar concepts</p>
              <button 
                onClick={() => setSelectedVideo(videos[0])}
                className="px-6 py-3 bg-white text-emerald-600 font-medium rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Featured Video
              </button>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loader ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-emerald-500"></div>
          </div>
        ) : (
          <>
            {/* Video Grid */}
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${
              animateCards ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-500`}>
              {videos.map((video, index) => (
                <div
                  key={video.id}
                  className={`transform transition-all duration-500 ${
                    animateCards ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div 
                    className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white cursor-pointer"
                    onClick={() => setSelectedVideo(video)}
                  >
                    {/* Thumbnail with play button overlay */}
                    <div className="relative aspect-video overflow-hidden">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors z-10"></div>
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <div className="w-14 h-14 rounded-full bg-white/80 group-hover:bg-white flex items-center justify-center group-hover:scale-110 transform transition-transform">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                      <img 
                        src={`https://img.youtube.com/vi/${video.video.split('/').pop().split('?')[0]}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded z-10">
                        {video.duration}
                      </div>
                    </div>
                    
                    {/* Video info */}
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2 mb-2">
                        {video.title}
                      </h3>
                      
                      <div className="flex justify-between items-center">
                        <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                          {video.level}
                        </span>
                        
                        <span className="text-xs text-gray-500 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                          {video.views} views
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to practice what you've learned?</h3>
                <p className="text-gray-600">Apply your knowledge with our interactive vocabulary exercises.</p>
              </div>
              
              <NavLink 
                to="/StartLearning" 
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center whitespace-nowrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                Learn Vocabularies
              </NavLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tutorials;