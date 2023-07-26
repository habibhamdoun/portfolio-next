import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Project from './Project';

import Experience from './Experience';

import exp1i1 from '../../images/Image.jpeg';
import exp1i2 from '../../images/experienceimage2.jpg';
import exp1i3 from '../../images/experienceimage3.jpg';
import ProjectsLayout from './ProjectsLayout';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About id='About' />
      <ProjectsLayout />
      <Experience
        company={'LOYAC Lebanon'}
        IG={'loyac.lebanon'}
        email={'loyac@gmail.com'}
        timeStamp1={
          'Assistant Trainer : HTML ,CSS ,JavaScript {11/2021-6/2022}'
        }
        timeStamp2={'Co-Trainer : OOP in JavaScript ,ReactJS {6/2022-9/2022}'}
        timeStamp3={'Trainer : HTML ,CSS ,JavaScript {6/2022-6/2023}'}
        img1={exp1i1}
        img2={exp1i2}
        img3={exp1i3}
        role1={
          'Conducted training sessions for multiple bootcamps specializing in beginner level front-end development using HTML, CSS, and JavaScript.'
        }
        role2={
          'Delivered comprehensive lectures and hands-on exercises to ensure a solid understanding of core concepts'
        }
        role3={
          'Provided guidance and support to students in building their first web projects.'
        }
      />
    </>
  );
}
