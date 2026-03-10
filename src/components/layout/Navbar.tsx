import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-zinc-100 h-20 flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full flex justify-between items-center">
        <Link href="/" className="text-2xl font-black text-zinc-900 tracking-tighter">
          ANDREW <span className="text-[#00A9D9]">MALONE</span>
        </Link>
        <div className="hidden md:flex gap-10 items-center">
          <Link href="/" className="nav-link text-zinc-900">Home</Link>
          <Link href="/about" className="nav-link text-zinc-400">About</Link>
          <Link href="/projects" className="nav-link text-zinc-400">Projects</Link>
          <button className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400">
             <span className="sr-only">Menu</span>
             <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10H17M3 5H17M3 15H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
