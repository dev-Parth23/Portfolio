import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import Products from "./Products";

function Projects() {
  const [showProjects, setShowProjects] = useState(false);
  useEffect(() => {
    document.body.style.overflow = showProjects ? "auto" : "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showProjects]);

  return (
    <div id="projects" className="relative w-full bg-[#E7E7E7] text-black">
      <div className=" top-0  w-full z-50">
        <div className="max-w-7xl mx-auto px-10 py-8 text-center">
          <h2 className="text-[40px] sm:text-[48px] md:text-[64px] font-normal mb-6 md:mb-10">
            My Projects
          </h2>

          <p className="text-zinc-700 font-normal text-base sm:text-lg md:text-xl leading-relaxed">
            A curated gallery of my work and technical expertise.
          </p>

          <div className="mt-20 flex items-center justify-center gap-4">
            <span className="w-80 h-[2px] bg-gray-600" />

            <motion.button
              aria-label="Toggle projects section"
              onClick={() => setShowProjects((prev) => !prev)}
              animate={{
                rotate: showProjects ? 180 : 0,
                y: showProjects ? 0 : [0, 6, 0],
              }}
              transition={{
                rotate: { duration: 0.3 },
                y: {
                  duration: 1.2,
                  repeat: showProjects ? 0 : Infinity,
                  ease: "easeInOut",
                },
              }}
              className="text-xl hover:text-gray-300 focus:outline-none"
            >
              <FaChevronDown />
            </motion.button>
             <span className="w-80 h-[2px] bg-gray-600" />
          </div>
        </div>
      </div>

      <div className="pt-[0]">
        <AnimatePresence mode="wait">
          {showProjects && (
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{
                duration: 0.6,
                ease: [0.76, 0, 0.24, 1],
              }}
            >
              <Products />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Projects;
