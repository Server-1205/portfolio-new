import { SectionHeading } from "@/shared/ui/kit/section-heading";
import { BgGrid } from "@/shared/ui/kit/bg-grid";
import { PostCard } from "./post-card";
import { postsData } from "./post-data";
import { cn } from "@/shared/lib/css";

interface Props {
  className?: string;
}

export const RecentPosts = ({ className }: Props) => {
  return (
    <section
      className={cn("py-20 bg-dark-light relative overflow-hidden", className)}
    >
      <div className="absolute inset-0 opacity-10">
        <BgGrid />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          supTitle="// мои мысли"
          title={
            <>
              Последние{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Статьи
              </span>
            </>
          }
          subTitle="Делюсь опытом разработки, новыми технологиями и лучшими практиками"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsData.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <a
            href="/blog"
            className="group inline-flex items-center glass-effect border border-white/20 hover:border-primary/40 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
          >
            <span className="mr-2">Все статьи</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
