interface Props {
  name: string;
  color: string;
}

export const TechBadge = ({ name, color }: Props) => {
  return (
    <span
      className={`code-font text-xs bg-${color}/20 text-${color} px-2 py-1 rounded`}
    >
      {name}
    </span>
  );
};
