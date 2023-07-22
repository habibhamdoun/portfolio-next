'use client';
import React, { useEffect, useState } from 'react';
import IGicon from '../../images/instagram.svg';
import emailIcon from '../../images/email.svg';
import Image from 'next/image';
import { motion } from 'framer-motion';
import arrow from '../../images/circle-arrow-down-solid.svg';
import Card from './Card';

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
  const [isHighlighted, setIsHighlighted] = useState(2);
  function toggleHighlight(e) {
    setIsHighlighted(e.target.id);
  }
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.screen.width < 768) {
      setIsMobile(true);
    }
  }, []);
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
        <Card
          title={timeStamp1}
          text={role1}
          img={img1}
          animationDelay={0.2}
          id={1}
          isHighlighted={isHighlighted}
          onHover={toggleHighlight}
          isMobile={isMobile}
        />
        <Card
          title={timeStamp2}
          text={role2}
          img={img2}
          animationDelay={0.4}
          id={2}
          isHighlighted={isHighlighted}
          onHover={toggleHighlight}
          isMobile={isMobile}
        />
        <Card
          title={timeStamp3}
          text={role3}
          img={img3}
          animationDelay={0.6}
          id={3}
          isHighlighted={isHighlighted}
          onHover={toggleHighlight}
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};

export default Experience;
