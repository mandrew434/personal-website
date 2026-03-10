import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, CheckCircle2, Award, BookOpen, 
  MapPin, Globe, Trophy 
} from 'lucide-react';

export default function About() {
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

      <section className="py-5 my-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="card p-3 shadow-lg">
                <Image src="/headshot.jpg" alt="Andrew Malone" width={400} height={500} className="img-fluid rounded-2 mb-4" />
                <div className="px-2">
                  <h1 className="h3 fw-black mb-1">ANDREW MALONE</h1>
                  <p className="text-primary-custom fw-bold small mb-4 tracking-widest uppercase">AI Strategy Consultant</p>
                  
                  <div className="space-y-3">
                    <div className="d-flex align-items-center gap-3 text-muted small mb-3">
                      <MapPin size={16} /> Provo, Utah / Remote
                    </div>
                    <div className="d-flex align-items-center gap-3 text-muted small mb-3">
                      <BookOpen size={16} /> BYU Marriott School
                    </div>
                    <div className="d-flex align-items-center gap-3 text-muted small mb-3">
                      <Globe size={16} /> Spanish Fluency
                    </div>
                  </div>
                  <hr className="my-4" />
                  <Link href="mailto:mandrew434@gmail.com" className="btn btn-primary-custom w-100 mb-3">GET IN TOUCH</Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-8">
              <div className="bg-white p-5 rounded-3 shadow-sm">
                <h2 className="section-title">THE FOUNDER</h2>
                <div className="fs-5 text-muted leading-relaxed mb-5">
                  <p className="mb-4">
                    Andrew Malone is a high-performance Information Systems professional specializing in the intersection of AI, data engineering, and business strategy.
                  </p>
                  <p className="mb-4">
                    Currently pursuing a Master of Information Systems Management (MISM) at Brigham Young University, Andrew has built a career centered on <span className="text-primary-custom fw-bold">measurable impact</span>. His tenure at Pattern saw the identification of over $3.6M in lost revenue opportunities through advanced analytics—a testament to his ability to bridge technical complexity with financial ROI.
                  </p>
                  <p>
                    As a Marriott Research Fellow and AMCIS presenter, Andrew balances academic rigor with rapid, real-world execution. Whether he is architecting enterprise-scale chatbot frameworks or competing on the Disc Golf Pro Tour, he brings a relentless focus on precision and excellence.
                  </p>
                </div>

                <div className="row g-4 mt-2">
                  <div className="col-md-6">
                    <div className="p-4 bg-light rounded-3 h-100">
                      <div className="text-primary-custom mb-3"><Award size={32} /></div>
                      <h4 className="h5 fw-bold mb-3">Education</h4>
                      <p className="small text-muted mb-0">MISM & BS Information Systems<br /><strong>Brigham Young University</strong></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-4 bg-light rounded-3 h-100">
                      <div className="text-primary-custom mb-3"><Trophy size={32} /></div>
                      <h4 className="h5 fw-bold mb-3">Interests</h4>
                      <p className="small text-muted mb-0">BYU Disc Golf Team Secretary<br />Formula 1 Enthusiast</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-top">
                  <h4 className="h6 fw-black tracking-widest uppercase mb-4">Core Competencies</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {['Next.js', 'Python', 'SQL', 'Snowflake', 'Streamlit', 'AWS', 'Prompt Engineering', 'ML Pipelines'].map(skill => (
                      <span key={skill} className="badge bg-light text-dark border px-3 py-2">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 bg-white border-top text-center">
        <p className="text-muted small mb-0">&copy; 2026 Andrew Malone</p>
      </footer>
    </div>
  );
}
