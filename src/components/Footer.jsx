import { Reveal } from "./Reveal";

const meta = [
  {
    label: "Social",
    value: "LinkedIn ↗",
    href: "https://www.linkedin.com/in/tariq-bilal/",
  },
  { label: "GitHub", value: "bilaltiq ↗", href: "https://github.com/bilaltiq" },
  {
    label: "Instagram",
    value: "mbtoshq ↗",
    href: "https://www.instagram.com/mbtoshq/",
  },
  { label: "Location", value: "New York, NY" },
];

export const Footer = () => (
  <footer
    id="contact"
    className="mt-28 overflow-hidden border-t border-border md:mt-40"
  >
    <div className="container-site pt-16 md:pt-24">
      <Reveal>
        <p className="mono-label">Get in touch</p>

        <a
          href="mailto:mtariq27@amherst.edu"
          data-cursor="Say hi"
          className="group mt-4 inline-block"
        >
          <span className="text-[clamp(1.5rem,5.2vw,4.5rem)] font-medium leading-[1.05] tracking-tight transition-colors duration-300 group-hover:text-brand">
            mtariq27@amherst.edu
          </span>
          <span className="ml-3 inline-block text-[clamp(1.2rem,3.4vw,2.6rem)] text-brand transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        </a>

        <p className="mt-5 max-w-[34rem] text-sm leading-[1.6] text-muted-foreground">
          Open to conversations about engineering, product, and the space between
          them. I read everything that comes in.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-8 md:mt-16 md:grid-cols-4">
          {meta.map((item) => (
            <div key={item.label}>
              <p className="mono-label mb-2">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </div>

    {/* Outlined wordmark — decorative, so it stays out of the a11y tree */}
    <Reveal
      aria-hidden="true"
      className="container-site pointer-events-none select-none"
      delay={120}
    >
      <div
        className="mt-14 whitespace-nowrap text-center text-[min(12.5vw,12.5rem)] font-bold leading-[0.85] tracking-tight text-transparent md:mt-20"
        style={{
          WebkitTextStroke:
            "1px color-mix(in srgb, var(--foreground) 22%, transparent)",
        }}
      >
        BILAL TARIQ
      </div>
    </Reveal>

    <div className="border-t border-border">
      <div className="container-site flex flex-col gap-2 py-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Bilal Tariq — All rights reserved</p>
        <p>Type: Inter · IBM Plex Mono</p>
      </div>
    </div>
  </footer>
);
