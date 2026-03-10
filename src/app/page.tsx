import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { Github, Linkedin, Mail, Trophy, Cpu, Database, Layout, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-white selection:text-black">
      <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold tracking-tighter text-white text-xl">AM.</span>
          <div className="flex gap-8 text-sm font-medium">
            <a href="#experience" className="hover:text-white transition-colors">EXPERIENCE</a>
            <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
            <a href="#skills" className="hover:text-white transition-colors">SKILLS</a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        <section className="mb-40">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 mb-8 bg-zinc-950">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-zinc-400">Available for AI Consulting</span>
          </div>
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8">
            ANDREW<br />MALONE
          </h1>
          <p className="max-w-2xl text-xl md:text-3xl text-zinc-400 mb-12 leading-tight">
            Information Systems at BYU. 
            <span className="text-white"> AI Strategy Consultant </span> 
            specializing in high-impact agentic workflows.
          </p>
          <div className="flex gap-8 items-center">
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/andrew-r-malone/" target="_blank" className="text-zinc-500 hover:text-white transition-colors"><Linkedin size={28} /></a>
              <a href="https://github.com/mandrew434" target="_blank" className="text-zinc-500 hover:text-white transition-white transition-colors"><Github size={28} /></a>
              <a href="mailto:mandrew434@gmail.com" className="text-zinc-500 hover:text-white transition-colors"><Mail size={28} /></a>
            </div>
            <div className="h-px w-12 bg-zinc-800" />
            <a href="#projects" className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-white">
              View Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </section>

        <section id="experience" className="mb-40">
          <SectionHeader title="Experience" />
          <div className="space-y-20">
            <div className="relative pl-8 border-l border-zinc-900">
              <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-white" />
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">Reverse Logistics Strategy (AI)</h3>
                <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">2025 • Pattern</span>
              </div>
              <ul className="space-y-4 text-lg text-zinc-400 leading-relaxed">
                <li>• Engineered SQL/Snowflake pipelines identifying <span className="text-white">$3.67M in recovery opportunities</span>.</li>
                <li>• Optimized operations by 50% via custom Streamlit agentic applications.</li>
                <li>• Spearheaded internal AI education to translate emerging tech into applied strategy.</li>
              </ul>
            </div>

            <div className="relative pl-8 border-l border-zinc-900">
              <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-zinc-800" />
              <div className="flex justify-between items-baseline mb-4">
                <h3 className="text-2xl font-bold text-white tracking-tight">AI Integration Lead</h3>
                <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">2024 • Extra Mile</span>
              </div>
              <ul className="space-y-4 text-lg text-zinc-400 leading-relaxed">
                <li>• Architected and piloted scalable AI chatbot frameworks for 50+ enterprise sites.</li>
                <li>• Integrated LLM automation into CRM systems to drive marketing efficiency.</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-40">
          <SectionHeader title="Selected Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard 
              title="DiscBot AI"
              description="A B2B AI-powered chatbot designed for the disc golf industry. Successfully secured enterprise clients and assisted 450+ users in specialized product selection through iterative prompt engineering."
              tags={["OpenAI", "Prompt Engineering", "B2B SaaS"]}
            />
            <ProjectCard 
              title="AI Research Assistant"
              description="Developed AI bio-sketch chatbots and automated statistical pipelines for Dr. Twyman at BYU. Coauthored research presented at AMCIS for academic audiences."
              tags={["Python", "Automation", "Research"]}
            />
          </div>
        </section>

        <section id="skills" className="mb-40">
          <SectionHeader title="Expertise" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Cpu className="mb-6 text-white" size={32} />
              <h4 className="text-xl font-bold text-white mb-4">AI Strategy</h4>
              <p className="text-zinc-500 leading-relaxed italic">High-impact automation, prompt optimization, and agentic framework design.</p>
            </div>
            <div>
              <Database className="mb-6 text-white" size={32} />
              <h4 className="text-xl font-bold text-white mb-4">Analytics</h4>
              <p className="text-zinc-500 leading-relaxed italic">Snowflake, SQL, and Python-driven insights that drive multimillion-dollar recovery.</p>
            </div>
            <div>
              <Layout className="mb-6 text-white" size={32} />
              <h4 className="text-xl font-bold text-white mb-4">Engineering</h4>
              <p className="text-zinc-500 leading-relaxed italic">Next.js, React, and Node.js for modern, performant digital experiences.</p>
            </div>
          </div>
        </section>

        <section className="mb-40">
          <SectionHeader title="Identity" />
          <div className="flex flex-wrap gap-4">
            <div className="px-8 py-4 rounded-full border border-zinc-900 bg-zinc-950 flex items-center gap-3">
              <Trophy size={20} className="text-zinc-500" />
              <span className="text-white font-bold text-xs uppercase tracking-widest">DGPT Secretary</span>
            </div>
            <div className="px-8 py-4 rounded-full border border-zinc-900 bg-zinc-950 flex items-center gap-3">
              <Cpu size={20} className="text-zinc-500" />
              <span className="text-white font-bold text-xs uppercase tracking-widest">F1 Enthusiast</span>
            </div>
            <div className="px-8 py-4 rounded-full border border-zinc-900 bg-zinc-950">
              <span className="text-white font-bold text-xs uppercase tracking-widest">Spanish Fluency</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-20 bg-zinc-950/50">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h5 className="text-white font-bold mb-2 uppercase tracking-widest text-xs">Let's Connect</h5>
            <p className="text-zinc-500 text-sm">Open for strategic AI opportunities.</p>
          </div>
          <div className="flex gap-8 text-[10px] font-bold tracking-widest uppercase text-zinc-600">
            <span>&copy; 2026 Andrew Malone</span>
            <a href="https://github.com/mandrew434" className="hover:text-white transition-colors">Github</a>
            <a href="https://linkedin.com/in/andrew-r-malone/" className="hover:text-white transition-colors">Linkedin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
