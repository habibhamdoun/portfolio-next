'use client';
import React from 'react';
import arrow from '../../images/chevron-down-solid.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
const BouncingArrow = ({ location }) => {
  return (
    <div
      id='arrow'
      className='flex items-center justify-center h-16 w-16 bg-[#f2f2f2]'
    >
      <Link href={location} style={{ scrollBehavior: 'smooth' }}>
        <motion.div
          initial={{
            y: 0,
          }}
          animate={{
            y: [-20, 20, -20],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'reverse',
          }}
        >
          <Image src={arrow} className='w-8 h-8'></Image>
        </motion.div>
      </Link>
    </div>
  );
};

export default BouncingArrow;
