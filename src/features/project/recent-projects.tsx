import { SectionHeading } from "@/shared/ui/kit/section-heading";
import { ProjectCard } from "./project-card";
import { projectsData } from "./project-data";
import { cn } from "@/shared/lib/css";

interface Props {
  className?: string;
}

export const RecentProjects = ({ className }: Props) => {
  return (
    <section
      className={cn("py-20 bg-dark relative overflow-hidden", className)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          supTitle="// мои работы"
          title={
            <>
              Избранные{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Проекты
              </span>
            </>
          }
          subTitle="Коллекция моих последних проектов с использованием современных технологий"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <a
            href="/portfolio"
            className="group inline-flex items-center bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
          >
            <span className="mr-2">Все проекты</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
