import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, Download, Linkedin, Github, Mail, 
  BarChart3, Cpu, Workflow, CheckCircle2 
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
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="badge bg-primary-custom mb-4 px-3 py-2">AI STRATEGY CONSULTANT</span>
              <h1 className="display-2 fw-black mb-4">DRIVING IMPACT THROUGH <span className="text-primary-custom">APPLIED INTELLIGENCE.</span></h1>
              <p className="lead mb-5 text-light opacity-75">Bridging the gap between high-level business goals and technical execution for forward-thinking enterprises.</p>
              <div className="d-flex gap-3">
                <Link href="/projects" className="btn btn-primary-custom btn-lg">VIEW MY WORK</Link>
                <Link href="mailto:mandrew434@gmail.com" className="btn btn-outline-light btn-lg">CONTACT ME</Link>
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
                <span className="stat-number">450+</span>
                <span className="stat-label">AI Users Served</span>
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

      {/* About Section */}
      <section className="py-5 my-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="position-relative">
                <div className="position-absolute bg-primary-custom w-100 h-100 rounded-3" style={{ top: '20px', left: '20px', zIndex: -1 }}></div>
                <Image src="/headshot.jpg" alt="Andrew Malone" width={500} height={600} className="img-fluid rounded-3 shadow-lg" />
              </div>
            </div>
            <div className="col-lg-7">
              <h2 className="section-title">MY STORY</h2>
              <p className="fs-4 text-dark mb-4 fw-semibold">I am an Information Systems professional at BYU, transforming complex data into operational advantages.</p>
              <p className="text-muted mb-5">Currently pursuing my MISM, I have delivered multi-million dollar impacts at Pattern and architected enterprise AI solutions. My focus is on <span className="text-primary-custom fw-bold">Applied Intelligence</span>—delivering measurable ROI through deliberate technology deployment.</p>
              
              <div className="row g-4 mb-5">
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light p-2 rounded-circle text-primary-custom"><CheckCircle2 size={24} /></div>
                    <span className="fw-bold">AI Strategy & Deployment</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light p-2 rounded-circle text-primary-custom"><CheckCircle2 size={24} /></div>
                    <span className="fw-bold">Data Engineering (SQL/Snowflake)</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light p-2 rounded-circle text-primary-custom"><CheckCircle2 size={24} /></div>
                    <span className="fw-bold">Applied ML (Python/Sk-Learn)</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-3">
                    <div className="bg-light p-2 rounded-circle text-primary-custom"><CheckCircle2 size={24} /></div>
                    <span className="fw-bold">Strategic Technology Consulting</span>
                  </div>
                </div>
              </div>
              
              <div className="d-flex gap-4">
                <a href="https://linkedin.com/in/andrew-r-malone/" className="text-muted hover:text-primary-custom transition-colors"><Linkedin size={24} /></a>
                <a href="https://github.com/mandrew434" className="text-muted hover:text-primary-custom transition-colors"><Github size={24} /></a>
                <a href="mailto:mandrew434@gmail.com" className="text-muted hover:text-primary-custom transition-colors"><Mail size={24} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-5 bg-light">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-black">WHAT I <span className="text-primary-custom">DO</span></h2>
            <div className="bg-primary-custom mx-auto mt-3" style={{ width: '60px', height: '3px' }}></div>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 p-5">
                <div className="bg-light d-inline-flex p-3 rounded-3 mb-4 text-primary-custom"><BarChart3 size={32} /></div>
                <h3 className="h4 fw-bold mb-3">Data Strategy</h3>
                <p className="text-muted">Turning raw infrastructure into multimillion-dollar recovery pipelines via SQL, Snowflake, and advanced analytics.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-5">
                <div className="bg-light d-inline-flex p-3 rounded-3 mb-4 text-primary-custom"><Workflow size={32} /></div>
                <h3 className="h4 fw-bold mb-3">Agentic Workflows</h3>
                <p className="text-muted">Architecting scalable AI frameworks and chatbot systems that integrate directly with enterprise CRM ecosystems.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 p-5">
                <div className="bg-light d-inline-flex p-3 rounded-3 mb-4 text-primary-custom"><Cpu size={32} /></div>
                <h3 className="h4 fw-bold mb-3">Applied AI/ML</h3>
                <p className="text-muted">Engineering machine learning solutions for logistics, predictive maintenance, and operational forecasting.</p>
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
              <p className="mt-3 text-muted">Building the future of business through Applied Intelligence.</p>
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
