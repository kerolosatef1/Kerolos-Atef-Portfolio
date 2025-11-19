import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaUniversity, FaAward } from 'react-icons/fa';
import ProfileImage from '../../assets/profileImage.jpg'
export default function About(){
    const [count, setCount] = useState(0);
    useEffect(() => {},[]);
    return <>
    <section id="about" className="py-16 ">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white ">
          About
        </h2>
        
        <div className="max-w-4xl mx-auto text-white  rounded-xl shadow-lg p-8">
          <div className="flex flex-col md:flex-row gap-8">
         
            <div className="w-full md:w-1/3 flex justify-center">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-500">
                <img 
                  src={ProfileImage}
                  alt="Profile Image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-bold mb-4 text-white dark:text-white">Hi  My Name Kerolos Atef </h3>
              <p className="text-white  mb-6">
            A front-end developer and React.js expert with experience building interactive web applications. I love turning ideas into reality through clean, efficient code.              </p>
              
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaUniversity className="text-blue-500 text-xl" />
                  <h4 className="text-xl font-semibold text-white dark:text-white">Background Education</h4>
                </div>
                
                <div className="pl-9">
                  <div className="mb-4">
                    <h5 className="font-medium text-white ">NAHDA UNIVERSITY</h5>
                    <p className="text-white ">COMPUTER SCIENCE</p>
                    <div className="flex items-center gap-2 mt-1">
                      <FaAward className="text-yellow-500" />
                      <span className="text-white ">Very Good [2.97]</span>
                    </div>
                    <p className="text-gray-500  text-sm mt-1">2025</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-white ">Front-End Devoloper</h5>
                    <p className="text-white ">Route Academy</p>
                    <p className="text-gray-500  text-sm mt-1">2024</p>
                  </div>
                </div>
              </div>
              
              
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <FaGraduationCap className="text-blue-500 text-xl" />
                  <h4 className="text-xl font-semibold text-white dark:text-white">Skills</h4>
                </div>
                
                <div className="flex flex-wrap gap-2 pl-9">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 rounded-full text-sm">React.js</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 rounded-full text-sm">HTML/CSS</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 rounded-full text-sm">Bootstrap</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 rounded-full text-sm">Framermotion</span>
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 rounded-full text-sm">High Chart</span>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    

   </>
}