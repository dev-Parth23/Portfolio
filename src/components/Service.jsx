import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SVG = ({ id }) => {
  useEffect(() => {
    gsap.fromTo(
      `#animatedPath-${id}`,
      { strokeDasharray: 1362, strokeDashoffset: 1362 },
      {
        strokeDashoffset: 0,
        ease: "power4.out",
        scrollTrigger: {
          trigger: `#svgWrapper-${id}`,
          start: "top 95%",
          end: "bottom 60%",
          scrub: 5,
          markers: false,
        },
      }
    );
  }, [id]);

  return (
    <div id={`svgWrapper-${id}`} className="h-[60px]">
      <svg
        viewBox="0 0 1362 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          id={`animatedPath-${id}`}
          d="M0 1.5H571.719C590.957 1.5 609.914 6.12563 626.99 14.9869L667.51 36.0131C684.586 44.8744 703.543 49.5 722.781 49.5H1362"
          stroke="#EBFD40"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

const data = [
  {
    ID: "001",
    Title1: "BRANDING",
    Title2: "DESIGN",
    Description1:
      "Our Brand Design service focuses on distilling the essence of your business into a visually compelling identity.",
    Description2:
      "We blend creativity with strategy to craft brand designs that not only look great but resonate deeply with your target audience.",
  },
  {
    ID: "002",
    Title1: "CREATIVE",
    Title2: "DIRECTION",
    Description1:
      "Creative Direction at our studio is about steering your project to its fullest potential.",
    Description2:
      "We offer visionary guidance, ensuring every element aligns seamlessly with your brand’s identity and goals.",
    Description3:
      "Our approach is collaborative and innovative, crafting experiences that stand out in today’s dynamic digital landscape.",
  },
  {
    ID: "003",
    Title1: "UX/UI",
    Title2: "DESIGN",
    Description1:
      "At the heart of our UX/UI Design lies a commitment to enhancing user interaction through intuitive, aesthetically pleasing interfaces.",
    Description2:
      "Our designs are not just visually stunning but are structured to improve usability and user engagement, ensuring a seamless digital journey for your customers.",
  },
  {
    ID: "004",
    Title1: "WEB/APP",
    Title2: "DEVELOPMENT",
    Description1:
      "Our Web Development service merges innovative technology with creative design to build websites that are not only visually striking but also high-performing and scalable.",
    Description2:
      "Whether it’s a simple site or a complex application, our development team ensures a seamless, engaging online presence for your business.",
  },
];

const Service = () => {
  return (
    <div className="w-screen px-7 overflow-x-hidden">
      {data.map((item) => (
        <div className="" key={item.ID}>
          <SVG id={item.ID} />
          <div className="flex pb-5">
            <div className="Left w-1/2 flex gap-8">
              <h3 className="text-[#EBFD40] text-2xl font-[font2]">
                {item.ID}
              </h3>
              <div id="Title">
                <h1 className="text-white text-4xl font-[font1]">
                  {item.Title1}
                </h1>
                <h1 className="text-white text-4xl font-[font1]">
                  {item.Title2}
                </h1>
              </div>
            </div>

            <div className="right pt-10 flex flex-col gap-2 w-1/2 px-5">
              <p className="text-gray-400 font-normal font-[font3] text-sm">
                {item.Description1}
              </p>
              <p className="text-gray-400 font-normal font-[font3] text-sm">
                {item.Description2}
              </p>
              {item.Description3 && (
                <p className="text-gray-400 font-normal font-[font3] text-sm">
                  {item.Description3}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Service;