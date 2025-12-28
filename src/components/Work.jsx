import React from "react";
import { GoArrowDown } from "react-icons/go";
import { FaLinkedin, FaWhatsapp, FaGithub, FaDownload } from "react-icons/fa6";

function Work() {
  return (
    <section
      id="home"
      className="relative h-screen w-full select-none overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          className="
            w-[100vw] sm:w-[1200px] lg:w-[1600px]
    max-w-none
    object-contain
          "
          autoPlay
          loop
          muted
          playsInline
          src="/HomepageElem.mp4"
        />
      </div>

      <div className="relative z-10 flex h-full items-center justify-center text-center px-4">
        <div>
          <h2 className="mb-4 text-2xl sm:text-3xl tracking-wide text-zinc-600">
            Hi! I’m Parth
          </h2>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-normal leading-tight text-black">
            Full-stack Developer <br />
            UI & UX Designer.
          </h1>
        </div>
      </div>

      <div
        className="
  absolute
    bottom-20
    left-1/2
    -translate-x-1/2
    sm:left-8
    sm:translate-x-0
    z-20
    flex
    flex-row sm:flex-col
    gap-6
    items-center
    text-2xl
    text-black
        "
      >
        <a
          href="/src/assets/RESUME_ParthSinghal.pdf"
          download="Parth_Singhal_Resume.pdf"
        >
          <FaDownload />
        </a>

        <a
          href="https://www.linkedin.com/in/dev-parth23/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://wa.me/919368353165"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://github.com/dev-Parth23"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110"
        >
          <FaGithub />
        </a>
      </div>

      <div
        className="
          absolute
          bottom-10 sm:bottom-20
          right-1/2 sm:right-10
          translate-x-1/2 sm:translate-x-0
          flex
          flex-col sm:flex-row
          items-center
          gap-3
        "
      >
        <span className="bg-black text-white rounded-full p-3 animate-bounce">
          <GoArrowDown />
        </span>

        <span className="hidden sm:block text-black font-medium tracking-wide">
          Scroll to Explore
        </span>
      </div>
    </section>
  );
}

export default Work;