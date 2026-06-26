const testimonials = [
  {
    initials: "RS",
    name: "Ranvijay Singh",
    role: "Student",
    color: "bg-primary text-white",
    quote:
      "I had a fantastic experience in this class. The teacher not only possesses a deep understanding of the subject but also has an exceptional ability to convey complex concepts in a clear and understandable manner. Their teaching style is both engaging and effective, making the learning process enjoyable. I highly recommend this class!",
  },
  {
    initials: "FA",
    name: "Faraz Afzal",
    role: "Student · 6 months ago",
    color: "bg-tertiary text-white",
    quote:
      "The classes have genuinely helped me improve because the sir focuses on every single student, not just the top performers. He explains concepts clearly, notices where each child struggles, and makes sure no one is left behind.",
  },
  {
    initials: "AS",
    name: "Abdus Subhaan Shaikh",
    role: "Student · 2 years ago",
    color: "bg-error text-white",
    quote:
      "Wisdom Academy is the best coaching class. Vikas Sir is the best — his teaching skill is up to the mark. Very hard working and always ready to help in all situations related to studies. I feel very confident while studying in his classes. God bless.",
  },
  {
    initials: "MA",
    name: "M A S",
    role: "Parent · 2 years ago",
    color: "bg-secondary text-white",
    quote:
      "I appreciate the efforts Vikas Sir takes for lectures and extra initiative to explain and make sure the student understood everything. Good coaching and ambience to make students comfortable to learn accurately.",
  },
];

function Stars() {
  return (
    <div className="flex gap-xs text-tertiary mb-md">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="material-symbols-outlined text-[16px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-section px-gutter bg-surface-container-low">
      <div className="max-w-container-max mx-auto space-y-xl">

        {/* Header */}
        <div className="text-center space-y-md reveal">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            What Our Students Say
          </h2>
          <div className="inline-flex items-center gap-sm bg-white border border-outline-variant/30 rounded-full px-lg py-sm shadow-sm">
            <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="font-headline-sm text-headline-sm text-on-surface font-bold">5.0</span>
            <div className="flex gap-xs text-tertiary">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              ))}
            </div>
            <span className="font-label-md text-label-md text-on-surface-variant">Google Reviews</span>
          </div>
        </div>

        {/*
          Scroll on mobile/tablet — solid white cards (no backdrop-filter = no lag).
          Grid on lg+.
          overscroll-x-contain stops vertical scroll chaining.
        */}
        <div
          className="flex overflow-x-auto gap-md pt-lg pb-sm no-scrollbar snap-x snap-mandatory overscroll-x-contain lg:grid lg:grid-cols-4 lg:overflow-visible lg:gap-lg"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {testimonials.map(({ initials, name, role, color, quote }, i) => (
            <div
              key={name}
              className="bg-white border border-outline-variant/20 shadow-sm p-lg rounded-24 flex flex-col snap-start flex-shrink-0 w-[248px] sm:w-[300px] lg:w-auto reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <Stars />
              {/* Quote — clamp to 4 lines on mobile, unclamped on lg */}
              <p className="font-body-md text-body-md text-on-surface-variant mb-lg italic flex-grow overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-sm pt-md border-t border-outline-variant/10">
                <div className={`w-8 h-8 rounded-full ${color} flex items-center justify-center flex-shrink-0 font-semibold text-xs`}>
                  {initials}
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold leading-tight">{name}</div>
                  <div className="font-label-sm text-label-sm text-on-surface-variant">{role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
