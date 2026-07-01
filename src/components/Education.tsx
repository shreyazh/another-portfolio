import { education, certifications, coursework } from "../data/resume";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section className="bg-black py-28 px-6 border-t border-white/5">
      <div ref={ref} className="max-w-6xl mx-auto">
        {/* Education */}
        <div className="mb-20 reveal">
          <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-4">Education</p>
          {education.map((edu, i) => (
            <div key={i} className="border-t border-white/10 py-8">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div>
                  <h3 className="font-serif text-white text-xl mb-1">{edu.institution}</h3>
                  <p className="text-white/40 text-sm italic">{edu.degree}</p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <p className="text-white/30 text-xs">{edu.location}</p>
                  <p className="text-white/50 text-xs mt-0.5">{edu.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-20 reveal" style={{ animationDelay: "0.1s" }}>
          <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-4">
            Certifications
          </p>
          <div className="space-y-0">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="border-t border-white/10 last:border-b py-5 flex items-start justify-between gap-4 group"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-white/80 text-sm group-hover:text-white transition-colors">
                    {cert.title}
                  </p>
                  <p className="text-white/30 text-xs mt-0.5 italic">
                    {cert.issuer} — {cert.id}
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-3 text-right">
                  <span className="text-white/30 text-xs">{cert.date}</span>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/20 hover:text-white transition-colors"
                    aria-label="View certificate"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coursework */}
        <div className="reveal" style={{ animationDelay: "0.2s" }}>
          <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-6">Coursework</p>
          <div className="flex flex-wrap gap-2">
            {coursework.map((course) => (
              <span
                key={course}
                className="text-white/40 text-xs border border-white/10 px-3 py-1.5 hover:text-white/60 hover:border-white/20 transition-colors"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
