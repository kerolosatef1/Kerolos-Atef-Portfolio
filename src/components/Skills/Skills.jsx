import React from "react";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { FaBootstrap } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { TbBrandRedux } from "react-icons/tb";
import { TbBrandFramerMotion } from "react-icons/tb";
const skills = [
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "TypeScript", level: 75 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Bootstrap CSS", level: 90 },
  { name: "Integration APIs", level: 85 },
  { name: "Next JS", level: 70 },
];

export default function Skills() {
  return (
  <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-center gradient-text">My Skills</h2>

    <div className="flex flex-wrap items-center mr-12 ml-12 mb-10 justify-center gap-8 py-8 px-4 bg-gradient-to-br  rounded-xl shadow-2xl">
  
  <div className="flex flex-col items-center group">
    <FaReact
      className="text-6xl text-cyan-400 mb-2 animate-[spin_8s_linear_infinite] hover:animate-[spin_2s_linear_infinite] transition-all duration-300 ease-[cubic-bezier(0.65,0,0.35,1)] hover:scale-110 transform-gpu will-change-transform"
    />
    <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">React</p>
    </div>

  {/* Tailwind CSS */}
  <div className="flex flex-col items-center group">
    <RiTailwindCssFill
      className="text-6xl text-cyan-300 mb-2 animate-[spin_7s_linear_infinite] hover:animate-[spin_1.5s_linear_infinite] transition-all duration-300 ease-in-out hover:scale-110 transform-gpu"
    />
    <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Tailwind</p>
    </div>

  {/* JavaScript */}
  <div className="flex flex-col items-center group">
    <IoLogoJavascript
      className="text-6xl text-yellow-400 mb-2 animate- hover:animate-[spin_1.8s_linear_infinite] transition-all duration-300 ease-in-out hover:scale-110"
    />
    <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">JavaScript</p>
  </div>
  <div className="flex flex-col items-center group">
    <FaBootstrap
      className="text-6xl text-purple-500 mb-2  hover:animate-[spin_2.2s_linear_infinite] transition-all duration-300 ease-in-out hover:scale-110"
    />
    <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Bootstrap</p>
  </div>
  <div className="flex flex-col items-center group">
    <SiTypescript
      className="text-6xl text-blue-500 mb-2  hover:animate-[spin_1.3s_linear_infinite] transition-all duration-300 ease-in-out hover:scale-110"
    />
    <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">TypeScript</p>
  </div>

  {/* Redux */}
  <div className="flex flex-col items-center group">
    <TbBrandRedux
      className="text-6xl text-purple-400 mb-2 animate- hover:animate-[spin_1.7s_linear_infinite] transition-all duration-300 ease-in-out hover:scale-110"
    />
    <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Redux</p>
  </div>

  {/* Framer Motion */}
  <div className="flex flex-col items-center group">
    <TbBrandFramerMotion
      className="text-6xl text-pink-400 mb-2  hover:animate-[spin_1.6s_linear_infinite] transition-all duration-300 ease-in-out hover:scale-110"
    />
    <p className="text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">Framer Motion</p>
  </div>
</div>
      
      <div className="max-w-2xl text-white mx-auto space-y-6">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
              <div 
                className="bg-blue-500 h-2.5 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}