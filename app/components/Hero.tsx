import Image from "next/image";

const HERO_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAaYuAXfJ4k7au-UIuaRmD5iPTKmp7woK-Koarc1HSiaKpdBLrzUySrjMNqx8UfzRtc6E_TAmJhU5KFL9sYrN1bvoI-FRwjy9TcWB8P-FwUF0EZ7SNgPybWeo79f6NUgxGXdgptE1XaIHUlS9l9Oz5fXY_JCy6qcZiXfwp0srtNtbuAxYKAbL_Oz4NUf03jd-tyP1ZMA4ySIlIl0teBf8TyYHhrMbWk9TsOv6KtdgOM3W2xuMPXdvOvwZU0jSkYtAoLJofTgAv3W2Pe";

const stats = [
  { value: "500+", label: "Students", colorClass: "text-primary" },
  { value: "90%", label: "Success", colorClass: "text-tertiary" },
  { value: "10+", label: "Years", colorClass: "text-on-surface" },
];

const floatingCards = [
  {
    icon: "group",
    title: "Small Batches",
    subtitle: "Personalized Focus",
    iconClass: "bg-primary/10 text-primary",
    positionClass: "top-8 -left-8",
    animation: "",
  },
  {
    icon: "workspace_premium",
    title: "Expert Faculty",
    subtitle: "10+ Exp",
    iconClass: "bg-tertiary/10 text-tertiary",
    positionClass: "bottom-20 -right-6",
    animation: "delay-1",
  },
  {
    icon: "quiz",
    title: "Weekly Tests",
    subtitle: "Progress Tracking",
    iconClass: "bg-error/10 text-error",
    positionClass: "top-1/2 -right-4",
    animation: "delay-2",
  },
];

export default function Hero() {
  return (
    <header className="relative pt-28 md:pt-32 pb-xxl px-gutter overflow-hidden">
      {/* Parallax blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary hero-blob rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-tertiary hero-blob rounded-full" />

      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xxl items-center">
        {/* ── Left: Text Content ── */}
        <div className="space-y-xl">
          <div className="inline-flex items-center gap-sm bg-primary-fixed/30 text-primary px-md py-xs rounded-full font-label-md text-label-md">
            <span
              className="material-symbols-outlined text-[18px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              stars
            </span>
            Top Rated Coaching in Mumbai
          </div>

          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface leading-none">
            Build a Strong{" "}
            <span className="gradient-text">Academic Foundation</span> with
            Expert Guidance
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant w-full md:max-w-[30rem]">
            Join Vikas Sir&apos;s Wisdom Academy to unlock your true potential.
            We provide personalized attention and proven strategies for
            excellence.
          </p>

          <div className="flex flex-wrap gap-md">
            <button className="bg-primary text-on-primary px-xxl py-md rounded-24 font-label-md text-label-md shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
              Enroll Now
            </button>
            <button className="bg-surface-container-high text-on-surface px-xxl py-md rounded-24 font-label-md text-label-md hover:bg-surface-variant transition-all border border-outline-variant/30">
              Book Free Demo
            </button>
          </div>

          <div className="grid grid-cols-3 gap-lg pt-xl border-t border-outline-variant/20">
            {stats.map(({ value, label, colorClass }) => (
              <div key={label}>
                <div className={`font-headline-md text-headline-md font-bold ${colorClass}`}>
                  {value}
                </div>
                <div className="font-label-md text-label-md text-on-surface-variant">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Image + Floating Cards ── */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full h-[320px] sm:h-[400px] md:h-[500px] rounded-24 overflow-hidden shadow-2xl">
            <Image
              src={HERO_IMAGE_URL}
              alt="A focused student studying in a modern digital environment with floating educational icons"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Floating cards — hidden on mobile, visible md+ */}
          {floatingCards.map(({ icon, title, subtitle, iconClass, positionClass, animation }) => (
            <div
              key={title}
              className={`hidden md:flex absolute ${positionClass} glass-card p-md rounded-xl items-center gap-md animate-float ${animation} shadow-xl`}
            >
              <div className={`w-10 h-10 ${iconClass} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <span className="material-symbols-outlined">{icon}</span>
              </div>
              <div>
                <div className="font-label-md text-label-md text-on-surface font-semibold whitespace-nowrap">{title}</div>
                <div className="text-[10px] text-on-surface-variant">{subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
