import { Link } from "react-router-dom";

export const NotFound = () => (
  <div className="container-site flex min-h-screen flex-col items-start justify-center">
    <p className="mono-label mb-6">Error 404</p>
    <h1 className="text-[clamp(2.4rem,6vw,4.5rem)] font-black leading-[1.05] tracking-[-0.03em]">
      This page
      <br />
      doesn't exist<span className="text-brand">.</span>
    </h1>
    <Link to="/" className="link-line mt-10 text-sm font-medium">
      ← back to the index
    </Link>
  </div>
);
