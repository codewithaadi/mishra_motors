'use client';

import CustomButton from './CustomButton';
import Image from 'next/image';

const Intro = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('discover');

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="intro">
      <div className="flex-1 pt 36 padding-x">
        <h1 className="intro__title">Purchase a used vehicle -- with speed & convenience.</h1>
        <p className="intro__subtitle">Streamline you car buying experience at best price!!!</p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="intro__image-container">
        <div className="intro__image">
          <Image src="/dzire.png" alt="car" fill className="object-contain" />
        </div>

        <div className="intro__image-overlay" />
      </div>
    </div>
  );
};

export default Intro;
