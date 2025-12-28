import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Journey() {
  const experiences = [
    {
      company: "FusionHawk",
      companyLink: "https://www.fusionhawk.io/",
      role: "Software Engineer",
      description:
        "Architecting full-stack SaaS automations and CRM ecosystems using Node.js and React to drive enterprise-level productivity.",
      period: "Oct 2025 – Present",
    },
    {
      company: "CRM Masters",
      companyLink: "https://crm-masters.com/",
      role: "Software Developer",
      description:
        "Building high-performance user interfaces and real-time data visualizations to deliver actionable business insights.",
      period: "Apr 2025 – Oct 2025",
    },
    {
      company: "Softkingo Technologies",
      companyLink: "https://www.softkingo.com/",
      role: "React.js Developer Intern",
      description:
        "Developing responsive, high-conversion web interfaces that increased user engagement and sales by 200%.",
      period: "Jul 2024 – Oct 2024",
    },
  ];

  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="journey"
      data-scroll-section
      className="flex flex-col min-h-screen relative w-full bg-[#181818] text-white overflow-hidden px-6 md:px-20 pt-20"
    >
      <h2 className="text-[40px] sm:text-[48px] md:text-[64px] font-normal mb-6 md:mb-10 text-right">
        My Journey
      </h2>
      <p className="text-gray-300 font-normal text-base sm:text-lg md:text-xl text-right mb-10 leading-relaxed">
        Tracing my path through the tech industry, one milestone at a time.
      </p>
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl mx-auto py-10 md:py-20"
      >
        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-[2px] h-full bg-zinc-800" />
        <div
          ref={lineRef}
          className="absolute left-4 md:left-1/2 -translate-x-1/2 w-[2px] bg-lime-400 z-10 shadow-[0_0_15px_rgba(163,230,53,0.8)]"
        />

        {experiences.map((exp, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className="relative w-full flex items-center min-h-[250px] mb-16 md:mb-24"
            >
              <div className="hidden md:flex w-1/2 justify-end">
                {isEven && <ExperienceCard exp={exp} align="right" />}
              </div>

              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20">
                <div className="w-3 h-3 md:w-4 md:h-4" />
                <span
                  className="
                  absolute
                  top-[-30%]
                  w-4
                  h-4
                  rounded-full
                  bg-[#181818]
                  border-2
                  border-lime-400
                  shadow-[0_0_10px_#C7F000]
                  z-10
                "
                >
                  <span className="absolute inset-1 rounded-full bg-lime-400" />
                </span>
              </div>

              <div className="w-full md:w-1/2 flex justify-start pl-12 md:pl-16">
                <div className="block md:hidden">
                  <ExperienceCard exp={exp} align="left" />
                </div>
                <div className="hidden md:block">
                  {!isEven && <ExperienceCard exp={exp} align="left" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function ExperienceCard({ exp, align }) {
  const isRight = align === "right";
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col ${
        isRight
          ? "items-end text-right pr-10 md:pr-16"
          : "items-start text-left"
      }`}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={exp.companyLink}
        className="hover:text-lime-400 transition-colors"
      >
        <h3 className="text-3xl md:text-6xl font-semibold mb-2 leading-tight hover:text-lime-400 transition-colors">
          {exp.company}
        </h3>
      </a>
      <p className="text-xl md:text-2xl mb-2 text-lime-400 transition-colors">
        {exp.role}
      </p>
      <p className="text-white max-w-sm leading-relaxed mb-4 text-sm md:text-base">
        {exp.description}
      </p>
      <span className="text-xs md:text-sm text-white font-mono bg-zinc-800/50 px-2 py-1 rounded hover:text-lime-400 transition-colors">
        {exp.period}
      </span>
    </motion.div>
  );
}

export default Journey;