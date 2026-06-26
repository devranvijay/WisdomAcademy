import Image from "next/image";

const ABOUT_IMAGE_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAUKYt3092c9iHTt8wS46FaakLeaAL7edx3YxOaxiezDxiE15ed-Elfefw6q6dbBGtSUgMomMAFSMjojIQt3eklhCWnKr2YVyahc-QJ9YbD1y57FVuRwGWU8Vq64z7klke25UF01CZlI6GtDz8agFSGHxLtqp-qRQejaJcUvxmXv3plNMK1SiW043TNHcVKK8YWaCjpt_7LvDntk2My7fEorQtYcuEBv3UuHbuR8OqlYN07m_0b4VUvoeKIFY26A_lwLlKR2uRw940Q";

const milestones = [
  { heading: "2019", text: "Founded with a vision to provide quality coaching." },
  { heading: "Expert Faculty", text: "Handpicked educators with decades of combined experience." },
  { heading: "95% Repeat Rate", text: "Siblings of alumni consistently choose us for their education." },
];

export default function About() {
  return (
    <section id="about" className="py-section px-gutter bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-xxl items-center reveal">
        <div className="relative rounded-24 overflow-hidden aspect-video shadow-2xl">
          <Image
            src={ABOUT_IMAGE_URL}
            alt="Spacious modern classroom at Wisdom Academy with ergonomic furniture and interactive digital board"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        <div className="space-y-lg">
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            A Legacy of <span className="text-primary">Academic Excellence</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Founded by Vikas Sir, Wisdom Academy has been a beacon of quality
            education for over a decade. Our mission is to simplify complex
            concepts and inspire a love for learning in every student.
          </p>

          <div className="space-y-md pt-md">
            {milestones.map(({ heading, text }) => (
              <div key={heading} className="flex gap-lg items-start">
                <div className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <div>
                  <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    {heading}
                  </div>
                  <p className="font-body-md text-body-md text-on-surface-variant">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
