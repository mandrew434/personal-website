import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, Download, Linkedin, Github, Mail, 
  BarChart3, Cpu, Workflow, CheckCircle2, Sparkles, BrainCircuit, Rocket
} from 'lucide-react';

export default function Home() {
  return (
    <div className="wrapper">
      {/* Header */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top shadow-sm">
        <div className="container">
          <Link href="/" className="navbar-brand text-dark fs-3">
            ANDREW <span className="text-primary-custom">MALONE</span>
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <Link href="/" className="nav-link active fw-bold">HOME</Link>
              </li>
              <li className="nav-item">
                <Link href="/about" className="nav-link fw-bold">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link href="/projects" className="nav-link fw-bold">PROJECTS</Link>
              </li>
              <li className="nav-item">
                <Link href="mailto:mandrew434@gmail.com" className="btn btn-primary-custom ms-lg-3">HIRE ME</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero-section" style={{ background: 'linear-gradient(rgba(12, 12, 13, 0.85), rgba(12, 12, 13, 0.85)), url("/headshot.jpg")', backgroundSize: 'cover', backgroundPosition: 'center 20%' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="d-inline-flex align-items-center gap-2 badge bg-primary-custom mb-4 px-3 py-2">
                <Sparkles size={14} /> AI STRATEGY CONSULTANT
              </div>
              <h1 className="display-2 fw-black mb-4">ENGINEERING THE <span className="text-primary-custom italic">FUTURE</span> OF BUSINESS.</h1>
              <p className="lead mb-5 text-light opacity-75">Bridging the gap between high-level business goals and technical execution for forward-thinking enterprises.</p>
              <div className="d-flex gap-3">
                <Link href="/projects" className="btn btn-primary-custom btn-lg">VIEW MY WORK</Link>
                <Link href="mailto:mandrew434@gmail.com" className="btn btn-outline-light btn-lg">START A PROJECT</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-5 bg-light">
        <div className="container" style={{ marginTop: '-80px', position: 'relative', zIndex: 10 }}>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="stat-box">
                <span className="stat-number">$3.6M+</span>
                <span className="stat-label">Recovery Identified</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-box">
                <span className="stat-number">50%</span>
                <span className="stat-label">Efficiency Gain</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-box">
                <span className="stat-number">10+</span>
                <span className="stat-label">AI Deployments</span>
              </div>
            </div>
            <div className="col-md-3">
              <div className="stat-box">
                <span className="stat-number">3.95</span>
                <span className="stat-label">Academic GPA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why AI Consulting? */}
      <section className="py-5 my-5">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="section-title">THE APPROACH</h2>
              <h3 className="display-6 fw-bold mb-4">Transforming <span className="text-primary-custom">Data</span> into Decision-Making Power.</h3>
              <p className="text-muted mb-4">I help organizations navigate the rapidly evolving AI landscape. My focus isn't on hype—it's on **Applied Intelligence**.</p>
              <ul className="list-unstyled space-y-3">
                <li className="d-flex gap-3 mb-3">
                  <div className="text-primary-custom"><BrainCircuit size={24} /></div>
                  <div>
                    <h5 className="fw-bold mb-1">Strategic Integration</h5>
                    <p className="small text-muted">Architecting AI that fits your specific business DNA and CRM ecosystem.</p>
                  </div>
                </li>
                <li className="d-flex gap-3 mb-3">
                  <div className="text-primary-custom"><Rocket size={24} /></div>
                  <div>
                    <h5 className="fw-bold mb-1">Rapid Deployment</h5>
                    <p className="small text-muted">From architecture to live production in weeks, not quarters.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="p-5 bg-dark rounded-4 shadow-2xl text-white">
                <h4 className="fw-bold mb-4 border-bottom border-secondary pb-3 text-primary-custom">Current Focus</h4>
                <div className="mb-4">
                  <p className="small fw-bold text-uppercase tracking-widest text-secondary mb-1">01 / Agentic RAG</p>
                  <p className="mb-0">Building knowledge-bases that don't just answer questions, but execute tasks.</p>
                </div>
                <div className="mb-4">
                  <p className="small fw-bold text-uppercase tracking-widest text-secondary mb-1">02 / Revenue Ops</p>
                  <p className="mb-0">Automating lead-to-close workflows with intelligent CRM integration.</p>
                </div>
                <div>
                  <p className="small fw-bold text-uppercase tracking-widest text-secondary mb-1">03 / Data Audits</p>
                  <p className="mb-0">Identifying latent profit in Snowflake and SQL datasets.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-black">CONSULTING <span className="text-primary-custom">SERVICES</span></h2>
            <div className="bg-primary-custom mx-auto mt-3" style={{ width: '60px', height: '3px' }}></div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 p-5 border-0 shadow-sm">
                <div className="bg-light d-inline-flex p-3 rounded-3 mb-4 text-primary-custom"><BarChart3 size={32} /></div>
                <h3 className="h4 fw-bold mb-3">Data Strategy</h3>
                <p className="text-muted">Mining millions in recovery opportunities through advanced SQL and Snowflake engineering.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-5 border-0 shadow-sm">
                <div className="bg-light d-inline-flex p-3 rounded-3 mb-4 text-primary-custom"><Workflow size={32} /></div>
                <h3 className="h4 fw-bold mb-3">Agentic Workflows</h3>
                <p className="text-muted">Deploying scalable AI chatbot frameworks and agentic workflows that live inside your CRM.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-5 border-0 shadow-sm">
                <div className="bg-light d-inline-flex p-3 rounded-3 mb-4 text-primary-custom"><Cpu size={32} /></div>
                <h3 className="h4 fw-bold mb-3">Applied AI/ML</h3>
                <p className="text-muted">Bridging the gap between academic ML research and production-grade business tools.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-5 bg-dark text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <span className="h4 fw-black">MALONE<span className="text-primary-custom">.</span></span>
              <p className="mt-3 text-muted">The Jarvis-standard for business intelligence.</p>
            </div>
            <div className="col-md-6 text-md-end">
              <p className="text-muted small mb-0">&copy; 2026 Andrew Malone. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
