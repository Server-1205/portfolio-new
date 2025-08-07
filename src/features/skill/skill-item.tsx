interface Props {
  name: string;
  level: number;
  color: string;
}

export const SkillItem = ({ name, level, color }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <span className="text-white/80">{name}</span>
      <div className="flex space-x-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index < level ? color : "bg-white/30"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};
