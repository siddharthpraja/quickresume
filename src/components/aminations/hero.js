import React from 'react';
import Lottie from 'lottie-react';
import animationData from './anim/hero.json'; // Ensure the path is correct

const HeroAnimation = () => {
  return (
    <div className="w-full sm:w-3/4 md:w-[70vh] lg:w-[50vh] xl:w-[80vh]">
      <Lottie animationData={animationData} style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default HeroAnimation;
