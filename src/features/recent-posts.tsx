interface Props {
  classNameName?: string;
}

export const RecentPosts = ({}: Props) => {
  return (
    <section className="py-20 bg-dark-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-bg h-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <div className="code-font text-accent mb-4">// мои мысли</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Последние
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Статьи
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Делюсь опытом разработки, новыми технологиями и лучшими практиками
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article className="scroll-reveal glass-effect rounded-2xl p-6 border border-white/10 hover:border-primary/30 transition-all duration-500 group hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="code-font text-sm text-accent">27 Июля 2025</div>
              <div className="flex space-x-2">
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
              <a href="blog-post.html">
                React 18: Новые возможности и Concurrent Features
              </a>
            </h3>

            <p className="text-white/60 mb-4 leading-relaxed">
              Глубокое погружение в новые возможности React 18, включая
              Concurrent Rendering, Suspense и автоматический батчинг...
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="code-font text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                React
              </span>
              <span className="code-font text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                JavaScript
              </span>
              <span className="code-font text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                Frontend
              </span>
            </div>

            <a
              href="blog-post.html"
              className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
            >
              Читать статью
              <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </a>
          </article>

          <article className="scroll-reveal glass-effect rounded-2xl p-6 border border-white/10 hover:border-accent/30 transition-all duration-500 group hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="code-font text-sm text-accent">22 Июля 2025</div>
              <div className="flex space-x-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span className="w-2 h-2 bg-primary rounded-full"></span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
              <a href="blog-post.html">
                Next.js 14: App Router и Server Components
              </a>
            </h3>

            <p className="text-white/60 mb-4 leading-relaxed">
              Полное руководство по новому App Router в Next.js 14 и
              эффективному использованию Server Components для
              производительности...
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="code-font text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                Next.js
              </span>
              <span className="code-font text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                React
              </span>
              <span className="code-font text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                SSR
              </span>
            </div>

            <a
              href="blog-post.html"
              className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
            >
              Читать статью
              <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </a>
          </article>

          <article className="scroll-reveal glass-effect rounded-2xl p-6 border border-white/10 hover:border-secondary/30 transition-all duration-500 group hover:scale-105">
            <div className="flex items-center justify-between mb-4">
              <div className="code-font text-sm text-accent">18 Июля 2025</div>
              <div className="flex space-x-2">
                <span className="w-2 h-2 bg-secondary rounded-full"></span>
                <span className="w-2 h-2 bg-primary rounded-full"></span>
                <span className="w-2 h-2 bg-accent rounded-full"></span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
              <a href="blog-post.html">
                Node.js Performance: Оптимизация для Production
              </a>
            </h3>

            <p className="text-white/60 mb-4 leading-relaxed">
              Практические советы по оптимизации Node.js приложений:
              профилирование, кэширование, worker threads и мониторинг...
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              <span className="code-font text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                Node.js
              </span>
              <span className="code-font text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                Performance
              </span>
              <span className="code-font text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                Backend
              </span>
            </div>

            <a
              href="blog-post.html"
              className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
            >
              Читать статью
              <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </a>
          </article>
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <a
            href="blog.html"
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
