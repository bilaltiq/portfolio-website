import { Reveal } from "./Reveal";

const experience = [
  {
    org: "Finosu (YC S24)",
    role: "Software Engineering Intern",
    place: "New York, NY",
    period: "Jun — Aug 2026",
    notes: [
      "Built the unified conversation-memory system now running behind 1.4M+ calls, compressing multi-call history into prompt-sized rolling summaries with live-state reconciliation and shadow-mode rollout — call-quality scores up 70% in the LendPop pilot.",
      "Shipped tool-calling AI chatbots to 12 lenders' borrower portals serving 60,000+ customers, with an agent tool layer that grounds replies in real-time account state rather than static prompt text.",
      "Engineered a login-triggered outbound-call service whose A/B rollout correlated with a 4× increase in on-time loan repayments.",
      "Collapsed inbound and outbound voice agents onto one shared configuration library, enabling deploy-free LLM/STT/TTS model swaps, and closed a 15-CVE security sweep.",
    ],
  },
  {
    org: "Layout",
    role: "Co-Founder & CTO",
    place: "Amherst, MA",
    period: "Oct 2024 — Present",
    notes: [
      "Architected a production 3D interior-design SaaS on serverless AWS — API Gateway with a custom Lambda authorizer, DynamoDB, and S3 provisioned as code via CDK, secured with OAuth 2.0 + PKCE on Cognito.",
      "Recruited and led a 7-engineer team over 20 months on push-to-main CI/CD, delivering auth, Stripe billing, AI furniture generation, and Babylon.js 3D rendering.",
    ],
  },
  {
    org: "Google exploreCSR — Brown University",
    role: "Undergraduate AI Researcher",
    place: "Providence, RI",
    period: "Jan — Apr 2025",
    notes: [
      "Rebuilt a CAD-to-sketch neural rendering pipeline around Graph Attention Networks with custom CUDA/C++ ops, leading implementation for a 5-person group — 17% faster convergence, accuracy from 87% to 93%.",
      "Won 1st place at the Brown & Google Undergraduate CS Research Symposium, across 40 researchers.",
    ],
  },
  {
    org: "Amherst College",
    role: "Gregory S. Call SWE Intern",
    place: "Amherst, MA",
    period: "2024",
    notes: [
      "TensorFlow UNet++ pipeline for Sentinel-1 crevasse detection, raising accuracy from 92.8% to 99.1%.",
      "Containerized the workflow for reproducible A100 GPU cluster deployment.",
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
            href="/Bilal-Tariq-Resume.pdf"
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
            <dd className="text-sm leading-relaxed">
              May 2027
              <br />
              <span className="text-muted-foreground">GPA 3.86 · Major 3.91</span>
            </dd>
          </div>
          <div>
            <dt className="mono-label mb-2">Focus</dt>
            <dd className="text-sm leading-relaxed">
              Machine Learning
              <br />
              Systems &amp; Visual Computing
            </dd>
          </div>
          <div>
            <dt className="mono-label mb-2">Currently</dt>
            <dd className="text-sm leading-relaxed">
              Building{" "}
              <a
                href="https://withlayout.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link-line"
              >
                Layout
              </a>
            </dd>
          </div>
          <div className="col-span-2">
            <dt className="mono-label mb-2">Honors &amp; Leadership</dt>
            <dd className="text-sm leading-relaxed text-muted-foreground">
              MeikleJohn Fellowship ($5,000 startup R&amp;D grant) · AI in the Liberal
              Arts Fellow · E-Board, CS Club · Core Organizer, “Hack The Herd”
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
        <span className="mono-label">2024 — 2026</span>
      </div>

      {experience.map((job, i) => (
        <Reveal
          key={job.org}
          delay={i * 70}
          className="group grid gap-3 border-b border-border py-7 md:grid-cols-12 md:gap-6"
        >
          <div className="md:col-span-2">
            <p className="mono-label">{job.period}</p>
            <p className="mono-label mt-1 opacity-60">{job.place}</p>
          </div>

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
