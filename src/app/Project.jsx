'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import githubOutline from '../../images/github-outline-white.svg';

const Project = ({
  order,
  title,
  content,
  websiteLink,
  ghlink,
  img1,
  img2,
  img3,
  img4,
}) => {
  return (
    <motion.div
      className='bg-[#f1f1f1] text-black text-center flex flex-col justify-center items-center p-5 my-2'
      initial={order % 2 == 0 ? { x: -1000 } : { x: 1000 }}
      whileInView={{ x: 0 }}
    >
      <h2 className='font-bold text-[1.4rem]'>{title}</h2>
      <p className='w-[40vw]'>{content}</p>
      <div className='flex justify-center items-center gap-5 p-3'>
        <Image
          className='aspect-square w-full max-h-[200px] object-cover mb-2.5 rounded-[5px]'
          src={img1}
        ></Image>
        <Image
          className='aspect-square w-full max-h-[200px] object-cover mb-2.5 rounded-[5px]'
          src={img2}
        ></Image>
        <Image
          className='aspect-square w-full max-h-[200px] object-cover mb-2.5 rounded-[5px]'
          src={img3}
        ></Image>
        <Image
          className='aspect-square w-full max-h-[200px] object-cover mb-2.5 rounded-[5px]'
          src={img4}
        ></Image>
      </div>
      <div className='flex justify-center gap-8'>
        <a
          className='bg-gray-400 text-gray-100 py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300 ease-in-out'
          href={websiteLink}
        >
          Live website
        </a>
        <a
          className='bg-gray-400 text-gray-100 py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300 ease-in-out'
          href={ghlink}
        >
          <div className='flex items-center gap-2'>
            {' '}
            <Image className='w-4 h-4 ' src={githubOutline}></Image> Github
            repository
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default Project;
