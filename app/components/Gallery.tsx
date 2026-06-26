import Image from "next/image";

const bentoItems = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzZ--qN9O7MdIgdBiZ4I1ZQo3NDyypUmZs9l5ISj4HetB5aY-HRzarP8mkkDWmPS-Azf3525Mn7O_3YQpS5hMgmUdFAGyQmt1U68xqPFE5Io8TaimahjNygrT3sOHDAB1ZRcrBUP-8ROin1eVEADQVT3KHVGUm4bdnECsRW3N8SG32Ocktt4JFnzfpkV-QyDNSc1yTYdvRRlZWI7DLi8-19diHJ52nZOsnbnPaIcinTi7EIwYY9phTS3x8SEVLgorNRi5lyhyPOgkU",
    alt: "Students actively engaged in an interactive classroom session",
    icon: "groups",
    tag: "Interactive Classes",
    title: "Every question answered",
    description: "Live sessions with real-time doubt clearing",
    // Desktop: wide top-left. Mobile: full width
    gridClass: "col-span-2 md:col-span-2",
    heightClass: "h-56 md:h-full",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDDqe8q5VW8EMwte1Pbgw54ACgPrPcM3DDMaxhqW2Ro65htY1JVDetgYYeOTAbxMS25EIZm5DYpBJyGnOYhzSWC5n8nCqagXgJjuc8HB3rpvMzizo8BN7GioVV90p22DfwCwC2a1Vh7AxT1KgbXSLHtM4LNUqBRC9xlj6EjN4TQeQgb1F26ch_mfaJ41Ypky6sIT9jhsdfVSeNgla6-XEisBUx7Yd_ZjQXFc0ROvu5TTCpl7_yw9LUtQ-RjLaYcMI_QO0opl2MyGJF9",
    alt: "Minimalist study area with premium lighting",
    icon: "menu_book",
    tag: "Study Space",
    title: "Built for deep focus",
    description: "Modern desks, natural light, zero distraction",
    // Desktop: tall right col-3. Mobile: half width
    gridClass: "md:row-span-2",
    heightClass: "h-48 md:h-full",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXofAHVswomZcB2xKYhQvmjbwthK822yiqPtuqBXzZaohCeZ3d36Yi-bHRjZ1DL2ltCXeuZtfHpNpZelNZgeTSM4lXkD1sZq2FTVxF0tNWpKC0DWJa63DxTedDhxudK7zE57bMFNo-92Kg6wPKsoM6FFjOYoPaVXlGl9eGMwOcSq_znRMcqQmEvmqHO1fru2tYaCtVoPKV2mzjzBClmqExHR1y5XX0Py6TEaVmJgg4az1Wr2Kfe7T-yoZrDHrr46d3FinI-hL6nn8y",
    alt: "Student receiving trophy at award ceremony",
    icon: "emoji_events",
    tag: "Achievements",
    title: "Celebrating every win",
    description: "Recognition that builds confidence",
    // Desktop: tall right col-4. Mobile: half width
    gridClass: "md:row-span-2",
    heightClass: "h-48 md:h-full",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8RJ6vYyu5HZaw3--ljOEl4zgycLSnLlUawWK9lPMmAbRk4ROVNqzGIajTz0mqcGv4v0uNi8UzphQETgvdmvkNKUV_T-AXimaFYpzLpLs3aYVpyiNnkRCXInOPxb4cy7XItaEqQtazxi-bTiZ6J3VGyAiI5BDS2V_CTm1eCY8R-oanj0lENhNz1XTOtPYfIdRmXam8V2lRU9npfa75FrO7Q4LvwZxPvT0KcJONau7UrFCXRpeJW9MkDP3mru93VD-J1nAU4PEUYnfy",
    alt: "Students collaborating on a group project in bright lounge",
    icon: "diversity_3",
    tag: "Collaboration",
    title: "Better together",
    description: "Peer learning and group problem-solving",
    // Desktop: wide bottom-left. Mobile: full width
    gridClass: "col-span-2 md:col-span-2",
    heightClass: "h-52 md:h-full",
  },
];

export default function Gallery() {
  return (
    <section className="py-section px-gutter bg-surface">
      <div className="max-w-container-max mx-auto space-y-xl">

        {/* Section header — editorial layout */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-md reveal">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Life at <span className="text-primary">Wisdom Academy</span>
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant sm:text-right" style={{ maxWidth: "24rem" }}>
            Captured moments of learning, growth, and celebration inside our classrooms.
          </p>
        </div>

        {/*
          Bento grid — 4 col × 2 row on desktop, 2 col on mobile.
          DOM order drives auto-placement:
            Item 1 (col-span-2) → cols 1-2, row 1
            Item 2 (row-span-2) → col 3,    rows 1-2
            Item 3 (row-span-2) → col 4,    rows 1-2
            Item 4 (col-span-2) → cols 1-2, row 2
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 md:h-[580px] gap-3 reveal">
          {bentoItems.map(({ src, alt, icon, tag, title, description, gridClass, heightClass }) => (
            <div
              key={tag}
              className={`${gridClass} ${heightClass} relative rounded-24 overflow-hidden group cursor-pointer shadow-lg`}
            >
              {/* Background photo */}
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Persistent dark gradient so text is always readable */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

              {/* Subtle primary color wash on hover */}
              <div className="absolute inset-0 bg-primary/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Top-left: glass tag */}
              <div className="absolute top-4 left-4 z-10">
                <div className="inline-flex items-center gap-xs bg-white/15 backdrop-blur-md text-white px-md py-xs rounded-full border border-white/25 shadow-sm">
                  <span className="material-symbols-outlined text-[14px]">{icon}</span>
                  <span className="font-label-md text-label-md font-semibold tracking-wide">{tag}</span>
                </div>
              </div>

              {/* Bottom: title (always shown) + description (hover reveal) */}
              <div className="absolute bottom-0 left-0 right-0 p-lg z-10 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-headline-sm text-headline-sm font-semibold leading-snug">
                  {title}
                </p>
                <p className="text-white/75 font-body-md text-body-md mt-xs max-h-0 overflow-hidden opacity-0 group-hover:max-h-8 group-hover:opacity-100 transition-all duration-300 delay-75">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
