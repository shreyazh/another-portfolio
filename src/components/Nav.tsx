import { useState, useEffect } from "react";
import { personal } from "../data/resume";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Research", href: "#research" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const goto = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-black/95 backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <button
            onClick={() => goto("#hero")}
            className="text-white/80 hover:text-white text-sm tracking-[0.15em] transition-colors"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {personal.name.split(" ")[0][0]}
            {personal.name.split(" ")[1][0]}
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => goto(l.href)}
                className="text-white/50 hover:text-white text-xs tracking-[0.12em] transition-colors"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-white/70 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            />
            <span
              className={`block h-px bg-white/70 transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-5"
              }`}
            />
            <span
              className={`block w-5 h-px bg-white/70 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => goto(l.href)}
              className="text-white text-2xl tracking-[0.2em] hover:text-white/50 transition-colors"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
