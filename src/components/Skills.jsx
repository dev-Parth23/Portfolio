import React from "react";
const skills = [
  {
    title: "Languages",
    items: [{ name: "Java" }, { name: "JavaScript" }, { name: "Deluge" }],
  },
  {
    title: "Front-end",
    items: [
      { name: "React.js" },
      { name: "HTML" },
      { name: "Tailwind CSS" },
      { name: "GSAP" },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js" },
      { name: "Express" },
      { name: "Zoho Catalyst" },
    ],
  },
  {
    title: "Database",
    items: [{ name: "SQL" }, { name: "MongoDB" }, { name: "Zoho Analytics" }],
  },
  {
    title: "Developer Tools",
    items: [
      { name: "Git" },
      { name: "Docker" },
      { name: "Figma" },
      { name: "Power BI" },
      { name: "VBA" },
    ],
  },
  {
    title: "ZOHO",
    items: [
      { name: "CRM" },
      { name: "Creator" },
      { name: "Desk" },
      { name: "Books" },
      { name: "Analytics" },
      { name: "People" },
    ],
  },
];

const SkillPill = ({ name }) => (
  <span
    className="
      inline-flex items-center
      px-4 py-2
      rounded-full
      bg-white
      text-sm
      text-gray-700
      border border-black/5
      shadow-sm
      hover:bg-black
      hover:text-white
      transition-colors
      duration-200
    "
  >
    {name}
  </span>
);

const SkillCategory = ({ title, items }) => (
  <div className="space-y-5">
    <h3 className="text-2xl font-semibold text-center text-gray-900">
      {title}
    </h3>

    <div className="flex flex-wrap justify-center gap-3 text-lg">
      {items.map((item, i) => (
        <SkillPill key={i} name={item.name} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      data-scroll-section
      className="bg-[#E6E6E6] h-[75vh] pt-16 pb-28"
    >
      <div className="max-w-[1300px] mx-auto flex flex-col h-full gap-10">
        <div className="text-center mb-16 space-y-1">
          <h2 className="text-[40px] sm:text-[48px] md:text-[64px] font-normal  md:mb-5">
            Technology Arsenal
          </h2>
          <p className="text-zinc-700 font-normal text-base sm:text-lg md:text-xl leading-relaxed">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-x-20
            gap-y-12
            
          "
        >
          {skills.map((group, index) => (
            <SkillCategory
              key={index}
              title={group.title}
              items={group.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;