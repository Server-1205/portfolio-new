import { BgGrid } from "@/shared/ui/kit/bg-grid";
import { SectionHeading } from "@/shared/ui/kit/section-heading";
import { SkillCard } from "./skill-card";

export const SkillsSection = () => {
  return (
    <section className="py-20 bg-dark-light relative overflow-hidden">
      <BgGrid />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          supTitle="// мой стек технологий"
          subTitle="Современный стек технологий для создания высокопроизводительных веб-приложений"
          title={
            <>
              Технологии &{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Инструменты
              </span>
            </>
          }
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            title="Frontend"
            description="Создание интерактивных пользовательских интерфейсов"
            iconClass="fab fa-react"
            iconColors="from-primary to-blue-500"
            skills={[
              { name: "React", level: 5, color: "bg-primary" },
              { name: "Next.js", level: 4, color: "bg-accent" },
              { name: "TypeScript", level: 5, color: "bg-secondary" },
            ]}
          />
          <SkillCard
            title="Backend"
            description="Создание надежных серверных решений"
            iconClass="fab fa-node-js"
            iconColors="from-accent to-green-500"
            skills={[
              { name: "Node.js", level: 5, color: "bg-accent" },
              { name: "Express.js", level: 4, color: "bg-green-400" },
              { name: "MongoDB", level: 4, color: "bg-green-500" },
            ]}
          />
          <SkillCard
            title="Инструменты"
            description="Современные инструменты разработки"
            iconClass="fas fa-tools"
            iconColors="from-secondary to-purple-600"
            skills={[
              { name: "Git & GitHub", level: 5, color: "bg-secondary" },
              { name: "Docker", level: 4, color: "bg-blue-400" },
              { name: "AWS", level: 3, color: "bg-orange-400" },
            ]}
          />
        </div>
      </div>
    </section>
  );
};
