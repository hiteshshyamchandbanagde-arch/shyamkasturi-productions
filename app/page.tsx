import Image from "next/image";

const productions = [
  "Feature Film Project",
  "OTT Original Series",
  "Theatre Production",
  "Music Album",
  "Documentary Film",
  "Live Event Showcase",
];

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

export default function Home() {
  return (
    <>
      <a
        href="https://wa.me/919225139690"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
      >
        WhatsApp
      </a>

      <main className="bg-black text-white min-h-screen">
        {/* Hero */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-32 bg-gradient-to-b from-zinc-950 via-black to-black">
          <div className="w-full max-w-xl rounded-2xl overflow-hidden shadow-[0_0_80px_-10px_rgba(234,179,8,0.35)]">
            <video
              className="w-full h-auto"
              src="/logo-animation.mp4"
              poster="/logo-poster.png"
              autoPlay
              muted
              playsInline
              aria-hidden="true"
            />
          </div>

          <h1 className="mt-10 text-5xl md:text-7xl font-bold text-yellow-500">
            Shyamkasturi Productions
          </h1>

          <p className="mt-6 text-2xl text-gray-300">
            Stories Beyond Boundaries
          </p>

          <p className="mt-6 max-w-3xl text-gray-400">
            Feature Films • OTT Originals • Theatre Productions • Music Albums •
            Live Events
          </p>

          <div className="flex gap-4 mt-10">
            <a
              href="#productions"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              View Productions
            </a>

            <a
              href="#contact"
              className="border border-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500/10 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="max-w-6xl mx-auto px-8 py-24">
          <h2 className="text-4xl font-bold text-yellow-500 mb-8">
            About Us
          </h2>

          <div className="space-y-6 text-gray-300 leading-8 text-lg">
            <p>
              Shyamkasturi Productions is a Pune-based production house built
              on one belief: a story is only as strong as the craft behind
              it. From feature films and OTT originals to theatre, music, and
              live events, we work across mediums without losing the thread
              that ties them together — honest storytelling, produced with
              discipline.
            </p>

            <p>
              We work end-to-end: development, production, and delivery,
              whether that&apos;s a film headed to festivals, a series built
              for streaming, or a live show designed for a single
              unrepeatable night. Every project gets the same standard —
              clear vision, tight execution, and a finished product
              we&apos;d put our name on.
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
        </section>

        {/* Services */}
        <section id="services" className="bg-zinc-900 py-24 px-8">
          <h2 className="text-4xl font-bold text-center text-yellow-500 mb-16">
            Our Services
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {services.map((item) => (
              <div
                key={item.title}
                className="border border-yellow-500/30 p-8 rounded-xl"
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-gray-400 mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Productions */}
        <section id="productions" className="max-w-6xl mx-auto px-8 py-24">
          <h2 className="text-4xl font-bold text-yellow-500 mb-4">
            Currently in Development
          </h2>
          <p className="text-gray-400 mb-16 max-w-2xl">
            Projects in motion across our slate. Titles and details are
            announced as productions are greenlit — check back for updates.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {productions.map((item) => (
              <div key={item} className="bg-zinc-900 rounded-xl overflow-hidden">
                <div className="h-52 bg-zinc-800 flex items-center justify-center text-gray-500">
                  Details Coming Soon
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold">{item}</h3>
                  <p className="text-gray-400 mt-3">In Development</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-zinc-900 py-24 px-8">
          <h2 className="text-4xl font-bold text-center text-yellow-500 mb-16">
            Gallery
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-zinc-800 rounded-lg flex items-center justify-center text-gray-500"
              >
                Image {i + 1}
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 text-center px-8">
          <h2 className="text-4xl font-bold text-yellow-500 mb-8">
            Contact Us
          </h2>

          <p className="text-lg">
            <a href="mailto:info@shyamkasturiproductions.com" className="hover:text-yellow-500 transition-colors">
              info@shyamkasturiproductions.com
            </a>
          </p>

          <p className="mt-3">
            <a href="tel:+919225139690" className="hover:text-yellow-500 transition-colors">
              +91 92251 39690
            </a>
          </p>

          <p className="mt-6 text-gray-400">
            A504 The Nest CHS, Chandrabhaga Corner,
            Ravet, Pune 412101
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <a
              href="mailto:info@shyamkasturiproductions.com"
              className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              Email Us
            </a>

            <a
              href="https://wa.me/919225139690"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-yellow-500 px-6 py-3 rounded-lg hover:bg-yellow-500/10 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-yellow-500/20 py-10 text-center px-8">
          <Image
            src="/logo.png"
            alt="Shyamkasturi Productions"
            width={64}
            height={64}
            className="mx-auto rounded-full"
          />

          <h3 className="text-yellow-500 font-bold text-xl mt-4">
            Shyamkasturi Productions
          </h3>

          <p className="text-gray-400 mt-2">Stories Beyond Boundaries</p>

          <p className="text-gray-500 mt-6">
            Discover live events on{" "}
            <a
              href="https://aforaudience.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500 underline hover:text-yellow-400"
            >
              AforAudience
            </a>
          </p>

          <p className="text-gray-500 mt-4">
            © 2026 Shyamkasturi Productions. All Rights Reserved.
          </p>
        </footer>
      </main>
    </>
  );
}
