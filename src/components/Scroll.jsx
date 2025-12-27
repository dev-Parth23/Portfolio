import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const Scroll = () => {
  const [images, setImages] = useState([
    {
      url: "https://external-preview.redd.it/java-22-launch-event-v0-VKfyXB99AEiHiPvIbK-vLRHcejGsT7-_XARIBlJwh38.jpg?auto=webp",
      top: "45%",
      left: "48%",
      isActive: false,
    },
    {
      url: "https://www.docker.com/wp-content/uploads/2023/08/logo-guide-logos-2.svg",
      top: "40%",
      left: "55%",
      isActive: false,
    },
    {
      url: "https://spin.atomicobject.com/wp-content/uploads/Figma-Image.jpg",
      top: "50%",
      left: "45%",
      isActive: false,
    },
    {
      url: "https://ml2quantum.com/wp-content/uploads/2020/05/Microsoft-Power-BI-Symbol.png",
      top: "55%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://images.prismic.io/toyfight/65e1e07d27237c2bb829b9dc_GSAP-Meta-image.jpg",
      top: "60%",
      left: "47%",
      isActive: false,
    },
    {
      url: "https://www.patterns.dev/img/reactjs/react-logo@3x.svg",
      top: "52%",
      left: "58%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const activeCount = Math.floor(value * images.length);

    setImages((prev) =>
      prev.map((img, index) => ({
        ...img,
        isActive: index <= activeCount,
      }))
    );
  });

  return (
    <section className="relative w-full h-[120vh] overflow-hidden">
      
      {/* Placeholder / Content */}
      <div className="flex items-center justify-center h-full text-4xl font-light">
        Scroll
      </div>

      {/* Floating Images */}
      <div className="pointer-events-none absolute inset-0">
        {images.map(
          (img, index) =>
            img.isActive && (
              <img
                key={index}
                src={img.url}
                alt=""
                style={{ top: img.top, left: img.left }}
                className="
                  absolute
                  -translate-x-1/2
                  -translate-y-1/2
                  w-48 h-48
                  object-cover
                  rounded-xl
                  shadow-xl
                  transition-all
                  duration-700
                  ease-out
                "
              />
            )
        )}
      </div>
    </section>
  );
};

export default Scroll;
