const vikasSir = {
  name: "Vikas Sir",
  credential: "M.Sc. Mathematics",
  title: "Founder & Head Faculty",
  subjects: ["Mathematics", "Science"],
  experience: "10+ Years",
  bio: "Vikas Sir founded Wisdom Academy in 2019 with one goal — to make quality coaching genuinely accessible. His teaching style deconstructs complex concepts into clear, memorable frameworks that work for every learning pace. With a Master's in Mathematics and a decade in the classroom, he has personally guided over 1,000 students to their best scores.",
  specialties: ["Conceptual Clarity", "Board Exam Strategy", "Doubt Clearing Sessions", "Foundation to Advanced"],
  stats: [
    { value: "1000+", label: "Students Guided" },
    { value: "90%",  label: "Pass Rate" },
    { value: "10+",  label: "Years Teaching" },
  ],
};

const otherFaculty = [
  {
    initials: "PN",
    name: "Priya Ma'am",
    title: "English & SSC Expert",
    subjects: ["English", "SSC Board"],
    experience: "7 Years",
    specialties: ["Grammar & Writing", "Comprehension"],
    colorClass: "bg-tertiary/10 text-tertiary border-tertiary/20",
    tagClass: "bg-tertiary/10 text-tertiary",
  },
  {
    initials: "RS",
    name: "Rajesh Sir",
    title: "Science Specialist",
    subjects: ["Physics", "Chemistry"],
    experience: "8 Years",
    specialties: ["Numerical Problems", "Lab Concepts"],
    colorClass: "bg-error/10 text-error border-error/20",
    tagClass: "bg-error/10 text-error",
  },
  {
    initials: "SM",
    name: "Snehal Ma'am",
    title: "Commerce Expert",
    subjects: ["Accounts", "Economics", "OC"],
    experience: "6 Years",
    specialties: ["Journal Entries", "Business Studies"],
    colorClass: "bg-secondary-container text-secondary border-secondary/20",
    tagClass: "bg-secondary-container text-secondary",
  },
];

export default function Faculty() {
  return (
    <section id="faculty" className="py-section px-gutter bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto space-y-xl">
        {/* Section header */}
        <div className="text-center space-y-md reveal">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Meet Our <span className="text-primary">Faculty</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mx-auto" style={{ maxWidth: "36rem" }}>
            Each teacher brings deep subject expertise and a genuine passion for helping students succeed.
          </p>
        </div>

        {/* ── Vikas Sir — Featured Card ── */}
        <div className="glass-card rounded-24 p-xl md:p-xxl reveal overflow-hidden relative">
          {/* Subtle background accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />

          <div className="grid md:grid-cols-5 gap-xl md:gap-xxl items-center relative z-10">
            {/* Avatar + Stats */}
            <div className="md:col-span-2 flex flex-col items-center gap-lg">
              <div className="relative">
                <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/30">
                  <span className="text-white font-bold" style={{ fontSize: "4rem" }}>V</span>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-white rounded-full px-md py-xs shadow-lg flex items-center gap-xs border border-outline-variant/20">
                  <span
                    className="material-symbols-outlined text-tertiary text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    workspace_premium
                  </span>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">Founder</span>
                </div>
              </div>

              <div className="flex gap-xl w-full justify-center">
                {vikasSir.stats.map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <div className="font-headline-sm text-headline-sm text-primary font-bold">{value}</div>
                    <div className="font-label-md text-label-md text-on-surface-variant">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="md:col-span-3 space-y-lg">
              <div>
                <div className="inline-flex items-center gap-sm bg-primary-fixed/40 text-primary px-md py-xs rounded-full font-label-md text-label-md mb-sm">
                  <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                    school
                  </span>
                  {vikasSir.title}
                </div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">{vikasSir.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mt-xs">
                  {vikasSir.credential} &nbsp;·&nbsp; {vikasSir.subjects.join(" & ")} &nbsp;·&nbsp; {vikasSir.experience}
                </p>
              </div>

              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {vikasSir.bio}
              </p>

              <div className="flex flex-wrap gap-sm">
                {vikasSir.specialties.map((s) => (
                  <span
                    key={s}
                    className="bg-primary/10 text-primary font-label-md text-label-md px-md py-xs rounded-full border border-primary/20"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Other Faculty — Grid ── */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-lg">
          {otherFaculty.map(({ initials, name, title, subjects, experience, specialties, colorClass, tagClass }, i) => (
            <div
              key={name}
              className="glass-card p-xl rounded-24 space-y-lg reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-md">
                <div className={`w-16 h-16 rounded-xl ${colorClass} border flex items-center justify-center flex-shrink-0`}>
                  <span className="font-bold text-xl">{initials}</span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">{name}</h4>
                  <p className="font-label-md text-label-md text-on-surface-variant">{title}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-xs">
                {subjects.map((s) => (
                  <span key={s} className="text-[11px] bg-surface-container text-on-surface-variant px-sm py-xs rounded-full font-medium">
                    {s}
                  </span>
                ))}
                <span className="text-[11px] bg-surface-container text-on-surface-variant px-sm py-xs rounded-full font-medium">
                  {experience}
                </span>
              </div>

              <div className="flex flex-wrap gap-xs pt-xs border-t border-outline-variant/20">
                {specialties.map((s) => (
                  <span key={s} className={`text-[11px] ${tagClass} px-sm py-xs rounded-full font-medium`}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
