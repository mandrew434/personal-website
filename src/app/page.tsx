import Link from 'next/link';
import Image from 'next/image';
import { Download, Facebook, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] flex flex-col items-center justify-center text-center text-white hero-gradient">
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4 uppercase">
          HI! I'M <span className="text-[#00A9D9]">ANDREW MALONE</span>
        </h1>
        <p className="text-xl md:text-2xl font-bold tracking-widest uppercase text-zinc-300 mb-12">
          AI STRATEGIST & IS PROFESSIONAL FROM PROVO, UTAH
        </p>
        <button className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 8L10 13L15 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </section>

      {/* Main Content */}
      <section className="py-24 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-20">
          
          {/* Left Column: Story */}
          <div className="md:col-span-4">
            <h2 className="section-title">MY STORY</h2>
            <div className="prose prose-zinc prose-lg text-zinc-500 leading-relaxed mb-10">
              <p>
                Hello, I'm an AI Strategy Consultant and Information Systems student at BYU. I specialize in bridging the gap between high-level business goals and technical execution.
              </p>
              <p>
                With a background in building multimillion-dollar recovery pipelines and architecting enterprise AI frameworks, I help businesses turn data into a competitive advantage.
              </p>
            </div>
            <Link href="/resume.pdf" className="btn-primary inline-flex items-center gap-2">
              <Download size={18} /> DOWNLOAD RESUME
            </Link>
          </div>

          {/* Center Column: Profile Image */}
          <div className="md:col-span-4">
            <div className="relative aspect-square rounded-sm overflow-hidden border-8 border-white shadow-2xl">
              <Image src="/headshot.jpg" alt="Andrew Malone" fill className="object-cover" />
            </div>
          </div>

          {/* Right Column: Personal Info */}
          <div className="md:col-span-4">
            <h2 className="section-title">PERSONAL INFORMATION</h2>
            <div className="space-y-4 mb-12">
              <div className="border-b border-zinc-100 pb-3">
                <span className="info-label">Name</span>
                <span className="info-value">Andrew Malone</span>
              </div>
              <div className="border-b border-zinc-100 pb-3">
                <span className="info-label">Education</span>
                <span className="info-value">MISM, BYU</span>
              </div>
              <div className="border-b border-zinc-100 pb-3">
                <span className="info-label">Phone</span>
                <span className="info-value">(804) 616-0913</span>
              </div>
              <div className="border-b border-zinc-100 pb-3">
                <span className="info-label">Email</span>
                <span className="info-value">mandrew434@gmail.com</span>
              </div>
              <div className="border-b border-zinc-100 pb-3">
                <span className="info-label">Address</span>
                <span className="info-value">Provo, Utah</span>
              </div>
            </div>
            
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-[#00A9D9] hover:border-[#00A9D9] transition-all"><Facebook size={18} /></Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-[#00A9D9] hover:border-[#00A9D9] transition-all"><Twitter size={18} /></Link>
              <Link href="https://linkedin.com/in/andrew-r-malone/" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-[#00A9D9] hover:border-[#00A9D9] transition-all"><Linkedin size={18} /></Link>
              <Link href="https://github.com/mandrew434" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-[#00A9D9] hover:border-[#00A9D9] transition-all"><Github size={18} /></Link>
              <Link href="#" className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-[#00A9D9] hover:border-[#00A9D9] transition-all"><Instagram size={18} /></Link>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-zinc-50 py-20 border-y border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-5xl font-black text-zinc-900 mb-2">$3.6M</p>
            <p className="text-xs font-bold text-[#00A9D9] uppercase tracking-widest">Recovery Found</p>
          </div>
          <div>
            <p className="text-5xl font-black text-zinc-900 mb-2">50%</p>
            <p className="text-xs font-bold text-[#00A9D9] uppercase tracking-widest">Time Saved</p>
          </div>
          <div>
            <p className="text-5xl font-black text-zinc-900 mb-2">50+</p>
            <p className="text-xs font-bold text-[#00A9D9] uppercase tracking-widest">AI Deployments</p>
          </div>
          <div>
            <p className="text-5xl font-black text-zinc-900 mb-2">3.95</p>
            <p className="text-xs font-bold text-[#00A9D9] uppercase tracking-widest">Academic GPA</p>
          </div>
        </div>
      </section>
    </main>
  );
}
