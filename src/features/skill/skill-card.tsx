import { SkillItem } from "./skill-item";

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface Props {
  title: string;
  description: string;
  iconClass: string;
  iconColors: string;
  skills: Skill[];
}

export const SkillCard = ({
  title,
  description,
  iconClass,
  iconColors,
  skills,
}: Props) => {
  return (
    <div className="scroll-reveal glass-effect p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-500 group hover:scale-105">
      <div
        className={`w-16 h-16 bg-gradient-to-br ${iconColors} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow`}
      >
        <i className={`${iconClass} text-white text-3xl`}></i>
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 text-center">
        {title}
      </h3>
      <p className="text-white/60 mb-6 text-center">{description}</p>

      <div className="space-y-4">
        {skills.map((skill) => (
          <SkillItem
            key={skill.name}
            name={skill.name}
            level={skill.level}
            color={skill.color}
          />
        ))}
      </div>
    </div>
  );
};
