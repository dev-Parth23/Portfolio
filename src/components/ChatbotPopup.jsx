import { useEffect, useState } from "react";

export default function ChatbotPopup({ onClose }) {
  const gptUrl =
    "https://chatgpt.com/g/g-694de508b594819194847e1ff51fe30f-buddy";
  const [iframeLoaded, setIframeLoaded] = useState(false);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm">
      <div
        className="
          absolute bottom-0 right-0
          sm:bottom-6 sm:right-6
          w-full sm:w-[420px]
          h-[85svh]
          bg-[#0f0f0f]
          border border-white/10
          rounded-t-2xl sm:rounded-2xl
          shadow-2xl
          overflow-hidden
          flex flex-col
        "
      >
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-2 text-white">
            <img
              src="/Buddy.png"
              alt="Buddy AI"
              className="w-14 h-14 text-lime-400"
            />
            <span className="text-xl tracking-wide">
              Buddy — Parth’s AI
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition"
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 relative bg-black">
          <iframe
            src={gptUrl}
            title="Buddy AI"
            className="absolute inset-0 w-full h-full"
            onLoad={() => setIframeLoaded(true)}
          />

          {/* Fallback (only if iframe is blocked) */}
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white/70 text-center px-6">
              <p className="text-sm mb-4">
                The chat can’t be embedded due to browser restrictions.
              </p>
              <a
                href={gptUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  px-4 py-2
                  rounded-lg
                  bg-lime-400
                  text-black
                  font-medium
                  hover:bg-lime-300
                  transition
                "
              >
                Open Buddy in new tab
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
