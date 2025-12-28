import React, { useEffect } from 'react'
import gsap from 'gsap'

const loaderRef = React.useRef(null);

useEffect(() => {
    const bricks = loaderRef.current.children;
    gsap.to(bricks, {
        y:-100, 
        duration:3.5,
        scrub: 1.5,
        ease: "power4.inOut",
        stagger: 0.2,
    })
}, []);
const Test = () => {
  return (
    <div>Test</div>
  )
}

export default Test