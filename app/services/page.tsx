import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Feature films, OTT originals, theatre productions, music albums, live events, and creative consulting from Shyamkasturi Productions.",
};

const services = [
  {
    title: "Feature Films",
    desc: "End-to-end film production — development, financing packages, shoot, and post — built for theatrical and festival release.",
  },
  {
    title: "OTT Originals",
    desc: "Series and original content produced for streaming platforms, from concept through delivery-ready masters.",
  },
  {
    title: "Theatre Productions",
    desc: "Stage productions handled from script to set — casting, direction, and full production management.",
  },
  {
    title: "Music Albums",
    desc: "Original music production, from composition and recording to release, for films and standalone albums.",
  },
  {
    title: "Live Events",
    desc: "Planning and execution for live shows and experiences, run through our AforAudience platform.",
  },
  {
    title: "Creative Consulting",
    desc: "Script, story, and production consulting for teams who need an outside creative and production eye.",
  },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 pb-24">
      <h1 className="text-5xl font-bold text-yellow-500 mb-12">Services</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((item) => (
          <div key={item.title} className="border border-yellow-500 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
            <p className="text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
