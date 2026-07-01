import { useState } from "react";
import { experience } from "../data/resume";
import { Plus, Minus } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Experience() {
  const [open, setOpen] = useState<number>(0);
  const ref = useScrollReveal();

  return (
    <section id="experience" className="bg-black py-28 px-6 border-t border-white/5">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16 reveal">
          <div>
            <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-4">Experience</p>
            <h2 className="font-serif text-white text-3xl md:text-4xl">Where I've worked.</h2>
          </div>
          <span className="text-white/20 text-xs tracking-widest hidden md:block">
            {experience.length} roles
          </span>
        </div>

        <div className="space-y-0 reveal" style={{ animationDelay: "0.1s" }}>
          {experience.map((exp, i) => (
            <div key={i} className="border-t border-white/10 last:border-b">
              <button
                className="w-full py-7 flex items-start gap-6 group text-left"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span className="text-white/20 text-xs font-mono pt-1 shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1">
                    <span className="text-white text-base group-hover:text-white/80 transition-colors">
                      {exp.company}
                    </span>
                    <span className="text-white/30 text-sm italic">{exp.role}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((t) => (
                      <span key={t} className="text-white/30 text-[10px] tracking-widest uppercase">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="shrink-0 text-right flex items-start gap-4">
                  <div className="hidden sm:block text-right">
                    <p className="text-white/40 text-xs">{exp.period}</p>
                    <p className="text-white/20 text-xs">{exp.location}</p>
                  </div>
                  <div className="text-white/40 group-hover:text-white/70 transition-colors mt-0.5">
                    {open === i ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </div>
              </button>

              {open === i && (
                <div className="pl-12 pb-8">
                  <div className="sm:hidden mb-4 flex gap-4 text-xs text-white/30">
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-4">
                        <span className="text-white/20 shrink-0 mt-1.5 w-1 h-1 rounded-full bg-white/20 block" />
                        <p className="text-white/50 text-sm leading-relaxed">{b}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
