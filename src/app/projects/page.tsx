import Link from 'next/link';
import ProjectCard from '@/components/ui/ProjectCard';
import { ArrowLeft, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "DiscBot AI",
      category: "B2B SaaS / Venture",
      description: "Designed and launched an AI-powered chatbot for the disc golf industry. Successfully secured enterprise clients like Disc Store and served 450+ users through specialized product recommendation agents.",
      tags: ["OpenAI", "Prompt Engineering", "Node.js", "n8n"],
      github: "https://github.com/mandrew434",
      link: "https://discbot.ai"
    },
    {
      title: "INTEX: Integrated Experience",
      category: "Full-Stack Development",
      description: "A high-intensity Junior year capstone. Developed a full-scale web application for a specific business case within a one-week sprint, integrating complex database design with modern frontend architecture.",
      tags: ["Next.js", "C#", "SQL Server", "Rapid Prototyping"],
      github: "https://github.com/mandrew434/intex_winter"
    },
    {
      title: "ML Resources Library",
      category: "Data Science",
      description: "A curated repository of machine learning resources, featuring specialized implementations in Python and scikit-learn for business analytics and predictive modeling.",
      tags: ["Python", "scikit-learn", "Data Analytics", "ML"],
      github: "https://github.com/mandrew434/MLresources"
    },
    {
      title: "Pattern Data Pipeline",
      category: "Data Strategy",
      description: "Architected SQL and Snowflake analytics pipelines to identify $3.67M in reimbursement recovery. Built Streamlit applications to automate legacy reverse-logistics workflows.",
      tags: ["Snowflake", "SQL", "Python", "Streamlit"],
    }
  ];

  return (
    <div className="wrapper bg-dark-custom min-vh-100 pt-5">
      <section className="py-5 mt-5">
        <div className="container py-5">
          <div className="mb-5">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge badge-custom px-2 py-1 small">PORTFOLIO</span>
            </div>
            <h1 className="display-4 fw-black uppercase mb-3 text-white">SELECTED <span className="text-primary-custom">ENGAGEMENTS</span></h1>
            <p className="lead text-muted max-w-2xl">From high-intensity BYU INTEX sprints to enterprise data strategy, here is a selection of my technical and strategic work.</p>
          </div>

          <div className="row g-4">
            {projects.map((project, i) => (
              <div key={i} className="col-lg-6">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          <div className="mt-5 pt-5">
             <div className="row g-4">
                <div className="col-md-8">
                   <div className="p-5 bg-card-custom text-white rounded-4 shadow-lg h-100 border border-secondary">
                      <h4 className="fw-black text-primary-custom mb-4 uppercase tracking-widest">Technical Deep-Dive</h4>
                      <p className="fs-5 opacity-75 mb-4 italic">"The value of a message is found in its impact, not its length."</p>
                      <p className="text-muted small mb-5">Explore my full repository of class activities, ML resources, and open-source contributions on GitHub.</p>
                      <a href="https://github.com/mandrew434" target="_blank" className="btn btn-primary-custom btn-lg px-5">EXPLORE GITHUB <ExternalLink size={18} className="ms-2" /></a>
                   </div>
                </div>
                <div className="col-md-4">
                   <div className="p-5 bg-dark border border-secondary rounded-4 h-100 flex-column d-flex justify-content-center">
                      <h5 className="fw-bold mb-3 text-white">Venture Focus</h5>
                      <p className="small text-muted mb-0">Currently exploring the intersection of **Agentic RAG** and **Revenue Operations**.</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      <footer className="py-4 border-top border-secondary text-center mt-auto">
        <p className="text-muted small mb-0">&copy; 2026 Andrew Malone</p>
      </footer>
    </div>
  );
}
