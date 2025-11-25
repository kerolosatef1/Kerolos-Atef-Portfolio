import { motion } from 'framer-motion';
import Typewriter from '../Typewriter/Typewriter';
import Skills from '../Skills/Skills';
import { staggerContainer, fadeInUp } from '../../utils/animations';

export default function Home({ setCursorVariant = () => { } }) {
  return (
    <>
      <section className="min-h-[100vh] flex items-center px-4 md:px-8 lg:px-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto w-full"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl text-white sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Hi There! <h2 className='font-normal inline'>I'm <span className="gradient-text">Kerolos Atef</span></h2>
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl sm:text-3xl text-gray-300 dark:text-gray-400 mb-8"
            onMouseEnter={() => setCursorVariant("text")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            <Typewriter
              text={[
                "Front-End Developer",
                "React Framework Enthusiast",
                "JavaScript Expert",
              ]}
              speed={90}
              className="gradient-text"
              waitTime={2000}
              deleteSpeed={90}
              cursorChar="_"
            />
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-200 mb-8 max-w-2xl"
          >
            I build modern, responsive web applications with React, JavaScript, and TypeScript.
            Passionate about creating seamless user experiences with clean, efficient code.
          </motion.p>
        </motion.div>
      </section>

      <Skills />
    </>
  );
}