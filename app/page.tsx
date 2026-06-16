export default function Home() {
  const productions = [
    "Feature Film Project",
    "OTT Original Series",
    "Theatre Production",
    "Music Album",
    "Documentary Film",
    "Live Event Showcase",
  ];

  return (
    <>
      <a
        href="https://wa.me/919890831785"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg"
      >
        WhatsApp
      </a>
      <main className="bg-black text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur z-50 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div>
            <div className="text-yellow-500 text-2xl font-bold">SKP</div>
            <div className="text-xs text-gray-400">
              Shyamkasturi Productions
            </div>
          </div>

          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#productions">Productions</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
  className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1485846234645-a62644f84728')",
  }}
>
        <h1 className="text-5xl md:text-8xl font-bold text-yellow-500">
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
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
          >
            View Productions
          </a>

          <a
            href="#contact"
            className="border border-yellow-500 px-6 py-3 rounded-lg"
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

        <p className="text-gray-300 leading-8 text-lg">
          Shyamkasturi Productions is a creative production house dedicated to
          building powerful stories across cinema, OTT platforms, theatre,
          music, and live entertainment. We combine creativity, technology,
          and passion to create memorable experiences.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-zinc-900 py-24 px-8">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-16">
          Our Services
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            "Feature Films",
            "OTT Originals",
            "Theatre Productions",
            "Music Albums",
            "Live Events",
            "Creative Consulting",
          ].map((item) => (
            <div
              key={item}
              className="border border-yellow-500/30 p-8 rounded-xl"
            >
              <h3 className="text-xl font-bold">{item}</h3>
              <p className="text-gray-400 mt-4">
                Placeholder description. Replace with actual content later.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Productions */}
      <section id="productions" className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-4xl font-bold text-yellow-500 mb-16">
          Featured Productions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {productions.map((item) => (
            <div
              key={item}
              className="bg-zinc-900 rounded-xl overflow-hidden"
            >
              <div className="h-52 bg-zinc-800 flex items-center justify-center text-gray-500">
                Poster Placeholder
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{item}</h3>

                <p className="text-gray-400 mt-3">
                  Coming Soon
                </p>
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
          info@shyamkasturiproductions.com
        </p>

        <p className="mt-3">
          +91 98908 31785
        </p>

        <p className="mt-6 text-gray-400">
          A504 The Nest CHS, G K Royal Hills Road,
          Ravet, Pune 412101
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="mailto:info@shyamkasturiproductions.com"
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold"
          >
            Email Us
          </a>

          <a
            href="https://wa.me/919890831785"
            target="_blank"
            className="border border-yellow-500 px-6 py-3 rounded-lg"
          >
            WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-500/20 py-10 text-center">
  <h3 className="text-yellow-500 font-bold text-xl">
    Shyamkasturi Productions
  </h3>

  <p className="text-gray-400 mt-2">
    Stories Beyond Boundaries
  </p>

  <p className="text-gray-500 mt-4">
    © 2026 Shyamkasturi Productions. All Rights Reserved.
  </p>
</footer>
    </main>
    </>
  );
}