"use client";

import { useState } from "react";

const navLinks = [
  { label: "Home",     href: "#" },
  { label: "About",    href: "#about" },
  { label: "Courses",  href: "#courses" },
  { label: "Faculty",  href: "#faculty" },
  { label: "Contact",  href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter h-20">
        <div className="font-headline-sm text-headline-sm font-bold text-primary">
          Wisdom Academy
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-xl">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-body-md text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-sm">
          <a
            href="#contact"
            className="hidden sm:block bg-primary text-white px-lg py-sm rounded-full font-label-md text-label-md hover:opacity-80 transition-all active:scale-95"
          >
            Enroll Now
          </a>
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-surface-container text-on-surface"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <span className="material-symbols-outlined text-[22px]">
              {open ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div
        className={`md:hidden bg-white border-t border-outline-variant/20 transition-all duration-300 overflow-hidden ${
          open ? "max-h-[28rem] pb-lg" : "max-h-0"
        }`}
      >
        <div className="flex flex-col px-gutter pt-md gap-xs">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="py-md px-md rounded-xl font-body-md text-body-md text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-sm w-full bg-primary text-white py-md rounded-xl font-label-md text-label-md text-center active:scale-95 transition-all"
          >
            Enroll Now
          </a>
        </div>
      </div>
    </nav>
  );
}
