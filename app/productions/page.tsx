import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productions",
  description: "Projects currently in development at Shyamkasturi Productions.",
};

const productions = [
  { title: "Feature Film Project", category: "Feature Film" },
  { title: "OTT Original Series", category: "OTT Series" },
  { title: "Theatre Production", category: "Theatre" },
];

export default function Productions() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 pb-24">
      <h1 className="text-5xl font-bold text-yellow-500 mb-4">
        Currently in Development
      </h1>
      <p className="text-gray-400 mb-12 max-w-2xl">
        Projects in motion across our slate. Titles and details are announced
        as productions are greenlit — check back for updates.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {productions.map((item) => (
          <div key={item.title} className="bg-zinc-900 p-6 rounded-lg">
            <h2 className="text-2xl font-bold">{item.title}</h2>
            <p className="text-gray-400 mt-2">{item.category} · In Development</p>
          </div>
        ))}
      </div>
    </main>
  );
}
