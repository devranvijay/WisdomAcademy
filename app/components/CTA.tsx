export default function CTA() {
  return (
    <section className="py-section px-gutter">
      <div className="max-w-container-max mx-auto reveal">
        <div className="relative bg-primary rounded-[32px] overflow-hidden p-xxl text-center space-y-xl shadow-2xl">
          {/* Decorative background circles */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg fill="none" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20%" cy="50%" r="200" stroke="white" strokeWidth="1" />
              <circle cx="80%" cy="20%" r="150" stroke="white" strokeWidth="1" />
            </svg>
          </div>

          <h2 className="font-display-hero text-display-hero-mobile md:text-headline-lg text-white">
            Admissions Open for 2026–27
          </h2>
          <p
            className="font-body-lg text-body-lg text-primary-fixed mx-auto"
            style={{ maxWidth: "42rem" }}
          >
            Don&apos;t wait for the last minute. Secure your seat today and start
            your journey towards academic excellence with Vikas Sir.
          </p>

          <div className="flex flex-wrap justify-center gap-md relative z-10">
            <button className="bg-white text-primary px-xxl py-md rounded-24 font-label-md text-label-md hover:bg-surface-container-lowest transition-all active:scale-95">
              Enroll Now
            </button>
            <button className="bg-primary-fixed/20 border border-white/30 text-white px-xxl py-md rounded-24 font-label-md text-label-md hover:bg-primary-fixed/30 transition-all active:scale-95">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
