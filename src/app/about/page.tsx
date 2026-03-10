import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowLeft, CheckCircle2, Award, BookOpen, 
  MapPin, Globe, Trophy, GraduationCap 
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
              <div className="card p-3 shadow-lg border-0">
                <div className="relative aspect-[4/5] rounded-2 overflow-hidden mb-4">
                  <Image src="/headshot.jpg" alt="Andrew Malone" fill className="object-cover" />
                </div>
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
              <div className="bg-white p-5 rounded-4 shadow-sm">
                <h2 className="section-title">THE FOUNDER</h2>
                <div className="fs-5 text-muted leading-relaxed mb-5">
                  <p className="mb-4">
                    Andrew Malone is a high-performance Information Systems professional specializing in the intersection of AI, data engineering, and business strategy.
                  </p>
                  <p className="mb-4">
                    As a student in the <span className="text-dark fw-bold">Integrated Bachelor's/Master's (MISM) program</span> at the BYU Marriott School of Business, Andrew is part of one of the top-ranked IS programs in the nation—designed to produce technical leaders who speak the language of business.
                  </p>
                  <p className="mb-4">
                    His career is centered on <span className="text-primary-custom fw-bold">measurable impact</span>. During his tenure at Pattern, he identified over $3.6M in lost revenue opportunities through advanced Snowflake and SQL analytics pipelines—a testament to his ability to bridge technical complexity with financial ROI.
                  </p>
                  <p>
                    As a Marriott Research Fellow and AMCIS presenter, Andrew balances academic rigor with rapid execution. This is best exemplified by the **INTEX integrated experience**, where he led teams to architect full-scale web applications within intense one-week sprints.
                  </p>
                </div>

                <div className="row g-4 mt-2">
                  <div className="col-md-6">
                    <div className="p-4 bg-light rounded-4 h-100 border">
                      <div className="text-primary-custom mb-3"><GraduationCap size={32} /></div>
                      <h4 className="h5 fw-bold mb-3 text-dark">National Standing</h4>
                      <p className="small text-muted mb-0">Part of the 5-year integrated MISM path at BYU, a STEM-certified program consistently ranked in the global top 10 for Information Systems.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-4 bg-light rounded-4 h-100 border">
                      <div className="text-primary-custom mb-3"><Trophy size={32} /></div>
                      <h4 className="h5 fw-bold mb-3 text-dark">Interests</h4>
                      <p className="small text-muted mb-0">Secretary for the BYU Disc Golf Team and DGPT competitor. Dedicated Formula 1 enthusiast.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-top">
                  <h4 className="h6 fw-black tracking-widest uppercase mb-4 text-dark">Strategic Toolkit</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {['Next.js', 'Python', 'SQL', 'Snowflake', 'Streamlit', 'AWS', 'Prompt Engineering', 'ML Pipelines'].map(skill => (
                      <span key={skill} className="badge bg-white text-dark border px-3 py-2 fw-medium shadow-sm">{skill}</span>
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
