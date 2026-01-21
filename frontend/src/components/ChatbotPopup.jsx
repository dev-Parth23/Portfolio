import { useEffect, useState, useRef } from "react";
import api from "../services/api";


const formatAIResponse = (text) => {
  if (!text) return text;
  
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') 
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code class="bg-white/20 px-1 py-0.5 rounded text-xs">$1</code>')
    .replace(/\n- /g, '\n• ') 
    .replace(/\n\d+\. /g, '\n$&')
    .trim();
  };
  
  export default function ChatbotPopup({ onClose }) {
  
    useEffect(() => {
      api.get("/")
        .then(res => console.log(res.data))
        .catch(err => console.error(err));
    }, []);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi, I'm Buddy 👋\nParth's AI assistant.\nAsk me about projects, skills, or experience.", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      setShowScrollButtons(scrollHeight > clientHeight && scrollTop < scrollHeight - clientHeight - 10);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => container.removeEventListener('scroll', handleScroll);
  }, [messages]);

  const scrollToTop = () => {
    messagesContainerRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user"
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: inputValue }),
      });

      const data = await response.json();

      if (response.ok) {
        const botResponse = {
          id: Date.now() + 1,
          text: data.response,
          sender: "bot"
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        throw new Error(data.error || "Failed to get response");
      }
    } catch (error) {
      console.error("Error:", error);
      const errorResponse = {
        id: Date.now() + 1,
        text: "Sorry, I'm having trouble connecting to the server right now.",
        sender: "bot"
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      <style>{`
        .chat-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.3) rgba(255,255,255,0.1);
        }
        .chat-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .chat-scrollbar::-webkit-scrollbar-track {
          background: rgba(255,255,255,0.1);
          border-radius: 3px;
        }
        .chat-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.3);
          border-radius: 3px;
        }
        .chat-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,255,255,0.5);
        }
      `}</style>
      
      <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center sm:justify-end sm:p-6">
      <div className="w-full h-[90vh] sm:h-[720px] sm:w-[400px] bg-[#0f0f0f] border-t sm:border border-white/10 rounded-t-2xl sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0f0f0f] z-10">
          <div className="flex items-center gap-3 text-white">
            <img src="/Buddy.png" alt="Buddy" className="w-10 h-10 rounded-full bg-white/10 p-1" />
            <div>
              <h3 className="font-medium text-sm">Buddy</h3>
              <p className="text-xs text-white/50">Parth&apos;s AI Assistant</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition p-2"
          >
            ✕
          </button>
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div 
            ref={messagesContainerRef}
            className="chat-scrollbar h-full overflow-y-scroll p-4 space-y-4"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.sender === "user"
                    ? "bg-lime-400 text-black rounded-tr-sm"
                    : "bg-white/10 text-white rounded-tl-sm"
                    }`}
                >
                  {msg.sender === "bot" ? (
                    <div 
                      className="whitespace-pre-wrap break-words"
                      dangerouslySetInnerHTML={{ 
                        __html: formatAIResponse(msg.text) 
                      }}
                    />
                  ) : (
                    <div className="whitespace-pre-wrap break-words">
                      {msg.text}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/10 px-4 py-3 rounded-2xl rounded-tl-sm flex gap-1">
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          {showScrollButtons && (
            <div className="absolute right-4 bottom-4 flex flex-col gap-2">
              <button
                onClick={scrollToTop}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                title="Scroll to top"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </button>
              <button
                onClick={scrollToBottom}
                className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors backdrop-blur-sm"
                title="Scroll to bottom"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-3 border-t border-white/10 bg-[#0f0f0f]">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-lime-400/50 transition placeholder:text-white/30"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="bg-lime-400 text-black p-2.5 rounded-xl hover:bg-lime-300 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0 1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0 18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z" />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}
