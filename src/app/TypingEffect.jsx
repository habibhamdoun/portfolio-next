'use client';
import { useEffect, useState } from 'react';

const TypingEffect = () => {
  const [index, setIndex] = useState(0);
  const text = '<Welcome> to my portfolio </Enjoy>';

  useEffect(() => {
    const typingEffect = document.getElementById('typing-effect');

    const type = () => {
      typingEffect.textContent = text.slice(0, index);
      setIndex((prevIndex) => prevIndex + 1);
    };

    const timer = setInterval(() => {
      if (index <= text.length) {
        type();
      } else {
        clearInterval(timer);
        setIndex((prevIndex) => prevIndex - 1);
      }
    }, 50);

    return () => {
      clearInterval(timer);
    };
  }, [index]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      const cursorElement = document.getElementById('typing-cursor');
      cursorElement.style.opacity =
        cursorElement.style.opacity === '0' ? '1' : '0';
    }, 250);

    return () => {
      clearInterval(cursorTimer);
    };
  }, []);

  return (
    <div>
      <span
        id='typing-effect'
        className='text-[2rem] font-bold whitespace-pre overflow-hidden max-[770px]:text-2xl max-[500px]:text-xl'
      />
      <span
        id='typing-cursor'
        className='text-[2.2rem] max-[770px]:text-2xl max-[500px]:text-xl'
      >
        |
      </span>
    </div>
  );
};

export default TypingEffect;
