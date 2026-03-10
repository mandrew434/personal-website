import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({ title, description, tags, link, github }: ProjectProps) {
  return (
    <div className="group p-8 rounded-3xl bg-zinc-950 border border-zinc-900 hover:border-white/20 transition-all duration-500">
      <div className="flex justify-between items-start mb-6">
        <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
        <div className="flex gap-4">
          {github && <a href={github} className="text-zinc-500 hover:text-white transition-colors"><Github size={20} /></a>}
          {link && <a href={link} className="text-zinc-500 hover:text-white transition-colors"><ExternalLink size={20} /></a>}
        </div>
      </div>
      <p className="text-zinc-400 leading-relaxed mb-8">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-zinc-900 text-zinc-500 rounded-full border border-zinc-800">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
