import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const videos = [
  "vid-1.webm",
  "vid-2.webm",
  "vid-3.webm",
  "vid-4.webm",
  "vid-5.webm",
  "vid-6.webm",
  "vid-7.webm",
];

function Products() {
  const products = [
    {
      title: "Chatting Application",
      description: "-------------------> TO BE DECIDED <-------------------",
      live: true,
      color: "hover:bg-slate-500",
    },
    {
      title: "Portfolio Website",
      description: "-------------------> TO BE DECIDED <-------------------",
      live: true,
      color: "hover:bg-indigo-800",
    },
    {
      title: "ELO.TECH",
      description: "-------------------> TO BE DECIDED <-------------------",
      live: true,
      color: "hover:bg-purple-600",
    },
    {
      title: "Store Sales Dashboard",
      description: "-------------------> TO BE DECIDED <-------------------",
      live: true,
      color: "hover:bg-violet-800",
    },
    {
      title: "Covid Death Dashboard",
      description: "-------------------> TO BE DECIDED <-------------------",
      live: true,
      color: "hover:bg-red-700",
    },
    {
      title: "Go Stock",
      description: "-------------------> TO BE DECIDED <-------------------",
      live: true,
      color: "hover:bg-green-800",
    },

    {
      title: "Aistear Unica UI Design",
      description: "-------------------> TO BE DECIDED <-------------------",
      live: true,
      color: "hover:bg-pink-500",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      {products.map((item, index) => (
        <Product key={index} val={item} index={index} mover={setActiveIndex} />
      ))}

      <div className="pointer-events-none absolute top-0 right-[50%] h-full">
        <motion.div
          animate={{ y: `${activeIndex * 23}rem` }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="w-[23rem] h-[23rem] overflow-hidden"
        >
          <motion.div
            animate={{ y: `${-activeIndex * 23}rem` }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {videos.map((src, i) => (
              <div key={i} className="w-full h-[23rem]">
                <video
                  autoPlay
                  muted
                  loop
                  className="w-full h-full object-cover"
                  src={`/${src}`}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
export default Products;