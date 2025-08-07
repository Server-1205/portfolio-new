interface Props {
  githubUrl?: string;
  liveUrl?: string;
  detailsUrl: string;
}

export const ProjectLinks = ({ githubUrl, liveUrl, detailsUrl }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-3">
        {githubUrl && (
          <a
            href={githubUrl}
            className="text-white/60 hover:text-primary transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            className="text-white/60 hover:text-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-external-link-alt"></i>
          </a>
        )}
      </div>

      <a
        href={detailsUrl}
        className="text-primary hover:text-accent transition-colors font-medium"
      >
        Подробнее <i className="fas fa-arrow-right ml-1"></i>
      </a>
    </div>
  );
};
