const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online store with payment integration and admin dashboard.",
    tags: ["React", "JSX", "Tailwind","YUP","SweetAlert","Redux"],
    link: "#",
  },
  {
    id: 2,
    title: "Next Advisory",
    description: "A modern portfolio website with dark mode and animations.",
    tags: ["React", "JSX", "Tailwind","YUP","SweetAlert","Redux", "Algorithm AI","Metrial UI" , "Code pen" ,"C#",".NET","C++"],
    link: "https://next-advisory.vercel.app/",
    target: "_blank"
  },
  {
    id: 3,
    title: "Next Advisory",
    description: "A productivity app with real-time collaboration features.",
    tags: ["React", "Firebase", "Redux"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <>
      <section id="projects" className="py-20">
        <h2
          className="text-3xl font-bold mb-12 text-center gradient-text delay-[300ms] duration-[600ms] taos:translate-y-[100%] taos:opacity-0"
          data-taos-offset="300"
        >
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`
              bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow
              delay-[${300 + index * 100}ms] duration-[600ms] 
              taos:translate-y-[100%] taos:opacity-0
            `}
              data-taos-offset="300"
            >
              <div className="h-48 bg-gray-200 dark:bg-gray-700"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
