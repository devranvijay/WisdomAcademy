"use client";

import { useState, type FormEvent } from "react";

const contactDetails = [
  {
    icon: "location_on",
    label: "Our Location",
    value: "4th Floor B, Wing Twin Arcade, Military Rd, Opp. Sugun Hospital, Sankara Nagar, Marol, Andheri East, Mumbai – 400059",
  },
  {
    icon: "call",
    label: "Phone Number",
    value: "+91 99309 39858",
    href: "tel:+919930939858",
  },
  {
    icon: "schedule",
    label: "Working Hours",
    value: "Open · Closes 8:00 PM",
  },
  {
    icon: "mail",
    label: "Email Address",
    value: "info@wisdomacademy.edu",
    href: "mailto:info@wisdomacademy.edu",
  },
];

const courseOptions = [
  "SSC State Board",
  "Mathematics Exam Prep",
  "Std. 7–10 Foundation",
  "HSC Science",
  "HSC Commerce",
];

const MAPS_URL = "https://maps.app.goo.gl/J6qajsc6W2xdpkF27";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: courseOptions[0],
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const wa = `https://wa.me/919930939858?text=Hi%20Vikas%20Sir%2C%20I%20am%20${encodeURIComponent(formData.name)}%20and%20I%27m%20interested%20in%20${encodeURIComponent(formData.course)}.%20${encodeURIComponent(formData.message)}`;
    window.open(wa, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-section px-gutter bg-surface-container-low">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xxl reveal">

        {/* ── Contact Info ── */}
        <div className="space-y-xl">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface">Get in Touch</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-md">
              Have questions about admissions or courses? Reach out — we reply fast.
            </p>
          </div>

          <div className="space-y-lg">
            {contactDetails.map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-lg">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-xs">
                  <span className="material-symbols-outlined">{icon}</span>
                </div>
                <div>
                  <div className="font-label-md text-label-md text-on-surface font-semibold">{label}</div>
                  {href ? (
                    <a href={href} className="font-body-md text-body-md text-primary hover:underline">
                      {value}
                    </a>
                  ) : (
                    <p className="font-body-md text-body-md text-on-surface-variant">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps embed */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-24 overflow-hidden h-64 shadow-xl relative group"
          >
            <iframe
              src="https://maps.google.com/maps?q=Vikas+Sir+Wisdom+Academy+Marol+Andheri+East+Mumbai&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wisdom Academy location on Google Maps"
            />
            {/* Overlay CTA on hover */}
            <div className="absolute inset-0 bg-primary/70 flex items-center justify-center gap-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="material-symbols-outlined text-white">open_in_new</span>
              <span className="text-white font-label-md text-label-md font-semibold">Open in Google Maps</span>
            </div>
          </a>
        </div>

        {/* ── Enquiry Form ── */}
        <div className="bg-white p-xl md:p-xxl rounded-24 shadow-xl space-y-xl border border-outline-variant/30">
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Send an Enquiry</h3>
            <p className="font-label-md text-label-md text-on-surface-variant mt-xs">
              We&apos;ll redirect you to WhatsApp for a faster response.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-lg">
            <div className="space-y-xs">
              <label className="font-label-sm text-label-sm text-on-surface-variant px-sm">Full Name</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary rounded-xl px-lg py-md transition-all outline-none"
              />
            </div>

            <div className="space-y-xs">
              <label className="font-label-sm text-label-sm text-on-surface-variant px-sm">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 00000 00000"
                value={formData.phone}
                onChange={(e) => setFormData((d) => ({ ...d, phone: e.target.value }))}
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary rounded-xl px-lg py-md transition-all outline-none"
              />
            </div>

            <div className="space-y-xs">
              <label className="font-label-sm text-label-sm text-on-surface-variant px-sm">Course Interested In</label>
              <select
                value={formData.course}
                onChange={(e) => setFormData((d) => ({ ...d, course: e.target.value }))}
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary rounded-xl px-lg py-md transition-all outline-none"
              >
                {courseOptions.map((opt) => <option key={opt}>{opt}</option>)}
              </select>
            </div>

            <div className="space-y-xs">
              <label className="font-label-sm text-label-sm text-on-surface-variant px-sm">Message (optional)</label>
              <textarea
                placeholder="Any specific questions?"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                className="w-full bg-surface-container-low border-none focus:ring-2 focus:ring-primary rounded-xl px-lg py-md transition-all outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-sm bg-[#25D366] text-white py-lg rounded-xl font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all shadow-lg"
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Send via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
