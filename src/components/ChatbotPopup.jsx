import { useEffect } from "react";

export default function ChatbotPopup({ onClose }) {
  /* Disable background scroll + ESC close */
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm">
      <div className="absolute bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[380px] bg-[#0f0f0f] border border-white/10 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-3 border-b border-white/10">
          <div className="flex items-center gap-3 text-white">
            <img src="/Buddy.png" alt="Buddy" className="w-16 h-16" />
            <span className="text-xl font-medium">Buddy — Parth’s AI</span>
          </div>

          <button
            onClick={onClose}
            className="text-white font-extrabold hover:text-white text-xl"
          >
            ✕
          </button>
        </div>

        {/* Message */}
        <div className="flex-1 px-4 py-6 text-white text-lg">
          <div className="max-w-[80%] px-4 py-3 rounded-2xl bg-white/10">
            Hi, I’m Buddy 👋 <br />
            Parth’s AI assistant.  
            <br />
            Ask me about projects, skills, or experience.
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-white/10 p-3">
          <a
            href="https://chatgpt.com/g/g-694de508b594819194847e1ff51fe30f-buddy"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center rounded-xl bg-lime-400 text-black font-medium py-2 hover:bg-lime-300 transition"
          >
            Open Buddy
          </a>
        </div>
      </div>
    </div>
  );
}
