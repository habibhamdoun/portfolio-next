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
      <div className='flex items-center justify-center gap-4'>
        <a href='https://instagram.com/loyac.lebanon' target='_blank'>
          <Image className='w-6 h-6' src={IGicon}></Image>{' '}
        </a>
        <a href='mailto:loyac@gmail.com' target='_blank'>
          <Image className='w-6 h-6' src={emailIcon}></Image>
        </a>
      </div>

      <h4 className='text-base'>{position}</h4>
      <div className='flex max-[1000px]:flex-col justify-center items-start gap-8'>
        <motion.div
          className='flex flex-col justify-center items-center min-[1000px]:w-[33%]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className='bg-[#d6d5d5] w-[28vw] h-[8vh] rounded-t-[5px]  text-base px-4 py-3 max-[1000px]:w-[50vw] max-[600px]:w-[60vw] '>
            Assistant Trainer : HTML ,CSS ,JavaScript{'{11/2021-6/2022}'}
          </div>
          <Image
            className='w-[28vw] h-[50vh] aspect-square object-cover rounded-t-[5px] max-[1000px]:w-[50vw] max-[600px]:w-[60vw] max-[1000px]:h-[400px]'
            src={img1}
          ></Image>
          <p className='w-[28vw] rounded-b-lg h-[20vh] p-5 max-[1000px]:text-[0.8rem] max-[1000px]:text-xl bg-[#d0d0ce] text-black max-[1000px]:w-[50vw] max-[600px]:w-[60vw]'>
            {role1}
          </p>
        </motion.div>
        <motion.div
          className='flex flex-col justify-center items-center min-[1000px]:w-[33%]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className='bg-[#d6d5d5] w-[28vw] h-[8vh] rounded-t-[5px]  text-base px-4 py-3 max-[1000px]:w-[50vw] max-[600px]:w-[60vw] '>
            Co-Trainer : OOP in JavaScript ,ReactJS{'{6/2022-9/2022}'}
          </div>
          <Image
            className='w-[28vw] h-[50vh] aspect-square object-cover rounded-t-[5px] max-[1000px]:w-[50vw] max-[600px]:w-[60vw] max-[1000px]:h-[400px]'
            src={img2}
          ></Image>
          <p className='w-[28vw] rounded-b-lg h-[20vh] p-5 max-[1000px]:text-[0.8rem] max-[1000px]:text-xl bg-[#d0d0ce] text-black max-[1000px]:w-[50vw] max-[600px]:w-[60vw]'>
            {role2}
          </p>
        </motion.div>
        <motion.div
          className='flex flex-col justify-center items-center min-[1000px]:w-[33%]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className='bg-[#d6d5d5] w-[28vw] h-[8vh] rounded-t-[5px]  text-base px-4 py-3 max-[1000px]:w-[50vw] max-[600px]:w-[60vw] '>
            Trainer : HTML ,CSS ,JavaScript{'{6/2022-6/2023}'}
          </div>
          <Image
            className='w-[28vw] h-[50vh] aspect-square object-cover rounded-t-[5px] max-[1000px]:w-[50vw] max-[600px]:w-[60vw] max-[1000px]:h-[400px]'
            src={img3}
          ></Image>
          <p className='w-[28vw] rounded-b-lg h-[20vh] p-5 max-[1000px]:text-[0.8rem] max-[1000px]:text-xl bg-[#d0d0ce] text-black max-[1000px]:w-[50vw] max-[600px]:w-[60vw]'>
            {role3}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
