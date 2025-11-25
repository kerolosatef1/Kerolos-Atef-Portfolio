import React from 'react';
import { PROJECTS } from '../../constants/projects';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-5">
      <h2
        className="text-3xl font-bold mb-12 text-center gradient-text delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0"
        data-taos-offset="300"
      >
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
            data-taos-offset="300"
          >
            <div className="relative h-48 overflow-hidden group">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.src = '/projects/project-placeholder.jpg';
                  e.target.className = 'w-full h-full object-contain p-4 bg-gray-100';
                }}
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target={project.target || "_blank"}
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
              >
                View Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}