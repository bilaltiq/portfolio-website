import { FigurePlate } from "./FigurePlate";
import { RoleRotator } from "./RoleRotator";

const lines = [
  <>
    Hi! I'm <span className="text-brand">Bilal</span> —
  </>,
  <>I build it, then</>,
  <>I get it shipped.</>,
];

export const HeroSection = () => (
  <section
    id="top"
    className="container-site grid items-center gap-12 pb-16 pt-28 md:min-h-[88vh] md:grid-cols-12 md:gap-10 md:pb-20 md:pt-36"
  >
    <div className="md:col-span-7">
      <p
        className="mono-label mb-6 opacity-0"
        style={{ animation: "fade-up 0.7s ease-out 0.1s forwards" }}
      >
        Software Engineer — Amherst, MA
      </p>

      <h1 className="text-[clamp(2.6rem,7vw,5.5rem)] font-black leading-[1.02] tracking-[-0.03em]">
        {lines.map((line, i) => (
          <div key={i} className="line-mask">
            <span
              className="line-rise"
              style={{ animationDelay: `${0.15 + i * 0.08}s` }}
            >
              {line}
            </span>
          </div>
        ))}
      </h1>

      <div
        className="max-w-[34rem] opacity-0"
        style={{ animation: "fade-up 0.7s ease-out 0.55s forwards" }}
      >
        <RoleRotator />

        <p className="mt-7 text-base leading-[1.5] text-muted-foreground">
          Conversation memory behind 1.4M+ calls at Finosu. CUDA kernels at Google
          exploreCSR. Seven engineers and a Stripe integration at Layout. CS &amp; Math
          at Amherst College.
        </p>
      </div>

      <div
        className="mt-10 flex items-center gap-8 opacity-0"
        style={{ animation: "fade-up 0.7s ease-out 0.68s forwards" }}
      >
        <a href="#work" className="link-line text-sm font-medium">
          Selected work ↓
        </a>
        <a href="#about" className="link-line text-sm text-muted-foreground">
          About me →
        </a>
      </div>
    </div>

    <div
      className="md:col-span-5 opacity-0"
      style={{ animation: "fade-up 0.8s ease-out 0.4s forwards" }}
    >
      <FigurePlate />
    </div>
  </section>
);
