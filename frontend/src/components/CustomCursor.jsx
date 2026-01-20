import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  useEffect(() => {
    const cursor = cursorRef.current;

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.25,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.25,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;

    const scaleUp = () =>
      gsap.to(cursor, { scale: 1.6, duration: 0.2, ease: "power3.out" });

    const scaleDown = () =>
      gsap.to(cursor, { scale: 1, duration: 0.2, ease: "power3.out" });

    const targets = document.querySelectorAll("a, button, .cursor-hover");

    targets.forEach((el) => {
      el.addEventListener("mouseenter", scaleUp);
      el.addEventListener("mouseleave", scaleDown);
    });

    return () => {
      targets.forEach((el) => {
        el.removeEventListener("mouseenter", scaleUp);
        el.removeEventListener("mouseleave", scaleDown);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
  custom-cursor
    fixed top-0 left-0
    w-8 h-8
    rounded-full
    border-2
    pointer-events-none
    z-[999999]
    -translate-x-1/2 -translate-y-1/2
    mix-blend-difference
  "
    />
  );
};

export default CustomCursor;