import { motion } from 'framer-motion';
import Typewriter from './../Typewriter/Typewriter';
import ParticlesBackground from '../ParticlesBackground/ParticlesBackground';

export default function Hero({ setCursorVariant = () => {} }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return <>

  
    <section className="min-h-[100vh] ml-16 flex items-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-2xl"
      >
        <motion.h1 
          variants={item}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          Hi There! <h2 className='font-normal'>I'm <span className="gradient-text">Kerolos Atef</span> </h2>
       
        </motion.h1>
        
        <motion.h2 
          variants={item}
          className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-400 mb-8"
          onMouseEnter={() => setCursorVariant("text")}
          onMouseLeave={() => setCursorVariant("default")}
        >
          <Typewriter
            text={[
                "Front-End Developer",
                "React Framework Enthusiast With JavaScript",
            ]}
            speed={90}
            className="gradient-text"
            waitTime={2000}
            deleteSpeed={90}
            cursorChar="_"
          />
        </motion.h2>
        
       
      </motion.div>
    </section>
    <div>
         <motion.p 
          variants={item}
          className="text-lg mb-8 text-gray-700 dark:text-gray-300"
        >
          I build exceptional digital experiences with modern technologies.
          Currently focused on creating accessible, human-centered products.
        </motion.p>
        
        <motion.div 
          variants={item}
          className="flex space-x-4"
        >
          <a 
            href="#contact" 
            className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onMouseEnter={() => setCursorVariant("link")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            View Projects
          </a>
        </motion.div>
    </div>
  </>
}