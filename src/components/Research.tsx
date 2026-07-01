import { research } from "../data/resume";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Research() {
  const ref = useScrollReveal();

  return (
    <section id="research" className="bg-black py-28 px-6 border-t border-white/5">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-16 reveal">
          <div>
            <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-4">Research</p>
            <h2 className="font-serif text-white text-3xl md:text-4xl">
              Published work.
            </h2>
          </div>
          <span className="text-white/20 text-xs tracking-widest hidden md:block">
            15+ total
          </span>
        </div>

        <div className="space-y-0 reveal" style={{ animationDelay: "0.1s" }}>
          {research.map((paper, i) => (
            <div
              key={i}
              className="border-t border-white/10 last:border-b group"
            >
              <div className="py-6 flex items-start gap-6">
                <span className="text-white/20 text-xs font-mono pt-0.5 shrink-0 w-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white transition-colors mb-2">
                    {paper.title}
                  </p>
                  <span className="text-white/25 text-[10px] tracking-[0.2em] uppercase">
                    {paper.publisher}
                  </span>
                </div>
                {paper.url ? (
                  <a
                    href={paper.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/20 hover:text-white transition-colors shrink-0 mt-0.5"
                    aria-label="Open paper"
                  >
                    <ArrowUpRight size={15} />
                  </a>
                ) : (
                  <div className="w-[15px] shrink-0" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
