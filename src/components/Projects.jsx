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
      "A 3D interior design tool I started with friends. Serverless AWS underneath, Stripe for billing, AI furniture generation, and Babylon.js doing the rendering.",
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
      "Turning CAD models into clean line drawings using graph attention networks. I rewrote the pipeline with custom CUDA ops, which made it 17% faster to train and took accuracy from 87% to 93%.",
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
      "Can deep sequence models forecast SPY volatility better than plain baselines? Mostly no. LSTM was the best of the deep ones, Elastic Net and XGBoost still beat it, and nothing we tried beat just holding SPY. Final project at AIT Budapest.",
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
      "A bootloader and kernel written from scratch on RISC-V. It reaches supervisor mode in under 150ms and handles 4KB paging, demand paging and interrupts. NoonFS sits on top and came back clean from every simulated power loss I threw at it.",
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
      "A file transfer protocol built up from crypto primitives: 5 sub-protocols, 7 commands, AES-GCM for encryption and RSA for key exchange. Sequence numbers and per-message nonces handle replay.",
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
      "Finding crevasses in Antarctic satellite imagery with a UNet++ segmentation model. Accuracy went from 92.8% to 99.1%.",
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
      "Poking at what multilingual BERT actually learns, by checking its sentence embeddings against AMR semantic graphs on the MASSIVE dataset.",
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
      "Topic modelling and sentiment analysis on UNESCO misinformation data, plus a Shiny map that puts case counts next to the stories going around them.",
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
      "A working neural network in Java with no libraries at all, down to the linear algebra. It reads handwritten digits.",
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
      "A 2D space game with a procedurally generated universe. You fly around looking for one planet that may or may not be out there.",
    tags: ["Java"],
    url: "https://github.com/sergleonov/goldilocksgame",
  },
];

export const Projects = () => (
  <section id="work" className="container-site pt-24 md:pt-32">
    <div className="section-rule mb-8 md:mb-10">
      <h2 className="eyebrow flex items-baseline gap-3">
        selected work
        <span className="mono-label">({String(projects.length).padStart(2, "0")})</span>
      </h2>
      <span className="mono-label">2023 — present</span>
    </div>

    <div className="grid gap-y-10 md:grid-cols-2 md:gap-x-5 md:gap-y-12">
      {projects.map((project, i) => (
        <Reveal key={project.title} delay={(i % 2) * 80}>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor={project.external === false ? "read" : "view"}
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
        everything else on GitHub ↗
      </a>
    </Reveal>
  </section>
);
