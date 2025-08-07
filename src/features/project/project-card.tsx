import { TechBadge } from "./tech-badge";
import { ProjectLinks } from "./project-links";
import type { Project } from "./project-data";

interface Props {
  project: Project;
}

export const ProjectCard = ({ project }: Props) => {
  return (
    <div className="scroll-reveal group">
      <div
        className={`relative glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-${project.hoverColor}/30 transition-all duration-500 hover:scale-105`}
      >
        {/* Project Image/Icon Area */}
        <div
          className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}
        >
          <div className="absolute inset-0 bg-dark/40"></div>

          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <i className={`${project.icon} text-6xl text-white/60 mb-4`}></i>
              <div className={`code-font text-${project.hoverColor}`}>
                {project.iconLabel}
              </div>
            </div>
          </div>

          {/* Top Tech Badges */}
          <div className="absolute top-4 left-4 flex space-x-2">
            {project.topTechs.map((tech) => (
              <span
                key={tech.name}
                className={`glass-effect px-2 py-1 rounded text-xs code-font text-${tech.color} border border-${tech.color}/20`}
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <h3
            className={`text-xl font-bold text-white mb-3 group-hover:text-${project.hoverColor} transition-colors`}
          >
            {project.title}
          </h3>

          <p className="text-white/60 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Technology Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <TechBadge key={tech.name} name={tech.name} color={tech.color} />
            ))}
          </div>

          {/* Links */}
          <ProjectLinks
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
            detailsUrl={project.detailsUrl}
          />
        </div>
      </div>
    </div>
  );
};
