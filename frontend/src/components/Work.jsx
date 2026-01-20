import React from "react";
import { GoArrowDown } from "react-icons/go";
import { FaLinkedin, FaWhatsapp, FaGithub, FaDownload } from "react-icons/fa6";

function Work() {
  return (
    <section
      id="home"
      className="relative w-full min-h-[100svh] overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <video
          className="
            w-full
            h-full
            max-w-none
            object-cover
          "
          autoPlay
          loop
          muted
          playsInline
          src="/HomepageElem.mp4"
        />
      </div>

      <div className="relative z-10 flex min-h-[100svh] items-center justify-center text-center px-4">
        <div>
          <h2 className="mb-4 text-xl sm:text-3xl tracking-wide text-zinc-600">
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
          bottom-24
          left-1/2
          -translate-x-1/2
          sm:left-10
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
        <a href="/ParthSinghal final.pdf" download>
          <FaDownload />
        </a>

        <a
          href="https://www.linkedin.com/in/dev-parth23/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="https://wa.me/919368353165" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>

        <a
          href="https://github.com/dev-Parth23"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          z-20
          flex
          flex-col
          items-center
          gap-2
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