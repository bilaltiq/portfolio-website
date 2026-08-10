import { Reveal } from "./Reveal";
import cad2sketch from "../assets/cad2sketch.svg";
import amr from "../assets/amr.svg";
import topics from "../assets/topics.svg";
import mnist from "../assets/mnist.svg";
import goldilocks from "../assets/goldilocks.svg";
import sift from "../assets/sift.svg";
import volatility from "../assets/volatility.svg";
import layout from "../assets/layout.jpg";
import noonfs from "../assets/noonfs.jpg";
import crevasse from "../assets/crevasse.jpg";

const projects = [
  {
    img: layout,
    title: "Layout",
    discipline: "3D Web",
    year: "2024 — Present",
    plate: "#8d7aa4",
    description:
      "A production 3D interior-design SaaS on serverless AWS — auth, Stripe billing, AI furniture generation, and Babylon.js rendering.",
    tags: ["TypeScript", "Next.js", "Babylon.js", "AWS CDK", "DynamoDB"],
    url: "https://withlayout.com",
  },
  {
    img: cad2sketch,
    title: "CAD 2 Sketch",
    discipline: "Machine Learning",
    year: "2025",
    plate: "#f2efe6",
    description:
      "A CAD-to-sketch neural rendering pipeline rebuilt around Graph Attention Networks with custom CUDA/C++ ops — 17% faster convergence, 87% to 93% accuracy.",
    tags: ["C++/CUDA", "Python", "PyTorch Geometric"],
    url: "https://github.com/bilaltiq/Sketch_Nerual_Rendering/tree/Bilal/GAN",
  },
  {
    img: volatility,
    title: "Short-Horizon Volatility Prediction",
    discipline: "Deep Learning",
    year: "2026",
    plate: "#f2efe6",
    description:
      "Do sequence models actually beat classical baselines at forecasting SPY volatility? Under expanding-window walk-forward evaluation, LSTM led the deep models but Elastic Net and XGBoost still won — and no allocation strategy beat buy-and-hold. AIT Budapest final project.",
    tags: ["PyTorch", "LSTM", "XGBoost", "Optuna"],
    url: "/Deep-Learning-Volatility-Prediction.pdf",
    external: false,
  },
  {
    img: noonfs,
    title: "Bare-Metal Operating System",
    discipline: "Systems",
    year: "2025",
    plate: "#1a1a18",
    description:
      "A hand-written bootloader reaching supervisor mode in under 150ms, and a kernel with 4KB-page virtual memory, demand paging, and interrupt handling — plus NoonFS, a crash-safe journaling file system that recovered cleanly across every simulated power-loss trial.",
    tags: ["C/C++", "RISC-V Assembly", "Linux"],
    url: "https://github.com/bilaltiq/NoonFS",
  },
  {
    img: sift,
    title: "SiFT — Secure File Transfer",
    discipline: "Cryptography",
    year: "2025",
    plate: "#f2efe6",
    description:
      "A client–server file-transfer protocol across 5 sub-protocols and 7 remote commands, hardened against eavesdropping, tampering, and replay with sequence numbers, per-message nonces, and MAC verification.",
    tags: ["Python", "AES-256-GCM", "RSA-OAEP", "HKDF", "TCP Sockets"],
    url: "https://github.com/bilaltiq",
  },
  {
    img: crevasse,
    title: "Antarctic Crevasse Detection",
    discipline: "Computer Vision",
    year: "2024",
    plate: "#2b3a4a",
    description:
      "A UNet++ pipeline that segments crevasses in Sentinel-1 imagery, raising accuracy from 92.8% to 99.1%.",
    tags: ["Python", "TensorFlow", "Keras", "NumPy"],
    url: "https://github.com/bilaltiq/UNet-Crevasse-Identifier",
  },
  {
    img: amr,
    title: "Interpretable Multilingual AMR",
    discipline: "NLP Research",
    year: "2025",
    plate: "#f2efe6",
    description:
      "Probing what multilingual BERT actually encodes, by testing its sentence embeddings against AMR semantic-graph features across the MASSIVE dataset.",
    tags: ["Python", "PyTorch", "HuggingFace Transformers"],
    url: "https://github.com/bilaltiq/Interpretable-Multilingual-AMR",
  },
  {
    img: topics,
    title: "COVID Misinformation Analyzer",
    discipline: "Data Science",
    year: "2024",
    plate: "#f2efe6",
    description:
      "LDA topic modelling and sentiment analysis over UNESCO misinformation datasets, with a Shiny Leaflet map plotting case data alongside the narratives spreading around it.",
    tags: ["R", "LDA", "Shiny", "Leaflet"],
    url: "https://github.com/bilaltiq/COVID-Misinformation-Analyzer",
  },
  {
    img: mnist,
    title: "MNIST Neural Network",
    discipline: "Machine Learning",
    year: "2024",
    plate: "#f2efe6",
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
    plate: "#f2efe6",
    description:
      "An infinite, procedurally generated universe to explore in search of one mythical planet.",
    tags: ["Java"],
    url: "https://github.com/sergleonov/goldilocksgame",
  },
];

export const Projects = () => (
  <section id="work" className="container-site pt-24 md:pt-32">
    <div className="section-rule mb-8 md:mb-10">
      <h2 className="eyebrow flex items-baseline gap-3">
        Selected Work
        <span className="mono-label">({String(projects.length).padStart(2, "0")})</span>
      </h2>
      <span className="mono-label">2023 — Present</span>
    </div>

    <div className="grid gap-y-10 md:grid-cols-2 md:gap-x-5 md:gap-y-12">
      {projects.map((project, i) => (
        <Reveal key={project.title} delay={(i % 2) * 80}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor={project.external === false ? "Read" : "View"}
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
