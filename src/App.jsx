import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import About from "./components/About";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Service from "./components/Service";
// import Marquees from "./components/Marquees";
// import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="overflow-x-hidden w-full bg-[#e7e7e7] text-black scale-100">
      <Navbar />
      <Work />
      <Stripes />
      <About />
      <Projects />
      <Journey />
      {/* <Service /> */}
      {/* <Marquees /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
