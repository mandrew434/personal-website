import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Trophy, Mountain, Flag, Heart } from 'lucide-react';

export default function Identity() {
  const hobbies = [
    {
      title: "Disc Golf",
      role: "Competitor & Team Secretary",
      desc: "Competing on the Disc Golf Pro Tour (DGPT) and managing operations for the BYU Disc Golf team. It's the perfect blend of physics, focus, and the great outdoors.",
      img: "/jolleys-ranch.jpg"
    },
    {
      title: "Mountain Sports",
      role: "Rock Climbing & Adventure",
      desc: "From the Wasatch Range to the Andes, I find clarity on the rock. Climbing is about solving vertical puzzles—much like architecting a complex AI system.",
      img: "/climbing.jpg"
    },
    {
      title: "BYU Sports",
      role: "Dedicated Cougar Fan",
      desc: "Nothing beats the energy of LaVell Edwards Stadium. Proudly supporting BYU athletics as a Marriott student.",
      img: "/byu-sports.jpg"
    },
    {
      title: "Formula 1",
      role: "Technical Enthusiast",
      desc: "Fascinated by the intersection of high-performance engineering and data-driven strategy. Watching the Mercedes vs. Red Bull development race is a weekly ritual.",
      img: "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="wrapper bg-light min-vh-100">
      

      <section className="py-5">
        <div className="container py-5">
          <div className="text-center mb-5 pb-5">
            <span className="badge bg-primary-custom mb-3 px-3 py-2 uppercase tracking-widest">Beyond the Code</span>
            <h1 className="display-3 fw-black uppercase text-dark">IDENTITY & <span className="text-primary-custom">PASSIONS</span></h1>
            <p className="lead text-muted max-w-2xl mx-auto mt-3">The interests and adventures that drive my perspective as a strategist and problem solver.</p>
          </div>

          <div className="row g-5">
            {hobbies.map((h, i) => (
              <div key={i} className="col-md-6">
                <div className="card border-0 shadow-lg h-100 rounded-4 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <Image src={h.img} alt={h.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark/60 to-transparent" />
                  </div>
                  <div className="p-5">
                    <div className="d-flex align-items-center gap-2 text-primary-custom fw-bold small uppercase tracking-wider mb-2">
                      {i === 0 && <Trophy size={16} />}
                      {i === 1 && <Mountain size={16} />}
                      {i === 2 && <Heart size={16} />}
                      {i === 3 && <Flag size={16} />}
                      {h.role}
                    </div>
                    <h3 className="h3 fw-black text-dark mb-3">{h.title}</h3>
                    <p className="text-muted leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-5 bg-dark text-white text-center mt-5">
        <p className="text-muted small mb-0">&copy; 2026 Andrew Malone • Built to the LAYN Standard</p>
      </footer>
    </div>
  );
}
