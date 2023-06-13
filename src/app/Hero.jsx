'use client';
import React from 'react';
import TypingEffect from './TypingEffect';
import profile from '../../images/profile pic.jpeg';
import Image from 'next/image';
import BouncingArrow from './BouncingArrow';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#f2f2f2] h-[95vh] gap-8'>
      <div className='flex flex-col items-center justify-around gap-6 bg-[#f2f2f2] text-black p-5'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <TypingEffect />
          <motion.h2
            initial={{ x: -1500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className='text-center text-[1.2rem] max-[770px]:text-lg max-[500px]:text-base'
          >
            Passionate front-end developer crafting <br /> exceptional web
            experiences
          </motion.h2>
        </div>
        <motion.div
          initial={{ x: 1500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Image
            className='shadow-[12px_12px_5px_0px_rgba(191,177,177,0.75)] relative h-[600px] w-[600px] max-[770px]:h-[50vw] max-[770px]:w-[50vw]  rounded-full'
            src={profile}
          ></Image>
        </motion.div>
      </div>
      <BouncingArrow location={'#about'} />
    </div>
  );
};

export default Hero;
