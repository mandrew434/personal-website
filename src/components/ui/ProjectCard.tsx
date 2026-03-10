import { Github, ExternalLink } from 'lucide-react';

interface ProjectProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({ title, category, description, tags, link, github }: ProjectProps) {
  return (
    <div className="card h-100 border-0 shadow-sm hover-translate overflow-hidden">
      <div className="p-5">
        <div className="d-flex justify-content-between align-items-start mb-4">
          <div>
            <span className="text-primary-custom fw-bold small mb-1 d-block tracking-widest uppercase">{category}</span>
            <h3 className="h4 fw-black text-dark">{title}</h3>
          </div>
          <div className="d-flex gap-2">
            {github && <a href={github} target="_blank" className="text-muted hover:text-primary-custom transition-colors"><Github size={20} /></a>}
            {link && <a href={link} target="_blank" className="text-muted hover:text-primary-custom transition-colors"><ExternalLink size={20} /></a>}
          </div>
        </div>
        <p className="text-muted mb-4 small leading-relaxed">{description}</p>
        <div className="d-flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="badge bg-light text-dark border-0 px-2 py-1 small fw-medium">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
