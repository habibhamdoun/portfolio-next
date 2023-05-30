import React from 'react';
import TypingEffect from '../../components/TypingEffect';
import profile from '../../images/profile pic.jpeg';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#f2f2f2] h-[100vh] gap-8'>
      <div className='flex items-center justify-around gap-6 bg-[#f2f2f2] text-black p-5'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <TypingEffect />
          <h2 className='text-center text-[1.2rem]'>
            Passionate front-end developer crafting <br /> exceptional web
            experiences
          </h2>
        </div>
        <Image
          className='h-[600px] w-[600px] rounded-full'
          src={profile}
        ></Image>
      </div>
    </div>
  );
};

export default Hero;
