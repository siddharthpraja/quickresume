import React from 'react';
import Lottie from 'lottie-react';
import animationData from './anim/hero.json'; // Make sure to replace with the correct path to your JSON file

const HeroAnimation = () => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <Lottie animationData={animationData} />
    </div>
  );
};

export default HeroAnimation;
