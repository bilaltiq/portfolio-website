import { Reveal } from "./Reveal";
import pythonLogo from "../assets/python.png";
import javaLogo from "../assets/java.png";
import cLogo from "../assets/c.png";
import tsLogo from "../assets/ts.png";
import reactLogo from "../assets/react.png";
import sqlLogo from "../assets/mysql.png";
import nodejsLogo from "../assets/nodejs.png";
import tailwindLogo from "../assets/tailwind.png";
import gitLogo from "../assets/git.png";
import JSLogo from "../assets/JS.png";

const stack = [
  { name: "Python", use: "AI & ML", src: pythonLogo },
  { name: "Java", use: "App Development", src: javaLogo },
  { name: "C / C++", use: "Embedded Systems", src: cLogo },
  { name: "TypeScript", use: "Web Development", src: tsLogo },
  { name: "React", use: "Frontend Framework", src: reactLogo },
  { name: "MySQL", use: "Databases", src: sqlLogo },
  { name: "Node.js", use: "Backend", src: nodejsLogo },
  { name: "Tailwind", use: "Frontend Design", src: tailwindLogo },
  { name: "JavaScript", use: "Core Web Language", src: JSLogo },
  { name: "Git", use: "Well… it's Git", src: gitLogo },
];

export const TechStack = () => (
  <section id="stack" className="container-site pt-24 md:pt-32">
    <div className="section-rule mb-8 md:mb-10">
      <h2 className="eyebrow flex items-baseline gap-3">
        Tech Stack
        <span className="mono-label">({stack.length})</span>
      </h2>
      <span className="mono-label">Tools of the trade</span>
    </div>

    {/* Single-hairline grid: collapse the gap and let cell borders overlap */}
    <div className="grid grid-cols-2 border-l border-t border-border sm:grid-cols-3 lg:grid-cols-5">
      {stack.map((tech, i) => (
        <Reveal
          key={tech.name}
          delay={i * 40}
          className="group relative border-b border-r border-border p-5 transition-colors duration-300 hover:bg-muted md:p-6"
        >
          <span className="mono-label absolute right-3 top-3 !text-[10px] opacity-40">
            {String(i + 1).padStart(2, "0")}
          </span>
          {/* Full colour rather than grayscale — several logos are near-black and
              disappear against the dark palette once desaturated. */}
          <img
            src={tech.src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="mb-4 h-8 w-8 object-contain opacity-80 transition-[opacity,transform] duration-300 group-hover:scale-105 group-hover:opacity-100 dark:brightness-110"
          />
          <p className="text-sm font-medium tracking-tight">{tech.name}</p>
          <p className="mono-label mt-1 !tracking-[0.12em]">{tech.use}</p>
        </Reveal>
      ))}
    </div>
  </section>
);
