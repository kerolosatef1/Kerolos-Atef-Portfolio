import { styles } from "../../../style";
import ComputersCanvas from "../Canvas/Computer";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Tech from "../Tech/Tech";
import Work from "../Works/Work";
import FeedBack from "../Feedback/FeedBack";
import Contact from "../Contact/Contact";
import StarsCanvas from "../Canvas/Stars";

const Hero = () => {
  return (
    <>
      <section className={`relative w-full h-screen mx-auto`}>
        <div
          className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
        >
          <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
            <div className='w-1 sm:h-80 h-40 violet-gradient' />
          </div>

          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915EFF]'>Kerolos Atef</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I develop 3D visuals, user <br className='sm:block hidden' />
              interfaces and web applications
            </p>
          </div>
        </div>

        <ComputersCanvas />

      </section>

      {/* Sections with IDs for scroll */}
      
          <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="tech">
        <Tech />
      </div>
      <div id="work">
        <Work />
      </div>
      
      <div className='relative z-0' id="contact">
        <Contact />
        <StarsCanvas />
      </div>
      
    
    </>
  );
};

export default Hero;
