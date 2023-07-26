import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Card = ({
  title,
  text,
  img,
  isHighlighted,
  id,
  onHover,
  animationDelay,
  isMobile,
}) => {
  return (
    <motion.div
      onHoverStart={(e) => (isMobile ? ' ' : onHover(e))}
      id={id}
      className={
        'flex flex-col justify-center items-center min-[1000px]:w-[33%] shadow-2xl'
      }
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={
        !isMobile ? { scale: isHighlighted == id ? 1.05 : 0.85 } : { scale: 1 }
      }
      transition={{
        opacity: { delay: animationDelay },
      }}
      whileHover={{ scale: isMobile ? 1 : 1.1 }}
    >
      <div
        className={
          'bg-[#d6d5d5] w-[28vw] h-[8vh] rounded-t-[5px] max-[1000px]:text-sm font-semibold text-lg px-4 py-3 max-[1000px]:w-[50vw] max-[600px]:w-[60vw] flex items-center justify-center'
        }
      >
        {title}
      </div>
      <Image
        className='w-[28vw] h-[50vh] aspect-square object-cover max-[1000px]:w-[50vw] max-[600px]:w-[60vw] max-[1000px]:h-[400px]'
        src={img}
      ></Image>
      <p className='w-[28vw] max-[1000px]:h-fit rounded-b-lg h-[15vh] p-5 max-[1000px]:text-sm text-lg max-[1000px]:text-xl bg-[#d0d0ce] text-black max-[1000px]:w-[50vw] max-[600px]:w-[60vw] max-[600px]:text-base'>
        {text}
      </p>
    </motion.div>
  );
};

export default Card;
