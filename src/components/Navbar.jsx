import React, { useState } from "react";
import Button from "./Button";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full select-none bg-transparent">
      <div className="mx-auto flex items-center justify-between px-4 sm:px-8 lg:px-20 py-5">
        <div className="flex items-center gap-3">
          <a href={`#home`} className="hover:opacity-60" onClick={() => setOpen(false)}>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            PS
          </span>
              </a>
        </div>

        <div className="hidden md:flex items-center gap-10 text-lg text-zinc-800">
          {["About","Projects","Journey", "Skills", "Education" ].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="transition-opacity hover:opacity-60"
            >
              {item}
            </a>
          ))}

          <Button title="Contact" />
        </div>

        {/* MENU BUTTON */}
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

      {open && (
        <div className="md:hidden bg-[#ECECEC]/95 backdrop-blur-sm border-t border-zinc-300">
          <div className="flex flex-col items-center gap-6 py-8 text-lg text-zinc-800">
            {["About", "Projects","Journey", "Skills", "Education"].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="hover:opacity-60"
                onClick={() => setOpen(false)}
              >
                {item}
              </a>
            ))}

            <Button title="Contact" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
