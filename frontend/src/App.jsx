import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import About from "./components/About";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import ChatbotLauncher from "./components/ChatbotLauncher";

function App() {
  const scrollRef = useRef(null);
  const locoScrollRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    locoScrollRef.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      tablet: { smooth: true },
      smartphone: { smooth: true },
    });

    window.locoScroll = locoScrollRef.current;

    return () => {
      locoScrollRef.current?.destroy();
      window.locoScroll = null;
    };
  }, []);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <Navbar />

<ChatbotLauncher />

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