export default function Services() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8">
      <h1 className="text-5xl font-bold text-yellow-500 mb-12">
        Services
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="border border-yellow-500 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Feature Films
          </h2>
          <p>Film production and distribution.</p>
        </div>

        <div className="border border-yellow-500 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            OTT Originals
          </h2>
          <p>Premium digital content creation.</p>
        </div>

        <div className="border border-yellow-500 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">
            Live Events
          </h2>
          <p>Event planning and execution.</p>
        </div>
      </div>
    </main>
  );
}