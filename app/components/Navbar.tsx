import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur z-50 border-b border-yellow-500/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Shyamkasturi Productions"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <span className="hidden sm:block text-lg font-bold text-yellow-500 leading-tight">
            Shyamkasturi Productions
          </span>
        </Link>

        <div className="flex gap-6 text-white">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/productions">Productions</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
