import Link from 'next/link';
import { ArrowRight, ChevronRight, Cpu, BarChart3, Globe } from 'lucide-react';

export default function Home() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-50 border border-zinc-100 mb-10">
              <span className="w-2 h-2 rounded-full bg-zinc-900 animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-600">Available for AI Consulting</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 mb-8 leading-[0.9]">
              STRATEGY<br />DRIVEN BY<br />INTELLIGENCE<span className="text-zinc-300">.</span>
            </h1>
            <p className="text-xl text-zinc-500 mb-12 max-w-lg leading-relaxed font-medium">
              Information Systems at BYU. Specializing in high-impact AI strategy and operational automation for forward-thinking enterprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link href="/projects" className="group px-8 py-5 bg-zinc-900 text-white font-bold tracking-widest uppercase text-xs flex items-center gap-3 justify-center hover:bg-zinc-800 transition-all">
                View Portfolio <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/about" className="px-8 py-5 border border-zinc-200 text-zinc-900 font-bold tracking-widest uppercase text-xs text-center hover:bg-zinc-50 transition-colors">
                The Founder
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <div className="aspect-[4/5] bg-zinc-50 border border-zinc-100 relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="absolute inset-0 flex items-center justify-center p-20">
                  <span className="text-zinc-100 font-black text-[20rem] tracking-tighter select-none">AM</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Value Prop */}
      <section className="py-32 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-20">
            <div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-400 mb-6 block">01 / Innovation</span>
              <h3 className="text-2xl font-bold mb-6 text-zinc-900">Applied Intelligence</h3>
              <p className="text-zinc-500 leading-relaxed">We don't just build chatbots. We architect agentic workflows that integrate directly into your CRM, identifying millions in lost revenue.</p>
            </div>
            <div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-400 mb-6 block">02 / Precision</span>
              <h3 className="text-2xl font-bold mb-6 text-zinc-900">Data Engineering</h3>
              <p className="text-zinc-500 leading-relaxed">Leveraging Snowflake, Python, and SQL to turn unstructured raw data into clean, actionable business strategy.</p>
            </div>
            <div>
              <span className="text-[10px] font-black tracking-[0.3em] uppercase text-zinc-400 mb-6 block">03 / Impact</span>
              <h3 className="text-2xl font-bold mb-6 text-zinc-900">Strategic Consulting</h3>
              <p className="text-zinc-500 leading-relaxed">Bridging the gap between technical execution and business leadership. Designed for the executive suite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Callout */}
      <section className="py-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-zinc-900 leading-[0.9]">
              SELECT<br />ENGAGEMENTS
            </h2>
            <Link href="/projects" className="pb-4 border-b-2 border-zinc-900 text-sm font-bold tracking-widest uppercase text-zinc-900">
              Browse All Projects
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
             <Link href="/projects" className="group">
                <div className="aspect-video bg-zinc-900 mb-8 overflow-hidden">
                   <div className="w-full h-full flex items-center justify-center text-zinc-800 text-9xl font-black italic group-hover:scale-105 transition-transform">01</div>
                </div>
                <h4 className="text-2xl font-bold mb-2 group-hover:underline">Pattern Reverse Logistics</h4>
                <p className="text-zinc-500 font-medium">$3.67M Reimbursement Recovery Pipeline</p>
             </Link>
             <Link href="/projects" className="group">
                <div className="aspect-video bg-zinc-100 mb-8 overflow-hidden">
                   <div className="w-full h-full flex items-center justify-center text-zinc-200 text-9xl font-black italic group-hover:scale-105 transition-transform">02</div>
                </div>
                <h4 className="text-2xl font-bold mb-2 group-hover:underline">Extra Mile E-commerce</h4>
                <p className="text-zinc-500 font-medium">Enterprise AI Chatbot Framework Scaling</p>
             </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
