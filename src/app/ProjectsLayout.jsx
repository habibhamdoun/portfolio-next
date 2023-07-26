'use client';
import React, { useState } from 'react';
import Project from './Project';
import dot from '../../images/dot.svg';
import filledDot from '../../images/filledDot.svg';
import Image from 'next/image';
import arrow from '../../images/chevron-down-solid.svg';
import project1i1 from '../../images/movies-haven-hero.png';
import project1i2 from '../../images/movies-haven.vercel-hero2.png';
import project1i3 from '../../images/movies-haven-single-movie-display.png';
import project1i4 from '../../images/movies-haven-show-display.png';

import project2i1 from '../../images/fmc-hero-display.png';
import project2i2 from '../../images/fmc-arabic-whyus.png';
import project2i3 from '../../images/fmc-clients-display.png';
import project2i4 from '../../images/fmc-quote-display.png';

import project3i1 from '../../images/minesweeper-hero.png';
import project3i2 from '../../images/minesweeper-tutorial.png';
import project3i3 from '../../images/minesweeper-mediumlvl.png';
import project3i4 from '../../images/minesweeper-hardlvl.png';
const ProjectsLayout = () => {
  const [page, setPage] = useState(1);
  const [orientation, setOrientation] = useState('right');
  const projects = [
    {
      id: 1,
      title: 'Movies Haven',
      content:
        'Discover and explore a dynamic movie showcase powered by Next.js and the TMDB API. Experience a constantly updated collection of movies, featuring the latest releases, popular films, and timeless classics.',
      moreContent:
        'With automatic updates and seamless navigation, this website brings the world of cinema to your fingertips.',
      img1: project1i1,
      img2: project1i2,
      img3: project1i3,
      img4: project1i4,
      LiveWebsite: 'Live website',
      websiteLink: 'https://movies-haven.vercel.app/',
      ghlink: 'https://github.com/habibhamdoun/moviesHaven',
    },
    {
      id: 2,
      title: 'FMC supplychain',
      content:
        "Welcome to our supply chain company website! Powered by React.js and Firebase, we've developed a cutting-edge platform for efficient supply chain management.",
      moreContent:
        ' Engage in real-time communication through our interactive messaging system, connecting clients and administrators seamlessly. With language change functionality, our website caters to diverse audiences across the globe. Experience the convenience of our secure admin panel, empowering administrators to oversee operations and ensure smooth workflows. Join us on this digital transformation journey as we revolutionize supply chain collaboration and enhance business efficiency.',
      img1: project2i1,
      img2: project2i2,
      img3: project2i3,
      img4: project2i4,
      LiveWebsite: 'Live website',
      websiteLink: 'https://fmc-supplychain.netlify.app',
      ghlink: 'https://github.com/habibhamdoun/fmc-React',
    },
    {
      id: 3,
      title: 'MineSweeper',
      content:
        'Welcome to the world of Minesweeper! Immerse yourself in this thrilling game, personally crafted from scratch using vanilla HTML, CSS, and JavaScript. With a unique comic book theme, the game offers a visually engaging experience.',
      moreContent:
        "Discover the excitement of uncovering tiles while avoiding hidden mines, all powered by meticulousl handcrafted logic. If you're new to Minesweeper, don't worry! We provide a helpful tutorial to guide you through the game's mechanics. Choose from three levels of difficulty to match your skills and challenge yourself. Get ready for an addictive adventure as you delve into the world of Minesweeper!",
      img1: project3i1,
      img2: project3i2,
      img3: project3i3,
      img4: project3i4,
      LiveWebsite: 'Live website',
      websiteLink: 'https://jsweeper.netlify.app/',
      ghlink: 'https://github.com/habibhamdoun/minesweeper',
    },
  ];
  function incrementPage() {
    if (page == projects.length - 1) setPage(0);
    else {
      setPage((prevPage) => prevPage + 1);
    }
    setOrientation('right');
    console.log(projects.length);
    console.log(page);
  }
  function decrementPage() {
    if (page == 0) setPage(projects.length - 1);
    else {
      setPage((prevPage) => prevPage - 1);
    }
    setOrientation('left');
    console.log(projects.length);
    console.log(page);
  }
  return (
    <>
      <div className='flex items-center justify-around bg-[#f1f1f1]'>
        <div onClick={() => decrementPage()}>
          <Image
            alt='image'
            className='rotate-90 w-12 h-12'
            src={arrow}
          ></Image>
        </div>
        <Project
          key={page}
          id={projects[page].id}
          title={projects[page].title}
          content={projects[page].content}
          moreContent={
            "Discover the excitement of uncovering tiles while avoiding hidden mines, all powered by meticulousl handcrafted logic. If you're new to Minesweeper, don't worry! We provide a helpful tutorial to guide you through the game's mechanics. Choose from three levels of difficulty to match your skills and challenge yourself. Get ready for an addictive adventure as you delve into the world of Minesweeper!"
          }
          img1={projects[page].img1}
          img2={projects[page].img2}
          img3={projects[page].img3}
          img4={projects[page].img4}
          LiveWebsite={projects[page].LiveWebsite}
          websiteLink={projects[page].websiteLink}
          ghlink={projects[page].ghlink}
          orientation={orientation}
        />

        <div onClick={() => incrementPage()}>
          <Image
            alt='image'
            className='rotate-[270deg] w-12 h-12'
            src={arrow}
          ></Image>
        </div>
      </div>
      <div className='w-[100vw] flex justify-center bg-[#f1f1f1] py-3'>
        <Image
          onClick={() => {
            if (page > 0) setOrientation('left');
            else setOrientation('right');
            setPage(0);
          }}
          className='w-[10px] h-[10px]'
          src={page == 0 ? filledDot : dot}
        ></Image>
        <Image
          onClick={() => {
            if (page > 1) setOrientation('left');
            else setOrientation('right');
            setPage(1);
          }}
          className='w-[10px] h-[10px]'
          src={page == 1 ? filledDot : dot}
        ></Image>
        <Image
          onClick={() => {
            if (page > 2) setOrientation('left');
            else setOrientation('right');
            setPage(2);
          }}
          className='w-[10px] h-[10px]'
          src={page == 2 ? filledDot : dot}
        ></Image>
      </div>
    </>
  );
};

export default ProjectsLayout;
