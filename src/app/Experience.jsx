'use client';
import React from 'react';
import IGicon from '../../images/instagram.svg';
import emailIcon from '../../images/email.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Experience = ({
  company,
  IG,
  email,
  position,
  role1,
  role2,
  role3,
  img1,
  img2,
  img3,
}) => {
  return (
    <div className='bg-[#f2f2f2] flex flex-col justify-center items-center text-black gap-5 py-2 my-3'>
      <h2 className='text-2xl font-bold text-black'>Experience</h2>
      <h3 className='text-xl font-bold text-black'>{company}</h3>
      <div className='flex items-center justify-center'>
        <Image className='w-4 h-4' src={IGicon}></Image>:{' '}
        <a href='https://instagram.com/loyac.lebanon' target='_blank'>
          {IG}
        </a>
      </div>
      <div className='flex items-center justify-center'>
        <Image className='w-4 h-4' src={emailIcon}></Image>:
        <a href='mailto:loyac@gmail.com' target='_blank'>
          {email}
        </a>
      </div>
      <h4 className='text-lg'>{position}</h4>
      <div className='flex justify-center items-center gap-2'>
        <motion.div
          className='flex flex-col justify-center items-center gap-4 '
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            className='w-[25vw] h-[50vh] aspect-square object-cover mb-2.5 rounded-[5px]'
            src={img1}
          ></Image>
          <p className='w-[70%]'>{role1}</p>
        </motion.div>
        <motion.div
          className='flex flex-col justify-center items-center w-1/2'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Image
            className='w-[25vw] h-[50vh] aspect-square  object-cover mb-2.5 rounded-[5px]'
            src={img2}
          ></Image>
          <p className='w-[70%]'> {role2}</p>
        </motion.div>
        <motion.div
          className='flex flex-col justify-center items-center w-1/2'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Image
            className='w-[25vw] h-[50vh] aspect-square  object-cover mb-2.5 rounded-[5px]'
            src={img3}
          ></Image>
          <p className='w-[70%]'>{role3}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
