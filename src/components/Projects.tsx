import { projects } from "../data/resume";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Projects() {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="bg-black py-28 px-6 border-t border-white/5">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16 reveal">
          <div>
            <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-4">Selected Work</p>
            <h2 className="font-serif text-white text-3xl md:text-4xl">Things I've built.</h2>
          </div>
        </div>

        <div className="space-y-0 reveal" style={{ animationDelay: "0.1s" }}>
          {projects.map((proj, i) => (
            <div
              key={i}
              className="border-t border-white/10 last:border-b group"
            >
              <div className="py-10 grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 items-start">
                {/* Left */}
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-white/20 text-xs font-mono mb-2">{proj.year}</p>
                      <h3 className="font-serif text-white text-2xl md:text-3xl mb-1">
                        {proj.name}
                      </h3>
                      <p className="text-white/40 text-sm">{proj.subtitle}</p>
                    </div>
                    <a
                      href={proj.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white/30 hover:text-white transition-colors p-1 shrink-0"
                      aria-label={`Open ${proj.name}`}
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="text-white/35 text-[10px] tracking-widest uppercase border border-white/10 px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 mt-6 pt-6 border-t border-white/10">
                    {proj.metrics.map((m, j) => (
                      <div key={j}>
                        <p className="font-serif text-white text-xl">{m.value}</p>
                        <p className="text-white/30 text-xs tracking-wider mt-0.5">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <ul className="space-y-4">
                  {proj.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-4">
                      <span className="text-white/20 shrink-0 mt-2 w-1 h-1 rounded-full bg-white/20 block" />
                      <p className="text-white/50 text-sm leading-relaxed">{b}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
