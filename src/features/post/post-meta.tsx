interface Props {
  date: string;
  readTime?: string;
  indicators: string[];
}

export const PostMeta = ({ date, readTime, indicators }: Props) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center space-x-3">
        <div className="code-font text-sm text-accent">{date}</div>
        {readTime && (
          <div className="code-font text-xs text-white/40">• {readTime}</div>
        )}
      </div>

      <div className="flex space-x-2">
        {indicators.map((color, index) => (
          <span key={index} className={`w-2 h-2 bg-${color} rounded-full`} />
        ))}
      </div>
    </div>
  );
};
