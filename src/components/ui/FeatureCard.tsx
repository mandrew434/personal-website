import { LucideIcon } from 'lucide-react';

export default function FeatureCard({ icon: Icon, title, description, delay }: { icon: LucideIcon, title: string, description: string, delay: string }) {
  return (
    <div className="group p-8 rounded-2xl bg-white border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: delay }}>
      <div className="w-14 h-14 rounded-2xl bg-zinc-50 flex items-center justify-center mb-6 group-hover:bg-[#00A9D9] group-hover:text-white transition-colors duration-500">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-bold text-zinc-900 mb-4 tracking-tight">{title}</h3>
      <p className="text-zinc-500 leading-relaxed text-sm">{description}</p>
    </div>
  );
}
