import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MoveRight, Layers, BarChart, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-8">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-600">Based in Provo, UT</span>
              </div>
              <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tightest leading-[1] text-zinc-900 mb-10 text-balance">
                Bridging the gap between <span className="text-zinc-400">complex data</span> and <span className="italic">business strategy.</span>
              </h1>
              <p className="text-xl md:text-2xl text-zinc-500 mb-12 max-w-2xl leading-relaxed">
                Information Systems at BYU. Specializing in AI Strategy and high-impact operational automation for the modern enterprise.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects" className="px-8 py-4 bg-zinc-900 text-white font-semibold rounded-lg hover:bg-zinc-800 transition-all flex items-center gap-2">
                  View Engagement History <MoveRight size={20} />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full max-w-md ml-auto overflow-hidden rounded-2xl border border-zinc-100 shadow-2xl shadow-zinc-200/50">
              <Image 
                src="/headshot.jpg" 
                alt="Andrew Malone" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 border-y border-zinc-100 bg-zinc-50/50">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <p className="text-4xl font-bold text-zinc-900 mb-2">$3.67M+</p>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Recovery Identified</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-zinc-900 mb-2">50%</p>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Workflow Optimization</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-zinc-900 mb-2">50+</p>
              <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">Enterprise Deployments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Engagement Image */}
      <section className="py-32">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-zinc-100">
               <Image 
                src="/pattern.jpg" 
                alt="Andrew Malone at Pattern" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[11px] font-black tracking-[0.3em] uppercase text-zinc-400 mb-6 block">Case Study</span>
              <h2 className="text-4xl font-bold text-zinc-900 mb-8 tracking-tight">Pattern: AI-Driven Operational Recovery</h2>
              <p className="text-lg text-zinc-500 leading-relaxed mb-8">
                As a Reverse Logistics Intern, I engineered SQL and Snowflake analytics pipelines that identified millions in lost reimbursement recovery. By building custom Streamlit tools, we slashed manual workflow time by 50%.
              </p>
              <Link href="/projects" className="inline-flex items-center gap-2 font-bold text-zinc-900 border-b border-zinc-900 pb-1 hover:opacity-70 transition-opacity">
                Explore Technical Details <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding border-t border-zinc-100 bg-zinc-50/30">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-start">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
              A commitment to <br />applied intelligence.
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center shrink-0">
                  <Layers className="text-zinc-900" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-zinc-900">Architectural Thinking</h4>
                  <p className="text-zinc-500 leading-relaxed">Designing end-to-end AI frameworks that integrate seamlessly into complex corporate ecosystems, not just standalone tools.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center shrink-0">
                  <BarChart className="text-zinc-900" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-zinc-900">Analytical Rigor</h4>
                  <p className="text-zinc-500 leading-relaxed">Deep-dive technical audits across SQL, Snowflake, and Python to identify latent operational value.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-xl bg-white border border-zinc-100 shadow-sm flex items-center justify-center shrink-0">
                  <Zap className="text-zinc-900" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-3 text-zinc-900">Rapid Execution</h4>
                  <p className="text-zinc-500 leading-relaxed">Deploying optimized, production-ready solutions that deliver measurable ROI within weeks, not months.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-zinc-900 text-white text-center">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-balance leading-tight">
            Ready to integrate intelligence <br className="hidden md:block" /> into your business strategy?
          </h2>
          <Link href="mailto:mandrew434@gmail.com" className="inline-flex items-center gap-2 text-lg font-semibold border-b-2 border-white pb-1 hover:opacity-70 transition-opacity">
            Start a Conversation <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </main>
  );
}
