export default function Gallery() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8">
      <h1 className="text-5xl font-bold text-yellow-500 mb-12">
        Gallery
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="h-64 bg-zinc-800 rounded-lg flex items-center justify-center">
          Image Placeholder
        </div>

        <div className="h-64 bg-zinc-800 rounded-lg flex items-center justify-center">
          Image Placeholder
        </div>

        <div className="h-64 bg-zinc-800 rounded-lg flex items-center justify-center">
          Image Placeholder
        </div>
      </div>
    </main>
  );
}