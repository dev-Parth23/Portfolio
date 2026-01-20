import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const bricks = Array.from(loaderRef.current.children);
    const text = Array.from(loaderRef.current.children);
    const tl = gsap.timeline({
      onComplete,
    });

    tl.to(bricks, {
      yPercent: 100,
      duration: 3,
      delay:1,
      ease: "power4.inOut",
      stagger: 0.06,
    });
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex overflow-hidden"
    >
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <h1 className="text-white text-7xl font-medium tracking-widest">
          HELLO !
        </h1>
      </div>

      {[...Array(6)].map((_, i) => (
        <div key={i} className="w-1/6 h-screen bg-[#181818] " />
      ))}
    </div>
  );
}
