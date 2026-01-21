import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const videos = [
  "vid-1.webm",
  "vid-2.webm",
  "vid-3.webm",
  "vid-5.webm",
  "vid-4.webm",
  "vid-6.webm",
  "vid-7.webm",
];

function Products() {
  const products = [
    {
      title: "Chatting Application",
      description1: "Real-time messaging platform with OTP authentication, group chats, and live typing indicators using WebSockets and event-driven architecture.",
      description2: "MongoDB • Express • React • Node.js • Socket.io • Firebase • Chart.js",
      live: true,
      color: "hover:bg-indigo-800",
      link:"https://github.com/dev-Parth23/ChitChat",
    },
    {
      title: "Personal Portfolio",
      description1: "Interactive portfolio with smooth animations, automated contact form with email integration, and custom ChatGPT assistant for enhanced user engagement.",
      description2: "React • Tailwind CSS • GSAP • Framer Motion • ChatGPT API • Email Integration",
      live: true,
      color: "hover:bg-red-700",
      link:"https://github.com/dev-Parth23/Parth_Singhal",
    },
    {
      title: "ELO.TECH",
      description1:"Immersive web experience featuring advanced 3D graphics and smooth animations to showcase IT services. Built with cutting-edge technologies for optimal performance and visual impact.",
      description2:" React • Three.js • GSAP • Tailwind CSS • 3D Animations • Figma",
      live: true,
      color: "hover:bg-purple-600",
      link:"https://github.com/dev-Parth23/EloTech",
    },
    {
      title: "Stock Price Prediction",
      description1:"Interactive platform for visualizing real-time stock prices and trends with dynamic KPI charts. Features responsive design and predictive analytics for informed investment decisions.",
      description2:"React • Tailwind CSS • Chart.js • Axios • Real-time Data Visualization",
      live: true,
      color: "hover:bg-[#075D37]",
      link:"https://github.com/dev-Parth23/GoStock",
    },
    {
      title: "Power BI Dashboards",
      description1:"Supermarket Sales Dashboard - Real-time sales analytics with KPIs for revenue, profit margins, product performance, and regional trends.",
      description2:"COVID-19 Death Report - Comprehensive mortality tracking dashboard with geographic distribution, temporal trends, and demographic analysis.",
      live: true,
      color: "hover:bg-[#303040]",
      link:"",
    },
    {
      title: "Aistear Unica Design",
      description1:"Cross-platform UI/UX design for mobile and web featuring customer booking flows, service catalogs, artist profiles, and appointment management with seamless multi-device experience.",
      description2:"Figma • Mobile App Design • Web Design • UI/UX • Wireframing • Prototyping • Multi-platform Consistency",
      live: true,
      color: "hover:bg-pink-500",
      link:"https://www.figma.com/design/d8m2UWJL3X4RSElmFR9SUl/Aistear-Unica?",
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