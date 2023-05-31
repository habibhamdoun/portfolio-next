'use client';
import React from 'react';
import TypingEffect from './TypingEffect';
import profile from '../../images/profile pic.jpeg';
import Image from 'next/image';
import BouncingArrow from './BouncingArrow';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-[#f2f2f2] h-[100vh] gap-8'>
      <div className='flex items-center justify-around gap-6 bg-[#f2f2f2] text-black p-5'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <TypingEffect />
          <motion.h2
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className='text-center text-[1.2rem]'
          >
            Passionate front-end developer crafting <br /> exceptional web
            experiences
          </motion.h2>
        </div>
        <motion.div
          initial={{ x: 1000 }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Image
            className='h-[600px] w-[600px] rounded-full'
            src={profile}
          ></Image>
        </motion.div>
      </div>
      <BouncingArrow location={'#about'} />
    </div>
  );
};

export default Hero;
