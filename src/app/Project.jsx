'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import githubOutline from '../../images/github-outline-white.svg';

const Project = ({
  order,
  title,
  content,
  moreContent,
  websiteLink,
  ghlink,
  img1,
  img2,
  img3,
  img4,
  scrollRef,
  LiveWebsite,
}) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <motion.div
      className='bg-[#f1f1f1] text-black text-center flex flex-col justify-center items-center p-5 my-2 '
      initial={{ opacity: 0, translateY: 300 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true, root: scrollRef }}
      transition={{ duration: 0.5 }}
    >
      <h2 className='font-bold text-[1.4rem]'>{title}</h2>
      <p className='w-[40vw]'>
        {content} {readMore && moreContent}
        <button
          onClick={() => setReadMore((prev) => !prev)}
          className={'bg-transparent border-0 italic underline px-3'}
        >
          {readMore ? 'Read less...' : 'Read more...'}
        </button>
      </p>
      <div className='flex justify-center items-center gap-5 p-3 max-[770px]:flex-col'>
        <Image
          className='aspect-square w-full max-h-[200px] object-cover mb-2.5 rounded-[5px] max-[770px]:h-[300px] max-[770px]:w-[300px]'
          src={img1}
        ></Image>
        <Image
          className='aspect-square w-full max-h-[200px] object-cover mb-2.5 rounded-[5px] max-[770px]:h-[300px] max-[770px]:w-[300px]'
          src={img2}
        ></Image>
        <Image
          className='aspect-square w-full max-h-[200px] object-cover mb-2.5 rounded-[5px] max-[770px]:h-[300px] max-[770px]:w-[300px]'
          src={img3}
        ></Image>
        <Image
          className='aspect-square w-full max-h-[200px] object-cover mb-2.5 rounded-[5px] max-[770px]:h-[300px] max-[770px]:w-[300px]'
          src={img4}
        ></Image>
      </div>
      <div className='flex justify-center gap-8'>
        <a
          className='bg-gray-400 text-gray-100 py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300 ease-in-out max-[700px]:text-[0.8rem]'
          href={websiteLink}
          target='_blank'
        >
          {LiveWebsite}
        </a>
        <a
          className='bg-gray-400 text-gray-100 py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300 ease-in-out max-[700px]:text-[0.8rem]'
          href={ghlink}
          target='_blank'
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
