import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const reveals = el.querySelectorAll<HTMLElement>(".reveal");
            reveals.forEach((r, i) => {
              const delay = parseFloat(r.style.animationDelay || "0");
              r.style.transitionDelay = `${delay}s`;
              r.classList.add("revealed");
            });
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
