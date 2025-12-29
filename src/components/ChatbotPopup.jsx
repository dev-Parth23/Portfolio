import { useEffect, useRef, useState } from "react";

export default function ChatbotPopup({ onClose }) {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I’m Buddy 👋 Parth’s AI assistant. Ask me about projects, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  /* ---------- Disable background scroll ---------- */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  /* ---------- Auto scroll ---------- */
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  /* ---------- Send Message ---------- */
  const sendMessage = async () => {
    if (loading) return;
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };

    // ✅ build messages ONCE (fixes stale state bug)
    const nextMessages = [...messages, userMessage];

    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = fetch("/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    messages: nextMessages,
  }),
});


      const data = await res.json().catch(() => ({
        reply: "⚠️ Invalid server response.",
      }));

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "⚠️ Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm">
      <div className="absolute bottom-0 right-0 sm:bottom-6 sm:right-6 w-full sm:w-[420px] h-[85svh] bg-[#0f0f0f] border border-white/10 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
          <div className="flex items-center gap-3 text-white">
            <img src="/Buddy.png" alt="Buddy" className="w-10 h-10" />
            <span className="text-lg font-medium">Buddy — Parth’s AI</span>
          </div>
          <button onClick={onClose} className="text-white/60 hover:text-white">✕</button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 text-sm">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                msg.role === "user"
                  ? "bg-lime-400 text-black rounded-br-none"
                  : "bg-white/10 text-white rounded-bl-none"
              }`}>
                {msg.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="text-white/50 text-xs">Buddy is typing…</div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="border-t border-white/10 p-3">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                sendMessage();
              }
            }}
            placeholder="Ask Buddy something…"
            rows={2}
            className="w-full resize-none rounded-xl bg-black text-white border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-lime-400"
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="mt-2 w-full rounded-xl bg-lime-400 text-black font-medium py-2 hover:bg-lime-300 transition disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
