const navLinks = [
  { label: "Home",    href: "#" },
  { label: "About",   href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Faculty", href: "#faculty" },
  { label: "Contact", href: "#contact" },
];

const PHONE    = "+91 99309 39858";
const MAPS_URL = "https://maps.app.goo.gl/J6qajsc6W2xdpkF27";
const WA_URL   = "https://wa.me/919930939858";

export default function Footer() {
  return (
    <footer className="bg-inverse-surface">
      <div className="max-w-container-max mx-auto px-gutter py-xxl">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-xl pb-xl border-b border-white/10">

          {/* Brand */}
          <div className="space-y-md">
            <div className="font-headline-sm text-headline-sm font-bold text-primary-fixed">
              Wisdom Academy
            </div>
            <p className="font-body-md text-body-md text-surface-variant leading-relaxed">
              Expert coaching for SSC, HSC &amp; Foundation — Andheri East, Mumbai.
            </p>
            {/* Google rating */}
            <div className="inline-flex items-center gap-sm bg-white/10 rounded-full px-md py-xs">
              <span className="material-symbols-outlined text-tertiary-fixed text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
              <span className="text-white font-semibold text-sm">5.0</span>
              <span className="text-surface-variant text-xs">(64 Reviews)</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-md">
            <div className="font-label-md text-label-md text-primary-fixed font-semibold uppercase tracking-wider">
              Quick Links
            </div>
            <div className="flex flex-col gap-sm">
              {navLinks.map(({ label, href }) => (
                <a key={label} href={href} className="font-body-md text-body-md text-surface-variant hover:text-white transition-colors">
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div className="space-y-md">
            <div className="font-label-md text-label-md text-primary-fixed font-semibold uppercase tracking-wider">
              Courses
            </div>
            <div className="flex flex-col gap-sm font-body-md text-body-md text-surface-variant">
              <span>Std. 7–10 Foundation</span>
              <span>SSC State Board</span>
              <span>Mathematics Exams</span>
              <span>HSC Science</span>
              <span>HSC Commerce</span>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-md">
            <div className="font-label-md text-label-md text-primary-fixed font-semibold uppercase tracking-wider">
              Contact
            </div>
            <div className="space-y-sm">
              <a href={`tel:+919930939858`} className="flex items-start gap-sm text-surface-variant hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[16px] mt-0.5 flex-shrink-0">call</span>
                <span className="font-body-md text-body-md">{PHONE}</span>
              </a>
              <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-sm text-surface-variant hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="font-body-md text-body-md">Chat on WhatsApp</span>
              </a>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-sm text-surface-variant hover:text-white transition-colors">
                <span className="material-symbols-outlined text-[16px] mt-0.5 flex-shrink-0">location_on</span>
                <span className="font-body-md text-body-md">Marol, Andheri East, Mumbai</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-md pt-xl">
          <div className="font-label-md text-label-md text-surface-variant/60">
            © 2024 Vikas Sir&apos;s Wisdom Academy. All rights reserved.
          </div>
          <div className="font-label-md text-label-md text-surface-variant/60">
            Marol, Andheri East, Mumbai – 400059
          </div>
        </div>
      </div>
    </footer>
  );
}
