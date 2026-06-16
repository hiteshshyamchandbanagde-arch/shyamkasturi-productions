export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-yellow-500">
          Shyamkasturi Productions
        </h1>

        <p className="mt-6 text-xl text-gray-300">
          Stories Beyond Boundaries
        </p>

        <p className="mt-4 text-gray-400 max-w-3xl">
          Feature Films • OTT Originals • Theatre Productions • Music Albums • Live Events
        </p>
      </section>

      <section className="py-20 px-8 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 mb-6">
          About Us
        </h2>

        <p className="text-gray-300 leading-8">
          Shyamkasturi Productions is a creative production house dedicated to
          storytelling through films, OTT content, theatre productions and live
          entertainment experiences.
        </p>
      </section>

      <section className="py-20 px-8 bg-zinc-900">
        <h2 className="text-4xl font-bold text-center text-yellow-500 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 border border-yellow-500 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">Feature Films</h3>
          </div>

          <div className="p-6 border border-yellow-500 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">OTT Originals</h3>
          </div>

          <div className="p-6 border border-yellow-500 rounded-lg">
            <h3 className="text-2xl font-bold mb-3">Theatre Productions</h3>
          </div>
        </div>
      </section>

      <section className="py-20 px-8 bg-zinc-900 text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-8">
          Contact Us
        </h2>

        <p>info@shyamkasturiproductions.com</p>
        <p className="mt-2">+91 98908 31785</p>

        <p className="mt-6 text-gray-400">
          A504 The Nest CHS, G K Royal Hills Road,
          Ravet, Pune 412101
        </p>
      </section>
    </main>
  );
}