import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tighter text-zinc-900">
          MALONE<span className="text-zinc-400">.</span>
        </Link>
        <div className="hidden md:flex gap-10 text-[11px] font-bold tracking-[0.2em] text-zinc-500 uppercase">
          <Link href="/" className="hover:text-zinc-900 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-zinc-900 transition-colors">About</Link>
          <Link href="/projects" className="hover:text-zinc-900 transition-colors">Projects</Link>
          <Link href="/services" className="hover:text-zinc-900 transition-colors">Services</Link>
        </div>
        <Link href="mailto:mandrew434@gmail.com" className="px-6 py-2.5 bg-zinc-900 text-white text-[11px] font-bold tracking-widest uppercase rounded-sm hover:bg-zinc-800 transition-colors">
          Contact
        </Link>
      </div>
    </nav>
  );
}
