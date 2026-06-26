import { notFound } from "next/navigation";
import Link from "next/link";
import { courses, getCourseBySlug } from "../../lib/courses";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ClientEffects from "../../components/ClientEffects";
import WhatsAppButton from "../../components/WhatsAppButton";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: `${course.title} — Wisdom Academy`,
    description: course.tagline,
  };
}

export default async function CoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const { title, tagline, icon, iconClass, badge, details } = course;

  return (
    <>
      <ClientEffects />
      <WhatsAppButton />
      <Navbar />

      <main className="bg-surface min-h-screen">

        {/* ── Breadcrumb ── */}
        <div className="max-w-container-max mx-auto px-gutter pt-xl pb-md">
          <Link
            href="/#courses"
            className="inline-flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]">arrow_back</span>
            Back to Courses
          </Link>
        </div>

        {/* ── Course Hero ── */}
        <section className="max-w-container-max mx-auto px-gutter pb-section">
          <div className="glass-card rounded-24 p-xl md:p-xxl reveal">
            <div className="flex flex-col md:flex-row md:items-start gap-xl">

              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl ${iconClass} flex items-center justify-center flex-shrink-0`}>
                <span className="material-symbols-outlined text-5xl">{icon}</span>
              </div>

              <div className="flex-grow">
                {badge && (
                  <span className="inline-block bg-primary/10 text-primary font-label-sm text-label-sm px-md py-xs rounded-full mb-md">
                    {badge}
                  </span>
                )}
                <h1 className="font-headline-lg text-headline-lg text-on-surface">{title}</h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-md">{tagline}</p>

                {/* Quick contact bar */}
                <div className="flex flex-wrap gap-md mt-xl">
                  <a
                    href={`https://wa.me/919930939858?text=Hi%20Vikas%20Sir%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(title)}%20course.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-sm bg-[#25D366] text-white px-xl py-md rounded-xl font-label-md text-label-md hover:opacity-90 transition-opacity shadow-md"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Enquire on WhatsApp
                  </a>
                  <a
                    href="tel:+919930939858"
                    className="inline-flex items-center gap-sm border border-primary text-primary px-xl py-md rounded-xl font-label-md text-label-md hover:bg-primary/5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">call</span>
                    +91 99309 39858
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Main Content ── */}
        <section className="max-w-container-max mx-auto px-gutter pb-section">
          <div className="grid md:grid-cols-3 gap-xl">

            {/* Left column — 2/3 width */}
            <div className="md:col-span-2 space-y-xl">

              {/* Overview */}
              <div className="reveal">
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-md">About This Course</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {details.overview}
                </p>
              </div>

              {/* Who is it for */}
              <div className="reveal">
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-md">Who Is This For?</h2>
                <ul className="space-y-sm">
                  {details.whoIsItFor.map((item) => (
                    <li key={item} className="flex items-start gap-md">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-xs flex-shrink-0" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="font-body-md text-body-md text-on-surface-variant">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subjects */}
              <div className="reveal">
                <h2 className="font-headline-sm text-headline-sm text-on-surface mb-md">Subjects Covered</h2>
                <div className="grid sm:grid-cols-2 gap-md">
                  {details.subjects.map(({ name, topics }) => (
                    <div key={name} className="glass-card p-lg rounded-24">
                      <div className="font-label-md text-label-md text-primary font-semibold mb-xs">{name}</div>
                      <div className="font-body-md text-body-md text-on-surface-variant">{topics}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column — highlights */}
            <div className="space-y-lg">

              {/* Highlights */}
              <div className="bg-primary text-white rounded-24 p-xl reveal sticky top-24">
                <h3 className="font-headline-sm text-headline-sm font-semibold mb-lg">Key Highlights</h3>
                <ul className="space-y-md">
                  {details.highlights.map(({ icon: hi, text }) => (
                    <li key={text} className="flex items-start gap-md">
                      <span className="material-symbols-outlined text-primary-fixed text-[20px] flex-shrink-0 mt-xs">{hi}</span>
                      <span className="font-body-md text-body-md text-on-primary/90">{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-xl pt-xl border-t border-white/20">
                  <div className="font-label-md text-label-md text-primary-fixed mb-sm">Location</div>
                  <div className="font-body-md text-body-md text-on-primary/80">
                    Marol, Andheri East, Mumbai – 400059
                  </div>
                  <div className="font-label-md text-label-md text-primary-fixed mt-md mb-sm">Timings</div>
                  <div className="font-body-md text-body-md text-on-primary/80">Open · Closes 8:00 PM</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
