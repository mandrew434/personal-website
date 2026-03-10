import SectionHeader from "@/components/SectionHeader";
import { Award, BookOpen, MapPin } from 'lucide-react';

export default function About() {
  return (
    <main className="pt-40 pb-24 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-12 gap-20">
        <div className="md:col-span-5">
          <div className="aspect-[4/5] bg-zinc-100 border border-zinc-200 mb-10" />
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
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-zinc-900 mb-12">THE FOUNDER</h1>
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
          
          <div className="grid grid-cols-2 gap-10 border-t border-zinc-100 pt-12">
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
        </div>
      </div>
    </main>
  );
}
