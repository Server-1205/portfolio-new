interface Tag {
  name: string;
  color: string;
}

interface Props {
  tags: Tag[];
}

export const PostTags = ({ tags }: Props) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span
          key={tag.name}
          className={`code-font text-xs bg-${tag.color}/20 text-${tag.color} px-2 py-1 rounded hover:bg-${tag.color}/30 transition-colors cursor-pointer`}
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
};
