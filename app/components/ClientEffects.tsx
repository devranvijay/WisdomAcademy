"use client";

import { useEffect } from "react";

export default function ClientEffects() {
  useEffect(() => {
    // ── Scroll reveal ──
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    // ── Animated counters ──
    const counters = document.querySelectorAll<HTMLElement>("[data-count]");
    counters.forEach((counter) => {
      const target = Number(counter.getAttribute("data-count"));
      const suffix = counter.getAttribute("data-suffix") ?? "+";
      let count = 0;
      const increment = target / 60;

      const counterObserver = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) return;
        counterObserver.unobserve(counter);

        const tick = () => {
          if (count < target) {
            count = Math.min(count + increment, target);
            counter.innerText = Math.ceil(count) + suffix;
            requestAnimationFrame(tick);
          } else {
            counter.innerText = target + suffix;
          }
        };
        tick();
      });
      counterObserver.observe(counter);
    });

    // ── Parallax blobs on mouse move ──
    const handleMouseMove = (e: MouseEvent) => {
      const blobs = document.querySelectorAll<HTMLElement>(".hero-blob");
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      blobs.forEach((blob, i) => {
        const factor = (i + 1) * 20;
        blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      revealObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
}
