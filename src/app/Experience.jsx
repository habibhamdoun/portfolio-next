'use client';
import React, { useState } from 'react';
import IGicon from '../../images/instagram.svg';
import emailIcon from '../../images/email.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import arrow from '../../images/circle-arrow-down-solid.svg';

const Experience = ({
  company,
  IG,
  email,
  position,
  role1,
  timeStamp1,
  role2,
  timeStamp2,
  role3,
  timeStamp3,
  img1,
  img2,
  img3,
}) => {
  const [contact, setContact] = useState(false);
  return (
    <div className='bg-[#f2f2f2] flex flex-col justify-center items-center text-black gap-5 py-2 my-3 transition-all'>
      <h2 className='text-2xl font-bold text-black'>Experience</h2>
      <div className='flex items-baseline justify-center gap-2'>
        <h3 className='text-xl font-bold text-black'>{company}</h3>
        <Image
          onClick={() => setContact((prevState) => !prevState)}
          src={arrow}
          className={
            contact
              ? 'w-3 h-3 rotate-180 transition-all'
              : 'w-3 h-3 rotate-0 transition-all'
          }
        ></Image>
      </div>
      {contact && (
        <motion.div
          className='flex flex-col items-center justify-center gap-4'
          initial={{ translateY: -10, opacity: 0 }}
          animate={{
            translateY: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
        >
          <a
            href='https://instagram.com/loyac.lebanon'
            target='_blank'
            className='flex items-center justify-center justify-center gap-2'
          >
            <Image className='w-6 h-6' src={IGicon}></Image> loyac.lebanon
          </a>
          <a
            href='mailto:loyaclebanon@loyac.org'
            target='_blank'
            className='flex items-center justify-center justify-center gap-2'
          >
            <Image className='w-6 h-6' src={emailIcon}></Image>
            loyaclebanon@loyac.org
          </a>
        </motion.div>
      )}
      <div className='flex max-[1000px]:flex-col justify-center items-start gap-8'>
        <motion.div
          className='flex flex-col justify-center items-center min-[1000px]:w-[33%]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className='bg-[#d6d5d5] w-[28vw] h-[8vh] rounded-t-[5px]  text-base px-4 py-3 max-[1000px]:w-[50vw] max-[600px]:w-[60vw] flex items-center justify-center '>
            {timeStamp1}
          </div>
          <Image
            className='w-[28vw] h-[50vh] aspect-square object-cover max-[1000px]:w-[50vw] max-[600px]:w-[60vw] max-[1000px]:h-[400px]'
            src={img1}
          ></Image>
          <p className='w-[28vw] rounded-b-lg h-[20vh] p-5 text-lg max-[1000px]:text-xl bg-[#d0d0ce] text-black max-[1000px]:w-[50vw] max-[600px]:w-[60vw]'>
            {role1}
          </p>
        </motion.div>
        <motion.div
          className='flex flex-col justify-center items-center min-[1000px]:w-[33%]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className='bg-[#d6d5d5] w-[28vw] h-[8vh] rounded-t-[5px]  text-base px-4 py-3 max-[1000px]:w-[50vw] max-[600px]:w-[60vw] flex items-center justify-center '>
            {timeStamp2}
          </div>
          <Image
            className='w-[28vw] h-[50vh] aspect-square object-cover max-[1000px]:w-[50vw] max-[600px]:w-[60vw] max-[1000px]:h-[400px]'
            src={img2}
          ></Image>
          <p className='w-[28vw] rounded-b-lg h-[20vh] p-5 text-lg max-[1000px]:text-xl bg-[#d0d0ce] text-black max-[1000px]:w-[50vw] max-[600px]:w-[60vw]'>
            {role2}
          </p>
        </motion.div>
        <motion.div
          className='flex flex-col justify-center items-center min-[1000px]:w-[33%]'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className='bg-[#d6d5d5] w-[28vw] h-[8vh] rounded-t-[5px]  text-base px-4 py-3 max-[1000px]:w-[50vw] max-[600px]:w-[60vw] flex items-center justify-center '>
            {timeStamp3}
          </div>
          <Image
            className='w-[28vw] h-[50vh] aspect-square object-cover max-[1000px]:w-[50vw] max-[600px]:w-[60vw] max-[1000px]:h-[400px]'
            src={img3}
          ></Image>
          <p className='w-[28vw] rounded-b-lg h-[20vh] p-5 text-lg max-[1000px]:text-xl bg-[#d0d0ce] text-black max-[1000px]:w-[50vw] max-[600px]:w-[60vw]'>
            {role3}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
