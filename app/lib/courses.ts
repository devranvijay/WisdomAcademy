export type CourseHighlight = { icon: string; text: string };

export type Course = {
  slug: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  iconClass: string;
  cardBg: string;
  delay: string;
  badge?: string;
  details: {
    overview: string;
    whoIsItFor: string[];
    subjects: { name: string; topics: string }[];
    highlights: CourseHighlight[];
  };
};

export const courses: Course[] = [
  {
    slug: "std-7-10",
    icon: "school",
    title: "Std. 7–10 Foundation",
    tagline: "Build a rock-solid academic base before boards",
    description: "Laying a rock-solid foundation for future academic challenges with conceptual clarity.",
    iconClass: "bg-primary/10 text-primary",
    cardBg: "from-primary/5",
    delay: "0ms",
    details: {
      overview:
        "This program builds deep conceptual understanding in all core subjects from Std. 7 to 10 (Maharashtra State Board). Small, focused batches ensure every student gets individual attention. Daily doubt sessions, weekly tests, and structured study material keep students consistently on track — not just before exams.",
      whoIsItFor: [
        "Std. 7, 8, 9 students wanting to build a strong base",
        "Std. 10 students preparing for upcoming board exams",
        "Students who want personal attention in a small batch",
      ],
      subjects: [
        { name: "Mathematics", topics: "Algebra, Geometry, Trigonometry, Statistics" },
        { name: "Science & Technology", topics: "Physics, Chemistry, Biology chapters" },
        { name: "English", topics: "Grammar, Comprehension, Writing Skills" },
        { name: "Social Science", topics: "History, Geography, Civics" },
      ],
      highlights: [
        { icon: "groups", text: "Small batches — max 15 students" },
        { icon: "quiz", text: "Weekly chapter-wise tests" },
        { icon: "support_agent", text: "Daily doubt-clearing sessions" },
        { icon: "menu_book", text: "Printed study material included" },
        { icon: "trending_up", text: "Progress tracked for every student" },
      ],
    },
  },
  {
    slug: "ssc-state-board",
    icon: "auto_graph",
    title: "SSC State Board",
    tagline: "Score 90+ in Maharashtra SSC boards",
    description: "Rigorous preparation focusing on the latest syllabus and exam patterns for peak performance.",
    iconClass: "bg-tertiary/10 text-tertiary",
    cardBg: "from-tertiary/5",
    delay: "100ms",
    details: {
      overview:
        "Intensive Std. 10 coaching covering the entire Maharashtra SSC syllabus. The focus is on understanding the board paper pattern, solving previous years' question papers, and maximising marks with time-tested strategies. Board exam preparation begins from Day 1 — not just the last month.",
      whoIsItFor: [
        "Std. 10 State Board students targeting 80%+ or 90%+",
        "Students struggling with Maths or Science",
        "Students who want structured board exam practice",
      ],
      subjects: [
        { name: "Mathematics Part 1 & 2", topics: "Algebra, Geometry with full board syllabus" },
        { name: "Science & Tech Part 1 & 2", topics: "Physics, Chemistry, Biology chapters" },
        { name: "Social Science", topics: "History, Political Science, Geography" },
        { name: "English", topics: "Grammar, Prose, Poetry, Letter Writing" },
      ],
      highlights: [
        { icon: "description", text: "Previous year board papers — fully solved" },
        { icon: "timer", text: "Timed practice tests under exam conditions" },
        { icon: "checklist", text: "Chapter-by-chapter revision plan" },
        { icon: "workspace_premium", text: "Last-minute scoring strategies" },
        { icon: "trending_up", text: "Consistent monthly progress reports" },
      ],
    },
  },
  {
    slug: "hsc-science",
    icon: "science",
    title: "HSC Science",
    tagline: "Master PCM/B for boards and entrance basics",
    description: "Specialized coaching for PCM/B with a focus on both boards and entrance exam basics.",
    iconClass: "bg-error/10 text-error",
    cardBg: "from-error/5",
    delay: "200ms",
    details: {
      overview:
        "Comprehensive Std. 11–12 coaching covering the Maharashtra HSC Science syllabus for both Physics-Chemistry-Maths (PCM) and Physics-Chemistry-Biology (PCB) streams. Heavy focus on numericals, diagrams, and conceptual clarity so students score well in boards while building a foundation for competitive entrance exams.",
      whoIsItFor: [
        "Std. 11 and 12 Science students (Maharashtra State Board)",
        "PCM students aiming for Engineering basics",
        "PCB students targeting Medical entrance foundations",
      ],
      subjects: [
        { name: "Physics", topics: "Mechanics, Electricity, Optics, Modern Physics — numericals & theory" },
        { name: "Chemistry", topics: "Organic, Inorganic, Physical Chemistry — equations & mechanisms" },
        { name: "Mathematics", topics: "Calculus, Vectors, Probability, Integration (PCM)" },
        { name: "Biology", topics: "Botany & Zoology with diagram-focused preparation (PCB)" },
      ],
      highlights: [
        { icon: "functions", text: "Numericals-heavy sessions for Physics & Maths" },
        { icon: "biotech", text: "Diagram-focused Biology coaching" },
        { icon: "science", text: "Reaction mechanisms for Chemistry" },
        { icon: "quiz", text: "Unit tests after every chapter" },
        { icon: "menu_book", text: "Concise notes for quick revision" },
      ],
    },
  },
  {
    slug: "hsc-commerce",
    icon: "account_balance",
    title: "HSC Commerce",
    tagline: "Excel in Accounts, Economics & OCM",
    description: "Expert guidance in Accounts, Economics, and OC to build a successful corporate career.",
    iconClass: "bg-secondary-container text-secondary",
    cardBg: "from-secondary/5",
    delay: "300ms",
    details: {
      overview:
        "Expert-led coaching for Std. 11–12 Commerce students covering Accounts, Economics, Organisation of Commerce & Management (OCM), and Business Mathematics. Practical, application-based teaching ensures students don't just memorize — they understand and can apply concepts in exam answers.",
      whoIsItFor: [
        "Std. 11 and 12 Commerce students (Maharashtra State Board)",
        "Students wanting to master Accounts journal entries and ledgers",
        "Students targeting 90%+ in board exams",
      ],
      subjects: [
        { name: "Accounts", topics: "Journal, Ledger, Trial Balance, Final Accounts, Partnership, Company Accounts" },
        { name: "Economics", topics: "Micro, Macro, Indian Economy, Statistics" },
        { name: "OCM", topics: "Organisation of Commerce, Business Services, Consumer Protection" },
        { name: "Business Mathematics", topics: "Algebra, Finance Mathematics, Linear Programming" },
      ],
      highlights: [
        { icon: "receipt_long", text: "Practical accounts journal entry sessions" },
        { icon: "bar_chart", text: "Diagram-based Economics answers" },
        { icon: "case_study", text: "Case study approach for OCM" },
        { icon: "star", text: "Scoring tips for maximum board marks" },
        { icon: "edit_note", text: "Format-focused answer writing practice" },
      ],
    },
  },
  {
    slug: "cbse",
    icon: "person_book",
    title: "CBSE Personal Coaching",
    tagline: "One-on-one CBSE coaching since 2019",
    description: "Personalised CBSE coaching for any standard — flexible schedule, NCERT-aligned, available since 2019.",
    iconClass: "bg-primary/10 text-primary",
    cardBg: "from-primary/5",
    delay: "400ms",
    badge: "Personal Coaching · Since 2019",
    details: {
      overview:
        "Individual and small-group coaching for CBSE students from Std. 5 to 12 — available since 2019. Sessions are curriculum-aligned with NCERT and scheduled flexibly around the student's school timetable. The focus is on identifying and fixing weak areas with a personalised plan for every student.",
      whoIsItFor: [
        "CBSE students from Std. 5 to 12",
        "Students who need personal attention beyond school",
        "Students with specific weak subjects who need targeted help",
      ],
      subjects: [
        { name: "Mathematics", topics: "NCERT-aligned, class-by-class from Std. 5–12" },
        { name: "Science", topics: "Physics, Chemistry, Biology (Std. 6–10)" },
        { name: "English", topics: "Grammar, Comprehension, Writing, Literature" },
        { name: "Commerce Electives", topics: "Accounts, Economics for Std. 11–12 Commerce" },
      ],
      highlights: [
        { icon: "person", text: "One-on-one or very small group (2–4)" },
        { icon: "schedule", text: "Flexible timing to suit school schedule" },
        { icon: "menu_book", text: "NCERT-first approach, extra resources as needed" },
        { icon: "monitoring", text: "Weekly progress updates shared with parents" },
        { icon: "calendar_month", text: "Available since 2019 — 6+ years of experience" },
      ],
    },
  },
  {
    slug: "icse",
    icon: "library_books",
    title: "ICSE Personal Coaching",
    tagline: "Dedicated ICSE personal coaching since 2019",
    description: "Comprehensive ICSE coaching for Std. 5–10 — one-on-one sessions, flexible schedule, since 2019.",
    iconClass: "bg-tertiary/10 text-tertiary",
    cardBg: "from-tertiary/5",
    delay: "500ms",
    badge: "Personal Coaching · Since 2019",
    details: {
      overview:
        "Dedicated personal coaching for ICSE board students (Std. 5–10) available since 2019. ICSE has a wider and more detailed syllabus compared to State Board — sessions are designed to cover every concept thoroughly, with emphasis on ICSE-style answer writing, application questions, and paper presentation.",
      whoIsItFor: [
        "ICSE students from Std. 5 to 10",
        "Students who find ICSE syllabus overwhelming",
        "Students targeting top scores in ICSE board exams",
      ],
      subjects: [
        { name: "Mathematics", topics: "Algebra, Geometry, Mensuration, Statistics — ICSE pattern" },
        { name: "Physics", topics: "Conceptual + numerical, ICSE paper style" },
        { name: "Chemistry", topics: "Organic & Inorganic, equation balancing, experiments" },
        { name: "Biology", topics: "Detailed diagrams and labelling, ICSE format" },
        { name: "English", topics: "Literature, Grammar, Composition — ICSE specific" },
        { name: "History & Civics / Geography", topics: "Map work, factual recall, structured answers" },
      ],
      highlights: [
        { icon: "person", text: "One-on-one personal attention" },
        { icon: "topic", text: "ICSE-specific answer writing techniques" },
        { icon: "schedule", text: "Flexible class timing" },
        { icon: "draw", text: "Diagram and map work practice" },
        { icon: "calendar_month", text: "Running successfully since 2019" },
      ],
    },
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((c) => c.slug === slug);
}
