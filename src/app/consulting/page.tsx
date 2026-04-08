import Link from 'next/link';
import { 
  Settings, 
  ArrowRight, 
  Mail, 
  CheckCircle2, 
  Disc,
  LineChart,
  Bot,
  Search,
  Zap,
  Linkedin
} from 'lucide-react';

export default function Consulting() {
  const experiences = [
    {
      title: "Reverse Logistics & Data Strategy",
      client: "Pattern (Lehi, UT)",
      description: "Identified $3.67M reimbursement recovery opportunity by engineering SQL, Snowflake, and Python analytics pipelines. Built 6 Streamlit automation tools, reducing workflow time by 50%.",
      tags: ["Snowflake", "SQL", "Python", "Streamlit", "ML Pipelines"],
      icon: <LineChart className="text-primary-custom" size={32} />
    },
    {
      title: "DiscBot AI",
      client: "Founder / Disc Store",
      description: "Designed and launched a B2B AI-powered chatbot for product selection. Secured Disc Store as the first enterprise client and served 450+ users with iterative prompt engineering.",
      tags: ["Prompt Engineering", "B2B SaaS", "n8n", "Node.js"],
      icon: <Disc className="text-primary-custom" size={32} />
    },
    {
      title: "AI Integration & CRM Automation",
      client: "Extra Mile E-commerce",
      description: "Architected a scalable AI chatbot framework for 50+ sites and integrated AI workflows into existing CRM systems to optimize lead conversion.",
      tags: ["CRM Integration", "Scalable Architecture", "Automation"],
      icon: <Bot className="text-primary-custom" size={32} />
    },
    {
      title: "Research: AI & Data Automation",
      client: "Dr. Twyman (BYU IS Department)",
      description: "Automated data cleanup pipelines for 100+ study participants and engineered an AI bio-sketch chatbot for academic research engagement.",
      tags: ["Data Pipelines", "Academic Research", "Python"],
      icon: <Search className="text-primary-custom" size={32} />
    }
  ];

  return (
    <div className="wrapper bg-dark-custom min-vh-100">
      <section className="py-5 pt-5 mt-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center gap-2 badge badge-custom px-3 py-2 mb-3">
                <Zap size={14} /> AI & STRATEGY CONSULTING
              </div>
              <h1 className="display-3 fw-black text-white mb-4">ENGINEERING <span className="text-primary-custom italic">LEVERAGE</span>.</h1>
              <p className="lead text-muted mb-0">Transforming AI and analytics into operational improvements. Whether it's $3.67M in identified recovery or 50% efficiency gains, I build technical solutions that drive business outcomes.</p>
            </div>
          </div>

          <div className="row g-4 mb-5">
            {experiences.map((exp, i) => (
              <div key={i} className="col-md-6">
                <div className="card h-100 p-5 border-secondary bg-card-custom hover-lift">
                  <div className="mb-4">{exp.icon}</div>
                  <h3 className="h4 fw-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-primary-custom small fw-bold mb-3 uppercase tracking-wider">{exp.client}</p>
                  <p className="text-muted mb-4">{exp.description}</p>
                  <div className="d-flex flex-wrap gap-2 mt-auto">
                    {exp.tags.map(tag => (
                      <span key={tag} className="badge bg-dark border border-secondary text-muted px-2 py-1 small">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-5">
            <div className="col-lg-6">
              <div className="p-5 bg-card-custom rounded-4 border border-secondary h-100">
                <h2 className="h3 fw-black text-white mb-4 uppercase">GET <span className="text-primary-custom">TECHNICAL HELP</span></h2>
                <p className="text-muted mb-5">Discuss your AI strategy, data auditing, or workflow automation needs. I specialize in identifying latent profit and deploying agentic systems.</p>
                
                <form className="row g-4">
                  <div className="col-12">
                    <label className="form-label text-white small fw-bold tracking-widest">NAME</label>
                    <input type="text" className="form-control bg-dark border-secondary text-white py-3" placeholder="Your name" />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-white small fw-bold tracking-widest">EMAIL</label>
                    <input type="email" className="form-control bg-dark border-secondary text-white py-3" placeholder="you@example.com" />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-white small fw-bold tracking-widest">NATURE OF REQUEST</label>
                    <select className="form-select bg-dark border-secondary text-white py-3">
                      <option>AI / Agentic Workflow Deployment</option>
                      <option>Data Strategy / SQL & Snowflake Audits</option>
                      <option>Technical Product Strategy</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label text-white small fw-bold tracking-widest">MESSAGE</label>
                    <textarea className="form-control bg-dark border-secondary text-white py-3" rows={4} placeholder="How can I help you?"></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary-custom btn-lg w-100 py-3 d-flex align-items-center justify-content-center gap-2">
                      SUBMIT INQUIRY <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="h-100 d-flex flex-column gap-4">
                <div className="p-5 bg-dark border border-secondary rounded-4">
                  <h4 className="fw-bold text-white mb-4">Direct Contact</h4>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <div className="p-2 bg-card-custom rounded-3 text-primary-custom">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="small text-muted mb-0">Professional Email</p>
                      <a href="mailto:mandrew434@gmail.com" className="text-white text-decoration-none fw-bold">mandrew434@gmail.com</a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-2 bg-card-custom rounded-3 text-primary-custom">
                      <Linkedin size={20} />
                    </div>
                    <div>
                      <p className="small text-muted mb-0">LinkedIn Profile</p>
                      <a href="https://linkedin.com/in/andrew-r-malone/" target="_blank" className="text-white text-decoration-none fw-bold">andrew-r-malone</a>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-primary-custom text-white rounded-4 flex-grow-1 d-flex flex-column justify-content-center">
                  <h4 className="fw-black mb-4 uppercase tracking-tighter">CONSULTING TRACK RECORD</h4>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-start gap-3 mb-4">
                      <CheckCircle2 size={24} className="flex-shrink-0" />
                      <div>
                        <p className="fw-bold mb-0">$3.67M Identified Recovery</p>
                        <p className="small opacity-75">SQL & Snowflake pipelines at Pattern</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-start gap-3 mb-4">
                      <CheckCircle2 size={24} className="flex-shrink-0" />
                      <div>
                        <p className="fw-bold mb-0">50% Workflow Efficiency Gain</p>
                        <p className="small opacity-75">Streamlit & n8n automation deployments</p>
                      </div>
                    </li>
                    <li className="d-flex align-items-start gap-3">
                      <CheckCircle2 size={24} className="flex-shrink-0" />
                      <div>
                        <p className="fw-bold mb-0">Enterprise AI Scalability</p>
                        <p className="small opacity-75">Architected frameworks for 50+ sites</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 border-top border-secondary text-center">
        <p className="text-muted small mb-0">&copy; 2026 Andrew Malone</p>
      </footer>
    </div>
  );
}
