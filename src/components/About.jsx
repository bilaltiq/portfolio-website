import { Reveal } from "./Reveal";

const experience = [
  {
    org: "Google Research × Brown University",
    role: "Research Assistant",
    period: "2025",
    notes: [
      "Built CAD-to-sketch models with Graph Attention Networks and diffusion — 4× faster with higher accuracy.",
      "Led the team, won the Brown–Google Symposium, and prepared an ISVC 2025 paper plus open-source release.",
    ],
  },
  {
    org: "Amherst College",
    role: "Gregory S. Call SWE Intern",
    period: "2024 — 2025",
    notes: [
      "TensorFlow UNet++ pipeline for Sentinel-1 crevasse detection, raising accuracy from 92.8% to 99.1%.",
      "Containerized the workflow for reproducible A100 GPU cluster deployment.",
    ],
  },
  {
    org: "Layout",
    role: "Co-Founder & CTO",
    period: "2024 — Present",
    notes: [
      "Led development of a 3D apartment visualization platform using React, Babylon, and AWS.",
      "Built and managed a 4-engineer team, secured real estate partnerships, and prepared a seed round.",
    ],
  },
];

export const About = () => (
  <section id="about" className="container-site pt-24 md:pt-32">
    <div className="section-rule mb-10 md:mb-14">
      <h2 className="eyebrow flex items-baseline gap-3">
        About
        <span className="mono-label">(Bio)</span>
      </h2>
      <span className="mono-label">Amherst, MA</span>
    </div>

    <div className="grid gap-12 md:grid-cols-12 md:gap-10">
      <Reveal className="md:col-span-7">
        <p className="text-[clamp(1.35rem,2.6vw,2rem)] font-medium leading-[1.25] tracking-[-0.02em]">
          I'm a machine learning and visual computing enthusiast building software
          that bridges technology and creativity — from AI-driven 3D modelling to
          customer-facing web applications.
        </p>
        <p className="mt-6 max-w-[38rem] text-base leading-[1.6] text-muted-foreground">
          This site collects the projects, experiments, and thoughts that come out of
          working at the intersection of code, design, and ML. Most of it starts as a
          question about how a machine can be taught to see something a person already
          understands at a glance.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-8">
          <a href="#contact" className="link-line text-sm font-medium">
            Get in touch →
          </a>
          <a
            href="/Bilal Tariq - Intern Resume 2025.pdf"
            download
            className="link-line text-sm text-muted-foreground"
          >
            Download resume ↓
          </a>
        </div>
      </Reveal>

      <Reveal className="md:col-span-5" delay={100}>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8">
          <div>
            <dt className="mono-label mb-2">Education</dt>
            <dd className="text-sm leading-relaxed">
              Amherst College
              <br />
              <span className="text-muted-foreground">CS &amp; Math, BA</span>
            </dd>
          </div>
          <div>
            <dt className="mono-label mb-2">Graduating</dt>
            <dd className="text-sm">May 2027</dd>
          </div>
          <div>
            <dt className="mono-label mb-2">Focus</dt>
            <dd className="text-sm leading-relaxed">
              Machine Learning
              <br />
              Visual Computing
            </dd>
          </div>
          <div>
            <dt className="mono-label mb-2">Currently</dt>
            <dd className="text-sm leading-relaxed">
              Building{" "}
              <a
                href="https://layout--layout-58451.us-central1.hosted.app"
                target="_blank"
                rel="noopener noreferrer"
                className="link-line"
              >
                Layout
              </a>
            </dd>
          </div>
        </dl>
      </Reveal>
    </div>

    {/* Experience — an index, not a stack of cards */}
    <div className="mt-20 md:mt-28">
      <div className="section-rule mb-2">
        <h3 className="eyebrow flex items-baseline gap-3">
          Experience
          <span className="mono-label">({String(experience.length).padStart(2, "0")})</span>
        </h3>
        <span className="mono-label">2024 — Present</span>
      </div>

      {experience.map((job, i) => (
        <Reveal
          key={job.org}
          delay={i * 70}
          className="group grid gap-3 border-b border-border py-7 md:grid-cols-12 md:gap-6"
        >
          <div className="mono-label md:col-span-2">{job.period}</div>

          <div className="md:col-span-4">
            <h4 className="text-lg font-medium tracking-tight">{job.org}</h4>
            <p className="mono-label mt-1">{job.role}</p>
          </div>

          <ul className="space-y-2 md:col-span-6">
            {job.notes.map((note) => (
              <li
                key={note}
                className="flex gap-3 text-sm leading-[1.6] text-muted-foreground"
              >
                <span className="mt-[0.6em] size-1 shrink-0 rounded-full bg-brand" />
                {note}
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  </section>
);
