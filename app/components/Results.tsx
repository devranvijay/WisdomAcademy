const stats = [
  { count: 500, suffix: "+", label: "Active Students" },
  { count: 90,  suffix: "%", label: "Pass Percentage" },
  { count: 10,  suffix: "+", label: "Years Legacy" },
  { count: 1000, suffix: "+", label: "Success Stories" },
];

export default function Results() {
  return (
    <section id="results" className="py-section px-gutter bg-inverse-surface text-white">
      <div className="max-w-container-max mx-auto text-center space-y-xxl">
        <div className="space-y-md reveal">
          <h2 className="font-headline-lg text-headline-lg text-white">
            Results That Speak For Themselves
          </h2>
          <p className="font-body-lg text-body-lg text-surface-variant">
            Our students consistently rank among the top scorers in state and board exams.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-xl">
          {stats.map(({ count, suffix, label }, i) => (
            <div
              key={label}
              className="space-y-sm reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="font-display-hero text-display-hero-mobile md:text-display-hero text-primary-fixed font-bold"
                data-count={count}
                data-suffix={suffix}
              >
                0
              </div>
              <div className="font-label-md text-label-md text-surface-variant uppercase tracking-widest">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
