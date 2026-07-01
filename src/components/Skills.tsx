import { skills } from "../data/resume";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="bg-black py-28 px-6 border-t border-white/5">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="mb-16 reveal">
          <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-4">Capabilities</p>
          <h2 className="font-serif text-white text-3xl md:text-4xl">What I work with.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal" style={{ animationDelay: "0.1s" }}>
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-5">
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="text-white/55 text-xs border border-white/10 hover:border-white/30 hover:text-white/80 px-3 py-1.5 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
