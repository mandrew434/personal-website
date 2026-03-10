import Link from 'next/link';
import ProjectCard from '@/components/ui/ProjectCard';
import { ArrowLeft } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "DiscBot AI",
      category: "B2B SaaS",
      description: "Designed and launched an AI-powered chatbot for the disc golf industry. Securing enterprise clients like Disc Store and serving 450+ users through specialized product recommendation agents.",
      tags: ["OpenAI", "Prompt Engineering", "Node.js", "n8n"],
      github: "https://github.com/mandrew434"
    },
    {
      title: "Pattern Data Pipeline",
      category: "Data Strategy",
      description: "Architected SQL and Snowflake analytics pipelines to identify $3.67M in reimbursement recovery. Built Streamlit applications to automate legacy reverse-logistics workflows.",
      tags: ["Snowflake", "SQL", "Python", "Streamlit"],
    },
    {
      title: "AI Bio-Sketch Bot",
      category: "Academic Research",
      description: "Engineered an AI bio-sketch chatbot for Dr. Twyman at BYU. Focused on enhancing participant connection and engagement in academic research studies.",
      tags: ["LLMs", "Research", "Python", "Automation"],
    },
    {
      title: "E-commerce AI Framework",
      category: "Agentic Workflows",
      description: "Built a scalable framework for deploying support chatbots across 50+ sites. Integrated AI automation into CRM lead-conversion pipelines.",
      tags: ["CRM Integration", "Scalable AI", "Workflow Design"],
    }
  ];

  return (
    <div className="wrapper bg-light min-vh-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand text-dark fs-3">
            ANDREW <span className="text-primary-custom">MALONE</span>
          </Link>
          <Link href="/" className="btn btn-outline-dark d-flex align-items-center gap-2">
            <ArrowLeft size={16} /> BACK HOME
          </Link>
        </div>
      </nav>

      <section className="py-5">
        <div className="container py-5">
          <div className="mb-5">
            <h1 className="display-4 fw-black uppercase mb-3 text-dark">SELECTED <span className="text-primary-custom">PROJECTS</span></h1>
            <p className="lead text-muted max-w-2xl">A collection of strategic AI deployments and data engineering initiatives focused on measurable business impact.</p>
          </div>

          <div className="row g-4">
            {projects.map((project, i) => (
              <div key={i} className="col-lg-6">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="mt-5 pt-5 text-center">
             <div className="p-5 bg-white rounded-3 shadow-sm border">
                <h4 className="fw-bold mb-3">Looking for a technical deep-dive?</h4>
                <p className="text-muted mb-4 italic">"The value of a message is found in its impact, not its length."</p>
                <a href="https://github.com/mandrew434" target="_blank" className="btn btn-dark btn-lg px-5">EXPLORE GITHUB</a>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-4 bg-white border-top text-center mt-auto">
        <p className="text-muted small mb-0">&copy; 2026 Andrew Malone</p>
      </footer>
    </div>
  );
}
