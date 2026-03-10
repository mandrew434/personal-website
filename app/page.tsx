import SectionHeader from "@/components/SectionHeader";
import { Github, Linkedin, Mail, Trophy, Cpu, Database, Layout } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
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
        {/* Hero Section */}
        <section className="mb-32">
          <h1 className="text-7xl md:text-8xl font-bold tracking-tighter text-white mb-6">
            ANDREW<br />MALONE
          </h1>
          <p className="max-w-2xl text-xl md:text-2xl text-zinc-400 mb-8 leading-relaxed">
            Information Systems at BYU. 
            <span className="text-white"> AI Strategy Consultant </span> 
            transforming complex data into operational advantages.
          </p>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/andrew-r-malone/" target="_blank" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="https://github.com/mandrew434" target="_blank" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href="mailto:mandrew434@gmail.com" className="hover:text-white transition-colors"><Mail size={24} /></a>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <SectionHeader title="Experience" />
          <div className="space-y-12">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold text-white">Reverse Logistics Intern (AI & Strategy)</h3>
                <span className="text-sm text-zinc-500">2025</span>
              </div>
              <p className="text-zinc-400 mb-4 italic">Pattern</p>
              <ul className="list-disc list-inside space-y-2 text-zinc-400 marker:text-zinc-600">
                <li>Identified <span className="text-white">$3.67M reimbursement recovery</span> through SQL/Snowflake pipelines.</li>
                <li>Built 6 Streamlit automation tools, reducing workflow time by 50%.</li>
                <li>Led weekly AI workshops on applied automation strategies.</li>
              </ul>
            </div>

            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-bold text-white">AI Integration Lead</h3>
                <span className="text-sm text-zinc-500">2024 - 2025</span>
              </div>
              <p className="text-zinc-400 mb-4 italic">Extra Mile E-commerce</p>
              <ul className="list-disc list-inside space-y-2 text-zinc-400 marker:text-zinc-600">
                <li>Architected scalable AI chatbot frameworks for 50+ sites.</li>
                <li>Integrated LLM workflows into existing CRM ecosystems.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <SectionHeader title="Tech Stack" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
              <Cpu className="mb-4 text-white" />
              <h4 className="text-white font-bold mb-2">AI & Automation</h4>
              <p className="text-sm text-zinc-500">Prompt Engineering, n8n, GitHub Copilot, ML Experimentation.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
              <Database className="mb-4 text-white" />
              <h4 className="text-white font-bold mb-2">Data & Analytics</h4>
              <p className="text-sm text-zinc-500">Python (Pandas, scikit-learn), SQL (Postgres, Snowflake), Streamlit, Tableau.</p>
            </div>
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-900">
              <Layout className="mb-4 text-white" />
              <h4 className="text-white font-bold mb-2">Development</h4>
              <p className="text-sm text-zinc-500">Next.js, React, Node.js, C#, Git/GitHub.</p>
            </div>
          </div>
        </section>

        {/* Hobbies / Interests */}
        <section className="mb-32">
          <SectionHeader title="Beyond the Code" />
          <div className="flex flex-wrap gap-4">
            <div className="px-6 py-4 rounded-full border border-zinc-800 flex items-center gap-3">
              <Trophy size={18} className="text-zinc-400" />
              <span className="text-white font-medium text-sm">Disc Golf Pro Tour (DGPT)</span>
            </div>
            <div className="px-6 py-4 rounded-full border border-zinc-800 flex items-center gap-3">
              <Cpu size={18} className="text-zinc-400" />
              <span className="text-white font-medium text-sm">Formula 1 Enthusiast</span>
            </div>
            <div className="px-6 py-4 rounded-full border border-zinc-800 flex items-center gap-3">
              <span className="text-white font-medium text-sm">Spanish Fluency (Chile/Alabama)</span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-900 py-12">
        <div className="max-w-5xl mx-auto px-6 text-sm text-zinc-600 flex justify-between">
          <span>&copy; 2026 Andrew Malone</span>
          <span>Built with Next.js + OpenClaw</span>
        </div>
      </footer>
    </div>
  );
}
