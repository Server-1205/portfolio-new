import { PostMeta } from "./post-meta";
import { PostTags } from "./post-tags";
import { PostLink } from "./post-link";
import type { Post } from "./post-data";

interface Props {
  post: Post;
}

export const PostCard = ({ post }: Props) => {
  return (
    <article
      className={`scroll-reveal glass-effect rounded-2xl p-6 border border-white/10 hover:border-${post.hoverColor}/30 transition-all duration-500 group hover:scale-105`}
    >
      <PostMeta
        date={post.date}
        readTime={post.readTime}
        indicators={post.indicators}
      />

      <h3
        className={`text-xl font-bold text-white mb-3 group-hover:text-${post.hoverColor} transition-colors`}
      >
        <a href={post.url}>{post.title}</a>
      </h3>

      <p className="text-white/60 mb-4 leading-relaxed">{post.excerpt}</p>

      <PostTags tags={post.tags} />

      <PostLink url={post.url} />
    </article>
  );
};
