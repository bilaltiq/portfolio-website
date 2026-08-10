import { Reveal } from "./Reveal";
import { MarkWatermark } from "./MarkWatermark";
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

/* The logo grid covers the day-to-day tools; this table carries the rest of the
   résumé's skill list, which has no icons and reads better as type anyway. */
const categories = [
  {
    label: "languages",
    items: "C++, C, Python, Java, TypeScript/JavaScript, SQL, RISC-V Assembly",
  },
  {
    label: "systems & distributed",
    items:
      "Linux, Concurrency, Memory Management, CUDA, Networking, Cryptography, Docker, AWS (Lambda, DynamoDB, S3, API Gateway, Cognito), PostgreSQL, GitHub Actions CI/CD",
  },
  {
    label: "ml & nlp",
    items:
      "PyTorch, TensorFlow, Keras, PyTorch Geometric, HuggingFace Transformers, LLM tool-calling & retrieval",
  },
  {
    label: "ai development tools",
    items: "Claude Code, Cursor, GitHub Copilot, OpenAI & Anthropic APIs",
  },
];

const stack = [
  { name: "Python", use: "ai & ml", src: pythonLogo },
  { name: "Java", use: "app development", src: javaLogo },
  { name: "C / C++", use: "embedded systems", src: cLogo },
  { name: "TypeScript", use: "web development", src: tsLogo },
  { name: "React", use: "frontend framework", src: reactLogo },
  { name: "MySQL", use: "databases", src: sqlLogo },
  { name: "Node.js", use: "backend", src: nodejsLogo },
  { name: "Tailwind", use: "frontend design", src: tailwindLogo },
  { name: "JavaScript", use: "core web language", src: JSLogo },
  { name: "Git", use: "well… it's git", src: gitLogo },
];

export const TechStack = () => (
  <section id="stack" className="container-site relative pt-24 md:pt-32">
    <MarkWatermark side="left" size="52vmin" top="12%" drift={70} />

    <div className="section-rule mb-8 md:mb-10">
      <h2 className="eyebrow flex items-baseline gap-3">
        tech stack
        <span className="mono-label">({stack.length})</span>
      </h2>
      <span className="mono-label">what i reach for</span>
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

    <dl className="mt-14 md:mt-20">
      {categories.map((category, i) => (
        <Reveal
          key={category.label}
          delay={i * 60}
          className="grid gap-2 border-b border-border py-5 md:grid-cols-12 md:gap-6"
        >
          <dt className="mono-label md:col-span-3">{category.label}</dt>
          <dd className="text-sm leading-[1.6] text-muted-foreground md:col-span-9">
            {category.items}
          </dd>
        </Reveal>
      ))}
    </dl>
  </section>
);
