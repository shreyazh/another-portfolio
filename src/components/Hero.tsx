import { useEffect, useRef } from "react";
import { personal, stats } from "../data/resume";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    const t = setTimeout(() => {
      el.style.width = "100%";
    }, 600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-black flex flex-col justify-between px-6 pt-16 pb-12"
    >
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Label */}
        <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-12 fade-up" style={{ animationDelay: "0.1s" }}>
          Product Engineer · AI Builder · Researcher
        </p>

        {/* Name */}
        <h1
          className="text-white font-serif leading-[1] mb-8 fade-up"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 8.5rem)",
            animationDelay: "0.2s",
          }}
        >
          Shreyash
          <br />
          <span className="text-white/20">Srivastva.</span>
        </h1>

        {/* Divider line */}
        <div className="overflow-hidden mb-10 fade-up" style={{ animationDelay: "0.35s" }}>
          <div
            ref={lineRef}
            className="h-px bg-white/20 transition-all duration-1000 ease-out"
            style={{ width: "0%" }}
          />
        </div>

        {/* Summary + CTA row */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <p className="text-white/50 text-sm leading-relaxed max-w-lg">
            {personal.summary}
          </p>
          <div className="flex flex-col gap-4 md:items-end justify-start">
            <p className="text-white/30 text-xs leading-relaxed md:text-right max-w-xs">
              {personal.seeking}
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 text-white text-xs tracking-[0.15em] border border-white/20 hover:border-white/60 hover:bg-white/5 px-5 py-3 transition-all group w-fit"
            >
              Get in touch
              <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-white/10 fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`py-6 ${i < 3 ? "md:border-r border-white/10" : ""} ${i >= 2 ? "border-t md:border-t-0 border-white/10" : ""}`}
            >
              <p className="font-serif text-white text-3xl mb-1" style={{ paddingLeft: i === 0 ? 0 : "1.5rem" }}>
                {s.value}
              </p>
              <p className="text-white/30 text-xs tracking-widest uppercase" style={{ paddingLeft: i === 0 ? 0 : "1.5rem" }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom social row */}
      <div className="max-w-6xl mx-auto w-full border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4 fade-up" style={{ animationDelay: "0.7s" }}>
        <div className="flex items-center gap-6">
          <a
            href={personal.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white/30 hover:text-white text-xs tracking-widest transition-colors"
          >
            GitHub
          </a>
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white/30 hover:text-white text-xs tracking-widest transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={personal.behanceUrl}
            target="_blank"
            rel="noreferrer"
            className="text-white/30 hover:text-white text-xs tracking-widest transition-colors"
          >
            Behance
          </a>
        </div>
        <p className="text-white/20 text-xs tracking-widest">{personal.location}</p>
      </div>
    </section>
  );
}
