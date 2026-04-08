import Link from 'next/link';
import { 
  MessageSquare, 
  Settings, 
  FileText, 
  ArrowRight, 
  Mail, 
  CheckCircle2, 
  Disc
} from 'lucide-react';

export default function Consulting() {
  const experiences = [
    {
      title: "DiscBot AI",
      client: "Disc Store / Disc Golf Industry",
      description: "Automated customer support and product recommendations for a global leader in disc golf. Built agentic workflows that live inside CRM environments.",
      tags: ["Agentic AI", "eCommerce", "Product Discovery"],
      icon: <Disc className="text-primary-custom" size={32} />
    },
    {
      title: "Revenue Ops Strategy",
      client: "B2B SaaS",
      description: "Identifying and recovering millions in latent profit through data-driven SQL audits and intelligent automation.",
      tags: ["Data Audits", "SQL", "Snowflake"],
      icon: <Settings className="text-primary-custom" size={32} />
    }
  ];

  return (
    <div className="wrapper bg-dark-custom min-vh-100">
      <section className="py-5 pt-5 mt-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center mb-5">
            <div className="col-lg-7">
              <span className="badge badge-custom px-3 py-2 mb-3">AI & STRATEGY CONSULTING</span>
              <h1 className="display-3 fw-black text-white mb-4">ENGINEERING <span className="text-primary-custom">LEVERAGE</span>.</h1>
              <p className="lead text-muted mb-0">I help businesses bridge the gap between AI hype and technical execution. Whether it's data auditing or deploying agentic workflows, I build systems that move the needle.</p>
            </div>
          </div>

          <div className="row g-4 mb-5">
            {experiences.map((exp, i) => (
              <div key={i} className="col-md-6">
                <div className="card h-100 p-5 border-secondary bg-card-custom hover-lift">
                  <div className="mb-4">{exp.icon}</div>
                  <h3 className="h4 fw-bold text-white mb-2">{exp.title}</h3>
                  <p className="text-primary-custom small fw-bold mb-3 uppercase tracking-tighter">{exp.client}</p>
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
              <div className="p-5 bg-card-custom rounded-4 border border-secondary">
                <h2 className="h3 fw-black text-white mb-4">GET <span className="text-primary-custom">HELP</span></h2>
                <p className="text-muted mb-5">Fill out the form below to discuss your project or technical needs. I specialize in identifying data-driven recovery and deploying agentic workflows.</p>
                
                <form className="row g-4">
                  <div className="col-12">
                    <label className="form-label text-white small fw-bold">NAME</label>
                    <input type="text" className="form-control bg-dark border-secondary text-white py-3" placeholder="Your name" />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-white small fw-bold">EMAIL</label>
                    <input type="email" className="form-control bg-dark border-secondary text-white py-3" placeholder="you@example.com" />
                  </div>
                  <div className="col-12">
                    <label className="form-label text-white small fw-bold">NATURE OF REQUEST</label>
                    <select className="form-select bg-dark border-secondary text-white py-3">
                      <option>Technical Audit / Data Strategy</option>
                      <option>AI / Agentic Workflow Deployment</option>
                      <option>Custom Development</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label className="form-label text-white small fw-bold">MESSAGE</label>
                    <textarea className="form-control bg-dark border-secondary text-white py-3" rows={4} placeholder="How can I help you?"></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary-custom btn-lg w-100 py-3 d-flex align-items-center justify-content-center gap-2">
                      SEND REQUEST <ArrowRight size={18} />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="h-100 d-flex flex-column gap-4">
                <div className="p-5 bg-dark border border-secondary rounded-4">
                  <h4 className="fw-bold text-white mb-4">Direct Contact</h4>
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="p-2 bg-card-custom rounded-3 text-primary-custom">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="small text-muted mb-0">Email</p>
                      <a href="mailto:mandrew434@gmail.com" className="text-white text-decoration-none">mandrew434@gmail.com</a>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <div className="p-2 bg-card-custom rounded-3 text-primary-custom">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="small text-muted mb-0">LinkedIn</p>
                      <a href="https://linkedin.com/in/andrew-r-malone/" target="_blank" className="text-white text-decoration-none">andrew-r-malone</a>
                    </div>
                  </div>
                </div>

                <div className="p-5 bg-primary-custom text-white rounded-4 flex-grow-1 d-flex flex-column justify-content-center">
                  <h4 className="fw-black mb-3">CONSULTING TRACK RECORD</h4>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center gap-2 mb-3">
                      <CheckCircle2 size={18} />
                      <span>$3.6M+ recovery identified via SQL audits</span>
                    </li>
                    <li className="d-flex align-items-center gap-2 mb-3">
                      <CheckCircle2 size={18} />
                      <span>450+ users served via specialized agents</span>
                    </li>
                    <li className="d-flex align-items-center gap-2">
                      <CheckCircle2 size={18} />
                      <span>Production-grade AI deployed in weeks</span>
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
