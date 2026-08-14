import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Shyamkasturi Productions.",
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-black text-white pt-32 px-8 pb-24">
      <h1 className="text-5xl font-bold text-yellow-500 mb-8">Contact Us</h1>

      <div className="text-lg space-y-4">
        <p>
          Email:{" "}
          <a
            href="mailto:info@shyamkasturiproductions.com"
            className="hover:text-yellow-500 transition-colors"
          >
            info@shyamkasturiproductions.com
          </a>
        </p>

        <p>
          Phone:{" "}
          <a href="tel:+919225139690" className="hover:text-yellow-500 transition-colors">
            +91 92251 39690
          </a>
        </p>

        <p className="text-gray-400">
          A504 The Nest CHS, Chandrabhaga Corner,
          <br />
          Ravet, Pune 412101
        </p>
      </div>

      <div className="mt-10 flex gap-4">
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
    </main>
  );
}
