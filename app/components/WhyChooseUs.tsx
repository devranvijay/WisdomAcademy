import Image from "next/image";

const DESK_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCzbwYTMSym65_pEboiO-wXt8K5HOLzR5HzVOdMo-YnS0zXGN-0TxRyn_8rtcIAirDYn4gnf7Vjn8GpRE9YWtwuxuQlKHYn8sVL_wOh1eTzak9GTJHTVdhSelrFMtOZUj96v2lQRsTCVB03K6bNx1TjSSQE5BFbdPtL0appctmeiQEi3OIxKlnS90ONRAkUnGjEbSkluzBqziBeH887FyRsAVBgXgeqn0tP4cJY4NBVadAtjHPQCQdmvGhnZ-DIXkOJDb0wp_jjmYHt";

const features = [
  {
    icon: "person_pin",
    title: "Personalized Attention",
    description: "We limit our batch sizes to ensure every student's queries are addressed individually.",
    delay: "0ms",
  },
  {
    icon: "library_books",
    title: "Curated Study Material",
    description: "Self-designed notes that are concise, easy to understand, and highly effective for revision.",
    delay: "100ms",
  },
  {
    icon: "update",
    title: "Regular Assessments",
    description: "Weekly chapter-wise tests and full-length prelims to build exam confidence.",
    delay: "200ms",
  },
  {
    icon: "call",
    title: "Parent Connect",
    description: "Transparent feedback system with regular parent-teacher meetings to track progress.",
    delay: "300ms",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-section px-gutter">
      <div className="max-w-container-max mx-auto grid md:grid-cols-3 gap-lg">
        {/* Left column */}
        <div className="md:col-span-1 space-y-md reveal">
          <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
            Why Choose Wisdom Academy?
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            We don&apos;t just teach; we mentor students to become thinkers and problem solvers.
          </p>
          <div className="pt-lg">
            <div className="relative rounded-24 w-full h-48 overflow-hidden shadow-lg">
              <Image
                src={DESK_IMAGE_URL}
                alt="Premium stationery on a modern desk symbolizing precision and academic excellence"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right feature grid */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-lg">
          {features.map(({ icon, title, description, delay }) => (
            <div
              key={title}
              className="p-lg bg-surface-container-low rounded-24 space-y-md reveal"
              style={{ transitionDelay: delay }}
            >
              <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center text-primary">
                <span className="material-symbols-outlined">{icon}</span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface">{title}</h4>
              <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
