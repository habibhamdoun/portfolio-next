import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Project from './Project';
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

import Experience from './Experience';

import exp1i1 from '../../images/Image.jpeg';
import exp1i2 from '../../images/experienceimage2.jpg';
import exp1i3 from '../../images/experienceimage3.jpg';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About id='About' />
      <Project
        order={1}
        title={'Movies Haven'}
        content={
          'Discover and explore a dynamic movie showcase powered by Next.js and the TMDB API. Experience a constantly updated collection of movies, featuring the latest releases, popular films, and timeless classics.'
        }
        moreContent={
          'With automatic updates and seamless navigation, this website brings the world of cinema to your fingertips.'
        }
        img1={project1i1}
        img2={project1i2}
        img3={project1i3}
        img4={project1i4}
        LiveWebsite={'Live website'}
        websiteLink={'https://movies-haven.vercel.app/'}
        ghlink={'https://github.com/habibhamdoun/moviesHaven'}
      />
      <Project
        order={2}
        title={'FMC supplychain'}
        content={
          "Welcome to our supply chain company website! Powered by React.js and Firebase, we've developed a cutting-edge platform for efficient supply chain management."
        }
        moreContent={
          ' Engage in real-time communication through our interactive messaging system, connecting clients and administrators seamlessly. With language change functionality, our website caters to diverse audiences across the globe. Experience the convenience of our secure admin panel, empowering administrators to oversee operations and ensure smooth workflows. Join us on this digital transformation journey as we revolutionize supply chain collaboration and enhance business efficiency.'
        }
        img1={project2i1}
        img2={project2i2}
        img3={project2i3}
        img4={project2i4}
        LiveWebsite={'Live website'}
        websiteLink={'https://fmc-supplychain.netlify.app'}
        ghlink={'https://github.com/habibhamdoun/fmc-React'}
      />
      <Project
        order={3}
        title={'MineSweeper'}
        content={
          'Welcome to the world of Minesweeper! Immerse yourself in this thrilling game, personally crafted from scratch using vanilla HTML, CSS, and JavaScript. With a unique comic book theme, the game offers a visually engaging experience.'
        }
        moreContent={
          "Discover the excitement of uncovering tiles while avoiding hidden mines, all powered by meticulousl handcrafted logic. If you're new to Minesweeper, don't worry! We provide a helpful tutorial to guide you through the game's mechanics. Choose from three levels of difficulty to match your skills and challenge yourself. Get ready for an addictive adventure as you delve into the world of Minesweeper!"
        }
        img1={project3i1}
        img2={project3i2}
        img3={project3i3}
        img4={project3i4}
        LiveWebsite={'Live website'}
        websiteLink={'https://jsweeper.netlify.app/'}
        ghlink={'https://github.com/habibhamdoun/minesweeper'}
      />
      <Experience
        company={'LOYAC Lebanon'}
        IG={'loyac.lebanon'}
        email={'loyac@gmail.com'}
        position={'Trainer'}
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
