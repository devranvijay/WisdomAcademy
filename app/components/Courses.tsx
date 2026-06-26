import Link from "next/link";
import { courses } from "../lib/courses";

export default function Courses() {
  return (
    <section id="courses" className="py-section px-gutter bg-surface">
      <div className="max-w-container-max mx-auto space-y-xl">

        {/* Header */}
        <div className="text-center space-y-md mx-auto reveal" style={{ maxWidth: "42rem" }}>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">Our Premium Courses</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Structured curriculum designed to master concepts and score high in boards and competitive exams.
            Coaching available since 2019.
          </p>
        </div>

        {/* Course cards grid — 2 col on mobile/tablet, 3 col on desktop */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-lg pt-lg">
          {courses.map(({ slug, icon, title, description, iconClass, delay, badge }) => (
            <div
              key={slug}
              className="glass-card p-xl rounded-24 flex flex-col h-full reveal group"
              style={{ transitionDelay: delay }}
            >
              <div className={`w-14 h-14 ${iconClass} rounded-xl flex items-center justify-center mb-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
                <span className="material-symbols-outlined text-3xl">{icon}</span>
              </div>

              {badge && (
                <span className="inline-block self-start bg-primary/10 text-primary font-label-sm text-label-sm px-sm py-xs rounded-full mb-sm">
                  {badge}
                </span>
              )}

              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">{title}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-xl flex-grow">{description}</p>

              <Link
                href={`/courses/${slug}`}
                className="text-primary font-label-md text-label-md flex items-center gap-xs hover:gap-md transition-all w-fit"
              >
                View Details
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
