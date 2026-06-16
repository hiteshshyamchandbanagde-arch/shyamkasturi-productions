export default function Productions() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8">
      <h1 className="text-5xl font-bold text-yellow-500 mb-12">
        Productions
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-zinc-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold">
            Echoes of Pune
          </h2>
          <p className="text-gray-400 mt-2">
            Feature Film
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold">
            Midnight Monsoon
          </h2>
          <p className="text-gray-400 mt-2">
            OTT Series
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg">
          <h2 className="text-2xl font-bold">
            Rangmanch
          </h2>
          <p className="text-gray-400 mt-2">
            Theatre Production
          </p>
        </div>
      </div>
    </main>
  );
}