import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    pill: "2021 – 2025",
    bgYear: "2025",
    education: "B.Tech Computer Science",
    orgPage: "https://www.abes.ac.in/",
    title: "ABES Engineering College",
    university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
    location: "Ghaziabad, Uttar Pradesh",
    description:
      "Completed Bachelor of Technology in Computer Science with a strong focus on software engineering, data structures, and modern web technologies.",
    meta: [
      "CGPA: 7.49",
      "Data Structures, Algorithms, DBMS, OS, CN, Software Engineering",
    ],
  },
  {
    pill: "2021",
    bgYear: "2021",
    education: "Class 12th (Science)",
    orgPage: "https://stpaulsagra.org/",
    title: "St. Pauls Church College",
    board: "ISC (Indian School Certificate)",
    location: "Agra, Uttar Pradesh",
    description:
      "Completed Class 12th with Science stream, building a strong analytical and problem-solving foundation.",
    meta: [
      "Percentage: 81.2%",
      "Physics, Chemistry, Maths, English, Biotechnology",
    ],
  },
  {
    pill: "2019",
    bgYear: "2019",
    education: "Class 10th",
    orgPage: "https://stpaulsagra.org/",
    title: "St. Pauls Church College",
    board: "ICSE (Indian Certificate of Secondary Education)",
    location: "Agra, Uttar Pradesh",
    description:
      "Completed secondary education with a diverse curriculum across science, mathematics, and humanities.",
    meta: [
      "Percentage: 82.2%",
      "Science, Computers, Hindi, English, SST, Maths",
    ],
  },
];

const Education = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lineRef.current,
      { height: 0 },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section
      id="education"
      data-scroll-section
      className="bg-[#181818] relative"
    >
      <div className="hidden lg:block absolute left-0 top-[65%] h-full w-28 z-50">
        <div
          className="
            sticky
            top-1/2
            -translate-y-1/2
            rotate-[-90deg]
            text-white/70
            tracking-[0.4em]
            text-7xl
            font-semibold
            whitespace-nowrap
            pointer-events-none
          "
        >
          EDUCATION
        </div>
      </div>

      <div ref={containerRef} className="relative">
        <div
          className="
            absolute
            top-0
            h-full
            w-[2px]
            bg-white/10
            left-6
            lg:left-1/2
            -translate-x-1/2
          "
        >
          <div
            ref={lineRef}
            className="w-full bg-lime-400 shadow-[0_0_15px_#C7F000]"
          />
        </div>

        {education.map((item, idx) => (
          <div key={idx} className="relative">
            <div
              className="
                hidden lg:block
                absolute
                right-0
                top-1/2
                -translate-y-1/2
                text-[26rem]
                font-extrabold
                text-white/5
                select-none
                leading-none
              "
            >
              {item.bgYear}
            </div>{" "}
            <div
              className="
                relative
                max-w-7xl
                mx-auto
                pl-28 pr-6
                lg:px-10
                py-24
                lg:py-32
                grid
                grid-cols-1
                lg:grid-cols-[1fr_40px_1fr]
                gap-10
              "
            >
              <div className="space-y-6 text-white lg:pr-12">
                <div className="space-y-1">
                  <a
                    href={item.orgPage}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h1 className="text-2xl lg:text-4xl font-bold hover:text-lime-400 transition">
                      {item.title}
                    </h1>
                  </a>

                  {item.university && (
                    <p className="text-lime-400 text-sm lg:text-base font-medium">
                      University: {item.university}
                    </p>
                  )}

                  {item.board && (
                    <p className="text-lime-400 text-sm lg:text-base font-medium">
                      Board: {item.board}
                    </p>
                  )}

                  <p className="text-white/60 text-sm lg:text-base">
                    {item.location}
                  </p>
                </div>

                <span className="inline-block px-5 py-2 rounded-full border border-white/20 text-xs lg:text-sm w-fit">
                  {item.pill}
                </span>

                <h2 className="text-xl lg:text-2xl font-semibold hover:text-lime-400 transition">
                  {item.education}
                </h2>

                <p className="text-white/70 leading-relaxed text-sm lg:text-base">
                  {item.description}
                </p>

                <ul className="list-disc list-inside pt-3 space-y-1 text-white/60 text-sm lg:text-base">
                  {item.meta.map((m, i) => (
                    <li key={i} className="hover:text-lime-400 transition">
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative flex justify-center">
                <span
                  className="
                    absolute
                    top-8
                    w-4
                    h-4
                    rounded-full
                    bg-[#181818]
                    border-2
                    border-lime-400
                    shadow-[0_0_10px_#C7F000]
                    z-10
                    -translate-x-1/2
                    left-0
                    lg:left-1/2
                  "
                >
                  <span className="absolute inset-1 rounded-full bg-lime-400" />
                </span>
              </div>

              <div className="hidden lg:block" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
