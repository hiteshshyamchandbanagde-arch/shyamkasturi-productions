import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos and stills from Shyamkasturi Productions.",
};

export default function Gallery() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 pb-24">
      <h1 className="text-5xl font-bold text-yellow-500 mb-4">Gallery</h1>
      <p className="text-gray-400 mb-12 max-w-2xl">
        Photos from our productions are on the way — check back soon.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="h-64 bg-zinc-800 rounded-lg flex items-center justify-center text-gray-500"
          >
            Coming Soon
          </div>
        ))}
      </div>
    </main>
  );
}
