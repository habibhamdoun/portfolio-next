import Image from 'next/image';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Head from 'next/head';
import BouncingArrow from '../../components/BouncingArrow';

export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' href='./favicon.ico' />
      </Head>
      <Navbar />
      <Hero />

      <About id='About' />
    </>
  );
}
