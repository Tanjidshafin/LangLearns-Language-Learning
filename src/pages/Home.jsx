import React from 'react';
import Slider from '../components/Slider';
import About from '../components/About';
import HomeLessons from '../components/HomeLessons';
import Success from '../components/Success';
import Review from '../components/Review';

const Home = () => {
  return (
    <div>
      <Slider />
      <HomeLessons/>
      <About/>
      <Success/>
      <Review/>
      <p></p>
    </div>
  );
};

export default Home;
