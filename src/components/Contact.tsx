import { personal } from "../data/resume";
import { ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const links = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { label: "LinkedIn", value: `in/${personal.linkedin}`, href: personal.linkedinUrl },
  { label: "GitHub", value: `@${personal.github}`, href: personal.githubUrl },
  { label: "Behance", value: `@${personal.behance}`, href: personal.behanceUrl },
];

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section id="contact" className="bg-black py-28 px-6 border-t border-white/5">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-16 items-start mb-20 reveal">
          <div>
            <p className="text-white/30 text-xs tracking-[0.25em] uppercase mb-6">Contact</p>
            <h2 className="font-serif text-white leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}>
              Let's build
              <br />
              something
              <br />
              <span className="text-white/25">together.</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed max-w-sm">
              Open to APM, Technical PM, and AI Product roles. Also interested in research collaborations and speaking engagements.
            </p>
          </div>

          <div className="space-y-0 pt-2">
            {links.map((l, i) => (
              <a
                key={i}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="flex items-center justify-between py-5 border-t border-white/10 group hover:bg-white/[0.02] transition-colors -mx-4 px-4"
              >
                <div>
                  <p className="text-white/25 text-[10px] tracking-[0.2em] uppercase mb-0.5">
                    {l.label}
                  </p>
                  <p className="text-white/70 text-sm group-hover:text-white transition-colors">
                    {l.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={14}
                  className="text-white/20 group-hover:text-white/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </a>
            ))}
            <div className="border-t border-white/10" />
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 reveal" style={{ animationDelay: "0.15s" }}>
          <p className="text-white/20 text-xs tracking-widest">
            Shreyash Srivastva · {new Date().getFullYear()}
          </p>
          <p className="text-white/15 text-xs tracking-widest">
            {personal.location}
          </p>
        </div>
      </div>
    </section>
  );
}
