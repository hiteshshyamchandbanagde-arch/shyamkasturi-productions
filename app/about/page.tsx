import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Shyamkasturi Productions is a Pune-based production house working across feature films, OTT originals, theatre, music, and live events.",
};

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 pb-24">
      <h1 className="text-5xl font-bold text-yellow-500 mb-8">About Us</h1>

      <div className="max-w-4xl space-y-6 text-lg text-gray-300 leading-8">
        <p>
          Shyamkasturi Productions is a Pune-based production house built on
          one belief: a story is only as strong as the craft behind it. From
          feature films and OTT originals to theatre, music, and live events,
          we work across mediums without losing the thread that ties them
          together — honest storytelling, produced with discipline.
        </p>

        <p>
          We work end-to-end: development, production, and delivery, whether
          that&apos;s a film headed to festivals, a series built for
          streaming, or a live show designed for a single unrepeatable night.
          Every project gets the same standard — clear vision, tight
          execution, and a finished product we&apos;d put our name on.
        </p>

        <p>
          Shyamkasturi Productions is also the studio behind{" "}
          <a
            href="https://aforaudience.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 underline hover:text-yellow-400"
          >
            AforAudience
          </a>
          , our platform for discovering and booking live art events.
        </p>
      </div>
    </main>
  );
}
