interface Props {
  url: string;
  text?: string;
}

export const PostLink = ({ url, text = "Читать статью" }: Props) => {
  return (
    <a
      href={url}
      className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium group"
    >
      {text}
      <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
    </a>
  );
};
