'use client';
import React, { useState } from 'react';
import email from '../../images/email.svg';
import phone from '../../images/phone.svg';
import github from '../../images/github.svg';
import githubOutline from '../../images/github-outline.svg';
import linkedin from '../../images/linkedin.svg';
import linkedinOutline from '../../images/linkedin-outline.svg';
import Image from 'next/image';

const About = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <div
        className='my-2 p-5 bg-[#f2f2f2]  text-black flex flex-col justify-center items-center gap-3'
        id='about'
      >
        <h2 className='text-lg font-bold'>About Me</h2>
        <h3 className='font-bold'>Hi, I'm Habib Hamdoun</h3>
        <p className='w-[60%] text-[1.2rem] p-2 text-center max-[770px]:text-[1rem] max-[400px]:text-[0.8rem]'>
          I am a highly motivated and detail-oriented computer engineering
          student with a genuine passion for front-end development. With a solid
          foundation in HTML, CSS, Tailwind, and JavaScript, I am skilled in
          crafting visually appealing and user-friendly websites. Additionally,
          my expertise extends to React.js and Next.js, enabling me to create
          dynamic and interactive web applications. In my journey as a
          developer, I have developed a strong grasp of Object-Oriented
          Programming using Java, which has enhanced my problem-solving
          abilities and{' '}
          {readMore && (
            <span>
              equipped me with the skills to build robust and scalable
              applications. I am constantly seeking opportunities to expand my
              knowledge and stay up-to-date with the latest advancements in web
              development. What sets me apart is not just my technical expertise
              but also my exceptional time management skills and ambition to
              continually upgrade my skills. I thrive in collaborative
              environments, where I can actively contribute my ideas and
              leverage my effective communication skills. With my virtuous
              leadership qualities, I foster a positive work environment that
              promotes teamwork and brings out the best in everyone.
            </span>
          )}
          <button
            onClick={() => setReadMore((prev) => !prev)}
            className={'bg-transparent border-0 italic underline px-3'}
          >
            {readMore ? 'Read less...' : 'Read more...'}
          </button>
        </p>
        <div className='flex items-center justify-center gap-1'>
          <Image className='w-4 h-4' src={email}></Image>:
          habibhamdoun@gmail.com
        </div>
        <div className='flex items-center justify-center gap-1'>
          <Image className='w-4 h-4' src={phone}></Image>: +961 76 164 482
        </div>
        <div className='flex items-center justify-center gap-5 p-4'>
          <div onMouseOver={() => setHover1((prev) => !prev)}>
            <a href='https://github.com/habibhamdoun' target='_blank'>
              <Image
                className='w-6 h-6'
                src={hover1 ? github : githubOutline}
              ></Image>
            </a>
          </div>
          <div onMouseOver={() => setHover2((prev) => !prev)}>
            <a href='https://www.linkedin.com/in/habibhamdoun/' target='_blank'>
              <Image
                className='w-6 h-6'
                src={hover2 ? linkedin : linkedinOutline}
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
