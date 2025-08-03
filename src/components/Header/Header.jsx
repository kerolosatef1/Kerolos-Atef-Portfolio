import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export default function Header({ darkMode, setDarkMode }) {
  const [hidden, setHidden] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const navItems = ['About','Projects', 'Skills',  'Certificate','Contact'];
  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-40  backdrop-blur-md shadow-md"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/" className="text-2xl font-bold gradient-text block">
                Faragello
              </Link>
            </motion.div>
            
            {/* قائمة سطح المكتب - تظهر فقط على الشاشات الكبيرة */}
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative"
                >
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className=" text-white px-3 py-2 text-xl block"
                  >
                    {item}
                  </Link>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </nav>
            <div className="flex items-center space-x-4">
              <Link
                to="/resume"
                className="hidden md:block px-4 py-2 bg-blue-500 text-white rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                Resume
              </Link>

              {/* زر القائمة المتنقلة - يظهر فقط على الشاشات الصغيرة */}
              <motion.button
                className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={toggleMobileMenu}
                whileTap={{ scale: 0.9 }}
                aria-label="Toggle menu"
              >
                <div className="w-6 flex flex-col items-center">
                  <motion.span
                    className="block h-0.5 w-6 bg-gray-800 dark:bg-white mb-1.5"
                    animate={{
                      rotate: mobileMenuOpen ? 45 : 0,
                      y: mobileMenuOpen ? 7 : 0
                    }}
                  />
                  <motion.span
                    className="block h-0.5 w-6 bg-gray-800 dark:bg-white mb-1.5"
                    animate={{
                      opacity: mobileMenuOpen ? 0 : 1
                    }}
                  />
                  <motion.span
                    className="block h-0.5 w-6 bg-gray-800 dark:bg-white"
                    animate={{
                      rotate: mobileMenuOpen ? -45 : 0,
                      y: mobileMenuOpen ? -7 : 0
                    }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* القائمة المتنقلة للهواتف */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-gray-800 shadow-lg md:hidden"
          >
            <ul className="py-4 px-6 space-y-4">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="block py-2 text-gray-800 dark:text-white border-b border-gray-200 dark:border-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <button
                  className="w-full py-2 text-left bg-blue-500 text-white rounded-md px-4"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    // إضافة أي وظيفة لزر Resume هنا
                  }}
                >
                  Resume
                </button>
              </motion.li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}