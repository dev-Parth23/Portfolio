import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({
  title = "Contact",
  href = "#contact",
}) => {
  const handleClick = (e) => {
    // prevent default browser jump and use locomotive scroll if available
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    const isLast = el && !el.nextElementSibling;
    const offset = isLast ? 0 : -80;

    if (window.locoScroll && typeof window.locoScroll.scrollTo === 'function') {
      window.locoScroll.scrollTo(href, { offset });
    } else {
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={href} onClick={handleClick} className="group flex items-center">
      
      <span
        className="
          flex items-center px-5 py-2
          bg-black text-white
          rounded-full
          text-base font-medium
          transition-all duration-300 ease-out
          group-hover:bg-zinc-900
        "
      >
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
