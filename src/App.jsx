import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import About from "./components/About";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      tablet: { smooth: true },
      smartphone: { smooth: true },
    });

    window.locoScroll = scroll;

    setTimeout(() => scroll.update(), 500);

    return () => {
      scroll.destroy();
      window.locoScroll = null;
    };
  }, []);

  return (
    <>
      <Navbar />

      <div
        ref={scrollRef}
        data-scroll-container
        className="overflow-hidden bg-[#e7e7e7] text-black select-none"
      >
        <Work />
        <Stripes />
        <About />
        <Projects />
        <Journey />
        <Skills />
        <Education />
        <Contact />
      </div>
    </>
  );
}

export default App;