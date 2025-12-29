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
      px-3 sm:px-4
      py-1.5 sm:py-2
      rounded-full
      bg-white
      text-xs sm:text-sm
      text-gray-700
      border border-black/5
      shadow-sm
      hover:bg-black
      hover:text-white
      transition-all
      duration-200
      whitespace-nowrap
    "
  >
    {name}
  </span>
);

const SkillCategory = ({ title, items }) => (
  <div className="space-y-5">
    <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-900">
      {title}
    </h3>

    <div className="flex flex-wrap justify-center gap-3">
      {items.map((item, index) => (
        <SkillPill key={index} name={item.name} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      data-scroll-section
      className="
        bg-[#E6E6E6]
        py-20
        px-4 sm:px-6 lg:px-12
      "
    >
      <div className="max-w-[1300px] mx-auto flex flex-col gap-14">
        {/* Heading */}
        <div className="text-center space-y-3">
          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[64px]
              font-normal
            "
          >
            Technology Arsenal
          </h2>

          <p
            className="
              text-zinc-700
              text-sm
              sm:text-base
              md:text-lg
              max-w-3xl
              mx-auto
            "
          >
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-x-10
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