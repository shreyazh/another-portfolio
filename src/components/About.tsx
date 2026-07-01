import { achievements, personal } from "../data/resume";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="bg-black py-28 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 items-start mb-24 reveal">
          <div>
            <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-4">About</p>
            <h2 className="font-serif text-white text-3xl md:text-4xl leading-snug">
              Building at the intersection of product & AI.
            </h2>
          </div>
          <div className="space-y-4">
            <p className="text-white/60 text-sm leading-loose">
              I'm a product-minded engineer who builds and ships AI-powered products end to end — from user research and roadmapping to deployment and iteration. I've won 12 global hackathons across AI, FinTech, Climate, and Sustainability domains, earned a NASA challenge win, and co-authored 15+ research papers published in IEEE, Springer, and Wiley.
            </p>
            <p className="text-white/60 text-sm leading-loose">
              Beyond building, I've mentored 450+ developers in AI/ML as part of Google Developers Group, volunteered as an educator, and competed at state level chess. I believe great products are born from deep user empathy, rigorous data analysis, and relentless execution.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {[personal.email, "Lucknow, India", "B.Tech CSE 2026"].map((item) => (
                <span key={item} className="text-white/40 text-xs border border-white/15 px-3 py-1.5">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements grid */}
        <div className="reveal" style={{ animationDelay: "0.15s" }}>
          <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-8">Highlights</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="bg-black p-6 group hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-start gap-4">
                  <span className="text-white/15 text-xs font-mono pt-0.5 shrink-0 w-6">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-white text-sm mb-1 group-hover:text-white/90 transition-colors">
                      {a.highlight}
                    </p>
                    {a.detail && (
                      <p className="text-white/35 text-xs leading-relaxed">{a.detail}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
