import Link from 'next/link';
import Image from 'next/image';
import { 
  CheckCircle2, Award, BookOpen, 
  MapPin, Globe, Trophy, GraduationCap 
} from 'lucide-react';

export default function About() {
  return (
    <div className="wrapper bg-dark-custom min-vh-100 pt-5">
      <section className="py-5 mt-5">
        <div className="container">
          <div className="row g-5 text-main">
            <div className="col-lg-4">
              <div className="card p-3 shadow-lg border-secondary bg-card-custom">
                <div className="relative aspect-[4/5] rounded-2 overflow-hidden mb-4 border border-secondary">
                  <Image src="/marriott-hall.jpg" alt="Andrew Malone at BYU Marriott" fill className="object-cover" />
                </div>
                <div className="px-2">
                  <h1 className="h3 fw-black mb-1 text-white">ANDREW MALONE</h1>
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
                  <hr className="my-4 border-secondary" />
                  <Link href="mailto:mandrew434@gmail.com" className="btn btn-primary-custom w-100 mb-3 text-white">GET IN TOUCH</Link>
                </div>
              </div>
            </div>
            
            <div className="col-lg-8">
              <div className="bg-card-custom p-5 rounded-4 shadow-sm border border-secondary">
                <h2 className="section-title text-white">THE FOUNDER</h2>
                <div className="fs-5 text-muted leading-relaxed mb-5">
                  <p className="mb-4">
                    Andrew Malone is a high-performance Information Systems professional specializing in the intersection of AI, data engineering, and business strategy.
                  </p>
                  <p className="mb-4">
                    As a student in the <span className="text-white fw-bold">Integrated Bachelor's/Master's (MISM) program</span> at the BYU Marriott School of Business, Andrew is part of one of the top-ranked IS programs in the nation—designed to produce technical leaders who speak the language of business.
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
                    <div className="p-4 bg-dark-custom rounded-4 h-100 border border-secondary text-white">
                      <div className="text-primary-custom mb-3"><GraduationCap size={32} /></div>
                      <h4 className="h5 fw-bold mb-3 text-white">National Standing</h4>
                      <p className="small text-muted mb-0">Part of the 5-year integrated MISM path at BYU, a STEM-certified program consistently ranked in the global top 10 for Information Systems.</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="p-4 bg-dark-custom rounded-4 h-100 border border-secondary text-white">
                      <div className="text-primary-custom mb-3"><Trophy size={32} /></div>
                      <h4 className="h5 fw-bold mb-3 text-white">Interests</h4>
                      <p className="small text-muted mb-0">Secretary for the BYU Disc Golf Team and DGPT competitor. Dedicated Formula 1 enthusiast.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-top border-secondary">
                  <h4 className="h6 fw-black tracking-widest uppercase mb-4 text-white">Strategic Toolkit</h4>
                  <div className="d-flex flex-wrap gap-2">
                    {['Next.js', 'Python', 'SQL', 'Snowflake', 'Streamlit', 'AWS', 'Prompt Engineering', 'ML Pipelines'].map(skill => (
                      <span key={skill} className="badge bg-dark text-primary-custom border border-secondary px-3 py-2 fw-medium shadow-sm">{skill}</span>
                    ))}
                  </div>
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
