import Link from 'next/link';
import Image from 'next/image';
import FeatureCard from '@/components/ui/FeatureCard';
import { 
  ArrowRight, Github, Linkedin, Mail, Cpu, 
  BarChart3, Workflow, Download, ChevronDown 
} from 'lucide-react';

export default function Home() {
  return (
    <main className="selection:bg-[#00A9D9] selection:text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 hero-mask">
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 animate-in fade-in slide-in-from-top-4 duration-1000">
            <span className="w-2 h-2 rounded-full bg-[#00A9D9] animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-zinc-800">Available for AI Consulting</span>
          </div>
          <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter leading-[0.9] text-white mb-8 drop-shadow-2xl animate-in fade-in zoom-in-95 duration-1000">
            ANDREW <br /> <span className="gradient-text">MALONE</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-zinc-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Architecting <span className="text-white font-bold italic underline decoration-[#00A9D9] decoration-4 underline-offset-8">Applied Intelligence</span> to solve complex business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Link href="#strategy" className="px-10 py-5 bg-[#00A9D9] text-white font-black tracking-widest uppercase text-xs rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(0,169,217,0.4)] transition-all flex items-center gap-3">
              Explore Strategy <ArrowRight size={18} />
            </Link>
            <Link href="/about" className="px-10 py-5 glass-card text-zinc-900 font-black tracking-widest uppercase text-xs rounded-full hover:bg-white transition-all">
              The Founder
            </Link>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce cursor-pointer z-10">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative z-20 -mt-24 max-w-6xl mx-auto px-6 mb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { val: '$3.6M+', lab: 'Recovery Found' },
            { val: '50%', lab: 'Workflow Opt.' },
            { val: '450+', lab: 'AI Users' },
            { val: '3.95', lab: 'Academic GPA' }
          ].map((stat, i) => (
            <div key={i} className="p-8 rounded-3xl bg-white border border-zinc-100 shadow-xl flex flex-col items-center justify-center text-center">
              <p className="text-3xl md:text-5xl font-black text-zinc-900 mb-2 tracking-tighter">{stat.val}</p>
              <p className="text-[10px] font-black text-[#00A9D9] uppercase tracking-[0.2em]">{stat.lab}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategy Section */}
      <section id="strategy" className="section-spacing bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center mb-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-zinc-100 rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-100 shadow-2xl">
                <Image src="/headshot.jpg" alt="Andrew Malone Profile" fill className="object-cover grayscale hover:grayscale-0 transition-all duration-700" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 leading-[0.9] mb-12">
                BRIDGING THE GAP <br /> <span className="text-[#00A9D9]">BETWEEN BITS & BUSINESS.</span>
              </h2>
              <div className="space-y-8 text-lg text-zinc-500 font-medium leading-relaxed">
                <p>
                  As an <span className="text-zinc-900 font-bold">Information Systems professional</span> at BYU, I don't just write code—I engineer operational impact.
                </p>
                <p>
                  My philosophy centers on <span className="italic">Applied Intelligence</span>: the deliberate application of AI, ML, and automation to eliminate business bottlenecks and recover millions in lost capital.
                </p>
                <div className="pt-8 flex gap-4">
                   <a href="https://linkedin.com/in/andrew-r-malone/" className="p-4 rounded-xl bg-zinc-50 text-zinc-400 hover:text-[#00A9D9] hover:bg-[#00A9D9]/5 transition-all"><Linkedin size={24} /></a>
                   <a href="https://github.com/mandrew434" className="p-4 rounded-xl bg-zinc-50 text-zinc-400 hover:text-[#00A9D9] hover:bg-[#00A9D9]/5 transition-all"><Github size={24} /></a>
                   <a href="mailto:mandrew434@gmail.com" className="p-4 rounded-xl bg-zinc-50 text-zinc-400 hover:text-[#00A9D9] hover:bg-[#00A9D9]/5 transition-all"><Mail size={24} /></a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <FeatureCard 
              icon={BarChart3} 
              title="Data Strategy" 
              description="Engineering SQL/Snowflake pipelines that reveal multimillion-dollar reimbursement opportunities." 
              delay="0ms"
            />
            <FeatureCard 
              icon={Workflow} 
              title="Agentic Workflows" 
              description="Architecting scalable AI chatbot frameworks that integrate directly into enterprise CRM ecosystems." 
              delay="100ms"
            />
            <FeatureCard 
              icon={Cpu} 
              title="applied ML" 
              description="Designing end-to-end Machine Learning pipelines to optimize logistics and pre-sort operations." 
              delay="200ms"
            />
          </div>
        </div>
      </section>

      {/* Experience Showcase */}
      <section className="py-40 bg-zinc-950 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-20 items-center">
            <div className="md:col-span-7">
              <span className="text-[11px] font-black tracking-[0.4em] uppercase text-[#00A9D9] mb-8 block">Proven Impact / Pattern</span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-12">
                THE $3.67M <br /> <span className="text-zinc-700 italic">RECOVERY.</span>
              </h2>
              <p className="text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed">
                By automating reverse-logistics workflows and engineering custom analytics pipelines, I helped identify and secure a massive reimbursement recovery opportunity.
              </p>
              <Link href="/projects" className="inline-flex items-center gap-4 text-sm font-black tracking-[0.2em] uppercase text-white hover:text-[#00A9D9] transition-colors">
                Technical Case Study <ArrowRight size={20} />
              </Link>
            </div>
            <div className="md:col-span-5 relative">
              <div className="aspect-square bg-[#00A9D9] rounded-[4rem] rotate-6 absolute inset-0 blur-3xl opacity-20" />
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10">
                <Image src="/pattern.jpg" alt="Impact at Pattern" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing text-center bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-zinc-100" />
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-8xl font-black tracking-tightest leading-[0.8] text-zinc-900 mb-12">
            LET'S <span className="gradient-text italic font-serif">BUILD</span> THE FUTURE.
          </h2>
          <p className="text-lg font-bold tracking-widest uppercase text-zinc-400 mb-16">
            Currently accepting AI consulting engagements for Summer 2026.
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <Link href="mailto:mandrew434@gmail.com" className="group text-2xl font-black text-zinc-900 flex items-center gap-4 hover:text-[#00A9D9] transition-all">
              mandrew434@gmail.com <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
            <div className="hidden md:block w-12 h-px bg-zinc-100" />
            <a href="https://linkedin.com/in/andrew-r-malone/" className="text-zinc-900 font-bold hover:underline">LinkedIn Profile</a>
          </div>
        </div>
      </section>
    </main>
  );
}
