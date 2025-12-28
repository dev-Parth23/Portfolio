import { motion } from "framer-motion";
import React from "react";

function About() {
  return (
    <div
      id="about"
      data-scroll-section
      className="relative w-full min-h-screen bg-[#181818] text-white overflow-hidden"
    >
      <section className="px-6 sm:px-10 md:px-16 pt-20 max-w-[900px]">
        <h2 className="text-[40px] sm:text-[48px] md:text-[64px] font-normal mb-6 md:mb-10">
          About Me
        </h2>

        <p className="text-gray-300 font-normal text-base leading-relaxed">
          I'm a full-stack developer who enjoys building meaningful products at
          the intersection of AI, SaaS, and interactive experiences.
        </p>
      </section>

      <div className="w-full overflow-hidden py-10 sm:py-12">
        <motion.div
          className="flex w-max whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 20,
            repeat: Infinity,
          }}
        >
          <h2 className="text-[40px] sm:text-[60px] md:text-[96px] font-medium px-6 sm:px-12 md:px-16">
            SOFTWARE DEVELOPER & UI/UX DESIGNER
          </h2>

          <div className="hidden md:block mt-24 -translate-y-1/2 w-16 h-16 bg-lime-400 rounded-full blur-sm" />

          <h2 className="text-[40px] sm:text-[60px] md:text-[96px] font-medium px-6 sm:px-12 md:px-16">
            SOFTWARE DEVELOPER & UI/UX DESIGNER
          </h2>
        </motion.div>
      </div>

      <section className="relative w-full overflow-hidden px-6 sm:px-10 md:px-16 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-28 items-start">
          <div className="max-w-[720px] flex flex-col pt-6 md:pt-20">
            <p className="text-sm sm:text-base md:text-[17px] leading-[1.85] text-gray-300 mb-8 md:mb-10">
              I'm a <b>Full-Stack Developer</b> focused on building performant,
              scalable web applications that balance solid engineering with
              thoughtful user experience. My work spans across modern frontend
              systems, backend APIs, and automation platforms.
            </p>

            <p className="text-sm sm:text-base md:text-[17px] leading-[1.85] text-gray-300 mb-8 md:mb-10">
              I specialize in developing interactive, animation-rich interfaces
              using <b>React</b>, <b>GSAP</b>, <b>Framer Motion</b>, and{" "}
              <b>Three.js</b>, while architecting reliable backend systems with{" "}
              <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, and <b>SQL</b>
              databases. I’ve worked extensively on AI-enabled workflows and CRM
              automations.
            </p>

            <p className="text-sm sm:text-base md:text-[17px] leading-[1.85] text-gray-300">
              What sets me apart is my ability to work across both product and
              platform layers—from crafting polished UIs to automating business
              processes with <b>ZOHO</b> and deploying production-ready systems
              that scale.
            </p>
          </div>

          <div className="relative w-full h-[240px] sm:h-[320px] md:h-[420px]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-2xl"
              src="src/assets/vid2.mp4"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;