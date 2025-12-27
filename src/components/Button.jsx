import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ title = "Contact" }) => {
  return (
    <a href="#contact" className=" group flex items-center ">
      <span className="flex items-center px-5 py-2 bg-black text-white rounded-full text-base font-medium transition-all duration-300 ease-out group-hover:bg-zinc-900 " >
        {title}
      </span>

   
      <span
        className="
          flex items-center justify-center
          h-10 w-10
          bg-black text-white
          rounded-full
          transition-all duration-300 ease-out
          group-hover:bg-zinc-900
          group-hover:translate-x-1
        "
      >
        <GoArrowUpRight className="text-lg" />
      </span>
    </a>
  );
};

export default Button;
