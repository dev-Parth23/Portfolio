import { useState } from "react";
import ChatbotPopup from "./ChatbotPopup";

export default function ChatbotLauncher() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className="fixed bottom-10 right-10 z-50">
        {/* Tooltip (Desktop only) */}
        <div
          className={`
            absolute bottom-full right-0 mb-4
            hidden sm:block
            pointer-events-none
            transition-all duration-300
            ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          `}
        >
          <div
            className="
              bg-white/10
              backdrop-blur-md
              border border-white/20
              text-black
              text-base
              px-4 py-2
              rounded-xl
              shadow-lg
              whitespace-nowrap
            "
          >
            Hi, I’m <span className="text-lime-800 font-medium">Buddy</span> —
            AI by Parth
          </div>
        </div>

        {/* Robot Button */}
        <button
          onClick={() => setOpen(true)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="
            w-24 h-24 sm:w-36 sm:h-36 rounded-full
            bg-transparent
            flex items-center justify-center
            hover:scale-110
            transition"
          aria-label="Open Buddy AI"
        >
          <img
            src="/Buddy.png"
            alt="Buddy AI"
            className="w-full h-full object-contain"
          />
        </button>
      </div>

      {/* Chat Popup */}
      {open && <ChatbotPopup onClose={() => setOpen(false)} />}
    </>
  );
}
