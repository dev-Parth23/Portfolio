import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Loader({ onComplete }) {
  const loaderRef = useRef(null);

  useEffect(() => {
    const bricks = Array.from(loaderRef.current.children);

    // const oddBricks = bricks.filter((_, i) => i % 2 === 0);  
    // const evenBricks = bricks.filter((_, i) => i % 2 !== 0); 

    const tl = gsap.timeline({
      onComplete,
    });

    tl.to(bricks, {
      yPercent: 100,
      duration: 2.5,
      ease: "power4.inOut",
      stagger: 0.06,
    })
    // .to(evenBricks, {
    //   yPercent: 100,
    //   duration: 2.5,
    //   ease: "power4.inOut",
    //   stagger: 0.06,
    // }, 0);
  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex overflow-hidden"
    >
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="w-1/12 h-screen bg-[#181818]"
        />
      ))}
    </div>
  );
}
