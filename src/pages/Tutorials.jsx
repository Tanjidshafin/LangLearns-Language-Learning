import React, { useState } from 'react';

const Tutorials = () => {
  const [loader, setLoader] = useState(true);
  const videos = [
    {
      video: 'https://www.youtube.com/embed/luj8bpvRQ34?si=_wlxKTQAgthLC1Cs',
      title: "Mastering the Verb 'SER | Spanish For Beginners (Ep.2)",
    },
    {
      video: 'https://www.youtube.com/embed/z7c0IlnBr7k?si=LisUzvk3MuaxgiNw',
      title: "Mastering the Verb 'SER' | Spanish For Beginners (Ep.2.5)",
    },
    {
      video: 'https://www.youtube.com/embed/OhruBtJCWT4?si=xnHDTvp4t2T2wOaj',
      title: "Mastering the Verb 'SER' | Spanish For Beginners (Ep.3)",
    },
    {
      video: 'https://www.youtube.com/embed/Hpp0TO3LxeQ?si=URKOnPyNxgzFWXEy',
      title: "Mastering the Verb 'SER' | Spanish For Beginners (Ep.4)",
    },
    {
      video: 'https://www.youtube.com/embed/p2JLyK1dLpE?si=ieY4BeTa4DfZvmpS',
      title: "Mastering the Verb 'SER' | Spanish For Beginners (Ep.5)",
    },
    {
      video: 'https://www.youtube.com/embed/D95mAYdT9m4?si=ASeoJt-fV4t0umdA',
      title: "Mastering the Verb 'SER' | Spanish For Beginners (Ep.6)",
    },
  ];

  return (
    <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8'>
      <p className='text-center text-xl md:text-3xl font-semibold'>
        Master Vocabulary Effortlessly:{' '}
        <span className='text-[#2C6E49]'>Interactive Tutorial</span>
      </p>
      <p className='text-gray-500 text-center max-w-[55rem] my-5 mx-auto'>
        Learn language vocabulary effortlessly with our interactive tutorial
        video! Discover practical tips and engaging techniques to expand your
        word bank, retain words effectively, and kickstart your journey to
        fluency.
      </p>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
        {videos.map((video) => (
          <a href='' className='group block overflow-hidden'>
            <iframe
              className='w-full'
              width='560'
              height='315'
              src={video.video}
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              referrerpolicy='strict-origin-when-cross-origin'
              allowfullscreen></iframe>
            <div className='relative bg-white pt-3'>
              <h3 className='text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4'>
                {video.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
