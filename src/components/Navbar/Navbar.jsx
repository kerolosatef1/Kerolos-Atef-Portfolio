import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function StickyNavbar() {
  const [openNav, setOpenNav] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {['Projects', 'Skills', 'Contact'].map((item) => (
        <Typography
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-normal"
          key={item}
        >
          <Link
            to={`/${item.toLowerCase()}`}
            className="flex items-center relative group"
          >
            {item}
            <motion.span
              className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </Typography>
      ))}
    </ul>
  );

  return (
    <>
      {/* Scroll Indicator */}
      <motion.div
        style={{
          scaleX: useTransform(scrollY, [0, document.body.scrollHeight], [0, 1]),
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          transformOrigin: "0%",
          background: "linear-gradient(to right, #ec4899, #8b5cf6)",
          zIndex: 9998
        }}
      />

      {/* Animated Navbar */}
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: -100 }
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-9999"
      >
        <Navbar className="rounded-none px-4 py-2 lg:px-8 lg:py-4 translate-x-px backdrop-blur-md">
          <div className="flex items-center justify-between text-blue-gray-900">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Typography
                as={Link}
                to="/"
                className="mr-4 cursor-pointer py-1.5 font-bold text-xl"
              >
                Faragello
              </Typography>
            </motion.div>

            <div className="flex items-center gap-4">
              <div className="mr-4 hidden lg:block">{navList}</div>

              <div className="flex items-center gap-x-1">
                <Button
                  variant="text"
                  size="sm"
                  className="hidden lg:inline-block"
                  ripple={false}
                >
                  <span>Resume</span>
                </Button>

                <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  ripple={false}
                  onClick={() => setOpenNav(!openNav)}
                >
                  {openNav ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </IconButton>
              </div>
            </div>
          </div>

          <MobileNav open={openNav}>
            {navList}
            <div className="flex items-center gap-x-1">
              <Button fullWidth variant="text" size="sm">
                <span>Resume</span>
              </Button>
            </div>
          </MobileNav>
        </Navbar>
      </motion.div>
    </>
  );
}