import React, { useEffect, useState, useRef } from "react";
import Button from "./Button";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  const handleNavClick = (e, target) => {
    e.preventDefault();
    setOpen(false);

    const el = document.querySelector(`#${target}`);
    const isLast = el && !el.nextElementSibling;
    const offset = isLast ? 0 : -80;

    if (window.locoScroll?.scrollTo) {
      window.locoScroll.scrollTo(`#${target}`, { offset });
    } else {
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = (currentScrollY) => {
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setHidden(true); // scrolling down
      } else {
        setHidden(false); // scrolling up
      }
      lastScrollY.current = currentScrollY;
    };

    // Locomotive Scroll support
    if (window.locoScroll) {
      window.locoScroll.on("scroll", (obj) => {
        onScroll(obj.scroll.y);
      });
    } else {
      // Fallback to native scroll
      const handleScroll = () => {
        onScroll(window.scrollY);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 z-50 w-full
        select-none
        bg-[#E6E6E6]/90
        backdrop-blur-md
        border-b border-zinc-300
        transition-transform duration-300 ease-out
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-20 py-5">
        {/* Logo */}
        <a
          href="#home"
          className="hover:opacity-60"
          onClick={(e) => handleNavClick(e, "home")}
        >
          <span className="text-2xl sm:text-3xl text-black lg:text-4xl font-semibold tracking-tight">
            PS
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-lg text-zinc-800">
          {["About", "Projects", "Journey", "Skills", "Education"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="transition-opacity hover:opacity-50"
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
              >
                {item}
              </a>
            )
          )}
          <Button title="Contact" />
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5"
          aria-label="Toggle menu"
        >
          <span className="w-6 h-[2px] bg-zinc-800" />
          <span className="w-6 h-[2px] bg-zinc-800" />
          <span className="w-6 h-[2px] bg-zinc-800" />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#ECECEC]/95 backdrop-blur-md border-t border-zinc-300">
          <div className="flex flex-col items-center gap-6 py-8 text-lg text-zinc-800">
            {["About", "Projects", "Journey", "Skills", "Education"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="hover:opacity-60"
                  onClick={(e) => handleNavClick(e, item.toLowerCase())}
                >
                  {item}
                </a>
              )
            )}
            <Button title="Contact" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
