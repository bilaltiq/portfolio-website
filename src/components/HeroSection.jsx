import { FigurePlate } from "./FigurePlate";
import { EducationBadge } from "./EducationBadge";
import { MarkWatermark } from "./MarkWatermark";

const lines = [
  <>
    eng<span className="text-brand">.</span>
  </>,
  <>
    touch of product<span className="text-brand">.</span>
  </>,
  <>
    also love talking<span className="text-brand">.</span>
  </>,
];

export const HeroSection = () => (
  <section
    id="top"
    className="container-site relative grid items-center gap-12 pb-16 pt-28 md:min-h-[88vh] md:grid-cols-12 md:gap-10 md:pb-20 md:pt-36"
  >
    {/* Fills the gap between the headline's ragged right edge and the plate */}
    <MarkWatermark side="left" size="44vmin" top="2%" offset="26%" drift={80} />

    <div className="md:col-span-7">
      <p
        className="mono-label mb-6 opacity-0"
        style={{ animation: "fade-up 0.7s ease-out 0.1s forwards" }}
      >
        bilal tariq — forward deployed, nyc
      </p>

      <h1 className="text-[clamp(2.2rem,5.8vw,5.4rem)] font-black leading-[1.03] tracking-[-0.03em]">
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
        className="mt-9 max-w-[34rem] opacity-0"
        style={{ animation: "fade-up 0.7s ease-out 0.55s forwards" }}
      >
        <p className="text-base lowercase leading-[1.5] text-muted-foreground">
          i build things that go live inside someone else's stack. at finosu that was
          llm voice and chat across 12 lenders, in front of 151.6k borrowers. before
          that, cuda and graph networks at google explorecsr.
        </p>

        <div className="mt-5 flex flex-col gap-2.5 sm:max-w-[24rem]">
          <EducationBadge school="amherst college" detail="cs & math, ba — may 2027" />
          <EducationBadge school="ait budapest" detail="computer science — study abroad" />
        </div>
      </div>

      <div
        className="mt-10 flex items-center gap-8 opacity-0"
        style={{ animation: "fade-up 0.7s ease-out 0.68s forwards" }}
      >
        <a href="#work" className="link-line text-sm font-medium">
          selected work ↓
        </a>
        <a href="#about" className="link-line text-sm text-muted-foreground">
          about me →
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
