import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="glass-nav">
      <div className="max-w-screen-xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight text-zinc-900">
          Andrew Malone<span className="text-zinc-400">/</span>
        </Link>
        <div className="hidden md:flex gap-8 text-[13px] font-medium text-zinc-500">
          <Link href="/about" className="hover:text-zinc-900 transition-colors">About</Link>
          <Link href="/projects" className="hover:text-zinc-900 transition-colors">Projects</Link>
          <Link href="/services" className="hover:text-zinc-900 transition-colors">Consulting</Link>
        </div>
        <Link href="mailto:mandrew434@gmail.com" className="text-[13px] font-semibold text-zinc-900 hover:opacity-70 transition-opacity">
          Connect →
        </Link>
      </div>
    </nav>
  );
}
