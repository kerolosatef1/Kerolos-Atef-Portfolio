import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function VerticalScrollAnimation() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Animation values
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.7])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"])

  const sections = [
    { id: 1, title: "Section One", content: "First content section with scroll effects" },
    { id: 2, title: "Section Two", content: "Second content section with parallax" },
    { id: 3, title: "Section Three", content: "Third animated scroll section" },
    { id: 4, title: "Section Four", content: "Fourth content block with effects" },
    { id: 5, title: "Section Five", content: "Final scroll-animated section" }
  ]

  return (
    <div 
      ref={containerRef} 
      className="relative h-[400vh] bg-gray-50 dark:bg-gray-900 overflow-hidden"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y }}
          className="w-full max-w-4xl mx-auto space-y-12 px-4"
        >
          {sections.map((section) => (
            <motion.div
              key={section.id}
              style={{
                scale,
                opacity,
                transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1)"
              }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {section.title}
              </motion.h2>
              <motion.p 
                className="text-gray-600 dark:text-gray-300"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {section.content}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}