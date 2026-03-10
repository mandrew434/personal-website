import Image from 'next/image';
import { Award, BookOpen, MapPin, Trophy } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-40 pb-24 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-12 gap-20">
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] bg-zinc-100 rounded-3xl overflow-hidden border border-zinc-200 shadow-xl mb-10">
            <Image src="/headshot.jpg" alt="Andrew Malone" fill className="object-cover" />
          </div>
          <div className="space-y-6">
             <div className="flex gap-4 items-center text-zinc-500">
                <MapPin size={20} />
                <span className="font-bold tracking-widest uppercase text-[10px]">Provo, Utah / Remote</span>
             </div>
             <div className="flex gap-4 items-center text-zinc-500">
                <BookOpen size={20} />
                <span className="font-bold tracking-widest uppercase text-[10px]">BYU Marriott School of Business</span>
             </div>
          </div>
        </div>
        <div className="md:col-span-7">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 mb-12 uppercase leading-[0.9]">THE<br />FOUNDER</h1>
          <div className="prose prose-zinc prose-xl max-w-none text-zinc-500 font-medium leading-relaxed">
            <p className="mb-8 text-zinc-900">
              Andrew Malone is an Information Systems professional and AI strategist specializing in the intersection of emerging technology and business operations.
            </p>
            <p className="mb-8">
              Currently pursuing a Master of Information Systems Management (MISM) at BYU, Andrew has already delivered significant financial impact through data-driven automation. At Pattern, he identified over $3.6M in reimbursement recovery opportunities by engineering custom SQL and Python analytics pipelines.
            </p>
            <p className="mb-12">
              His work is characterized by a "Jarvis-standard" for excellence—striving for high-density impact and precision in every deployment. Whether it's architecting scalable chatbot frameworks or engineering ML pipelines, the goal remains the same: transforming raw data into a competitive business advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-10 border-t border-zinc-100 pt-12 mb-20">
             <div>
                <h4 className="text-zinc-900 font-black tracking-widest uppercase text-[10px] mb-6">Education</h4>
                <p className="text-zinc-500 text-sm font-bold mb-2">MISM & BS Information Systems</p>
                <p className="text-zinc-400 text-xs tracking-wide uppercase">Brigham Young University</p>
             </div>
             <div>
                <h4 className="text-zinc-900 font-black tracking-widest uppercase text-[10px] mb-6">Honors</h4>
                <p className="text-zinc-500 text-sm font-bold mb-2">Marriott Research Fellow</p>
                <p className="text-zinc-400 text-xs tracking-wide uppercase">Dean's List (2023-2025)</p>
             </div>
          </div>

          <div className="p-10 bg-zinc-50 rounded-3xl border border-zinc-100 flex flex-col md:flex-row gap-10 items-center">
             <div className="relative w-48 aspect-video rounded-xl overflow-hidden shrink-0">
                <Image src="/disc-golf.jpg" alt="Disc Golf" fill className="object-cover" />
             </div>
             <div>
                <h4 className="flex items-center gap-2 text-zinc-900 font-bold mb-3">
                   <Trophy size={18} />
                   Identity & Interests
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                   Outside of AI, I serve as the Secretary for the BYU Disc Golf Team and compete in the DGPT. I'm also a dedicated Formula 1 enthusiast and fluent in Spanish after two years of service in Chile and Alabama.
                </p>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
