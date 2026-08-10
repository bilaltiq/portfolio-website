import { Reveal } from "./Reveal";
import GAT from "../assets/GAT.png";
import noonFS from "../assets/noonFS.png";
import Crevasse from "../assets/Crevasse.png";
import goldilocks from "../assets/goldilocks.png";
import layout from "../assets/layout.png";
import nn from "../assets/nn.jpg";

const projects = [
  {
    img: GAT,
    title: "CAD 2 Sketch",
    discipline: "Machine Learning",
    year: "2025",
    plate: "#e9e3d9",
    description:
      "Graph Attention Networks that select mesh lines from CAD models and turn them into clean sketches.",
    tags: ["Python", "PyTorch", "NumPy"],
    url: "https://github.com/bilaltiq/Sketch_Nerual_Rendering/tree/Bilal/GAN",
  },
  {
    img: Crevasse,
    title: "Antarctic Crevasse Detection",
    discipline: "Computer Vision",
    year: "2025",
    plate: "#dfe4e8",
    description:
      "A UNet++ pipeline that segments crevasses in Sentinel-1 imagery, raising accuracy from 92.8% to 99.1%.",
    tags: ["Python", "TensorFlow", "Keras", "NumPy"],
    url: "https://github.com/bilaltiq/UNet-Crevasse-Identifier",
  },
  {
    img: layout,
    title: "Layout",
    discipline: "3D Web",
    year: "2024",
    plate: "#e6e3dd",
    description:
      "A 3D apartment visualization platform that lets customers furnish a space before they buy it.",
    tags: ["React", "TypeScript", "Babylon", "Next.js", "Firebase"],
    url: "https://layout--layout-58451.us-central1.hosted.app/design/1qX1j05ZFqYuvUol8uCI",
  },
  {
    img: noonFS,
    title: "Noon File System",
    discipline: "Systems",
    year: "2024",
    plate: "#1a1a18",
    description:
      "A file system built from the ground up — custom kernel, BIOS, and memory management.",
    tags: ["RISC-V Assembly", "C"],
    url: "https://github.com/bilaltiq/NoonFS",
  },
  {
    img: nn,
    title: "MNIST Neural Network",
    discipline: "Machine Learning",
    year: "2024",
    plate: "#101010",
    description:
      "A fully functional neural network written from scratch with no external libraries.",
    tags: ["Java"],
    url: "https://github.com/bilaltiq/JavaNeuralNetwork",
  },
  {
    img: goldilocks,
    title: "Goldilocks",
    discipline: "Game Design",
    year: "2023",
    plate: "#12131a",
    description:
      "An infinite, procedurally generated universe to explore in search of one mythical planet.",
    tags: ["Java"],
    url: "https://github.com/sergleonov/goldilocksgame",
  },
];

export const Projects = () => (
  <section id="work" className="container-site pt-14 md:pt-20">
    <div className="section-rule mb-8 md:mb-10">
      <h2 className="eyebrow flex items-baseline gap-3">
        Selected Work
        <span className="mono-label">({String(projects.length).padStart(2, "0")})</span>
      </h2>
      <span className="mono-label">2023 — 2025</span>
    </div>

    <div className="grid gap-y-10 md:grid-cols-2 md:gap-x-5 md:gap-y-12">
      {projects.map((project, i) => (
        <Reveal key={project.title} delay={(i % 2) * 80}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="View"
            className="group block"
          >
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-[3px]"
              style={{ backgroundColor: project.plate }}
            >
              <img
                src={project.img}
                alt={project.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
              />
            </div>

            <div className="mt-3 flex items-baseline justify-between gap-4">
              <div className="flex items-baseline gap-3">
                <span className="mono-label">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="link-line text-lg font-medium tracking-tight md:text-xl">
                  {project.title}
                </h3>
                <span className="text-brand opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100">
                  ↗
                </span>
              </div>
              <p className="mono-label whitespace-nowrap">
                {project.discipline} — {project.year}
              </p>
            </div>

            <p className="mt-2 max-w-[42rem] text-sm leading-[1.6] text-muted-foreground">
              {project.description}
            </p>

            <p className="mono-label mt-2 !tracking-[0.12em]">{project.tags.join(" · ")}</p>
          </a>
        </Reveal>
      ))}
    </div>

    <Reveal className="mt-12 border-t border-border pt-6">
      <a
        href="https://github.com/bilaltiq"
        target="_blank"
        rel="noopener noreferrer"
        className="link-line text-sm font-medium"
      >
        Everything else on GitHub ↗
      </a>
    </Reveal>
  </section>
);
