import React from 'react';
import ParticlesBackground from './ParticlesBackground';
import Navbar from './Navbar';
import Herodom from './Herodom';
import Hero from './../Hero/Hero';
const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <ParticlesBackground />
      <Navbar />
      
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Herodom 
          title="Research + Process + Experience"
          subtitle="We ensure businesses reach their full potential..."
          btn="VIEW OUR SOLUTIONS"
        />
     <Hero />
      </div>
    </div>
  );
};

export default Home;