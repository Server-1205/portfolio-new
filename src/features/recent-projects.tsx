interface Props {
  classNameName?: string;
}

export const RecentProjects = ({}: Props) => {
  return (
    <section className="py-20 bg-dark relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <div className="code-font text-accent mb-4">// мои работы</div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Избранные
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Проекты
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Коллекция моих последних проектов с использованием современных
            технологий
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="scroll-reveal group">
            <div className="relative glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-500 hover:scale-105">
              <div className="relative h-64 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 bg-dark/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-shopping-cart text-6xl text-white/60 mb-4"></i>
                    <div className="code-font text-primary">
                      E-Commerce Platform
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="glass-effect px-2 py-1 rounded text-xs code-font text-primary border border-primary/20">
                    React
                  </span>
                  <span className="glass-effect px-2 py-1 rounded text-xs code-font text-accent border border-accent/20">
                    Node.js
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  Next.js E-Commerce
                </h3>
                <p className="text-white/60 mb-4 leading-relaxed">
                  Полнофункциональная платформа интернет-торговли с
                  админ-панелью, платежными системами и аналитикой
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="code-font text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    Next.js
                  </span>
                  <span className="code-font text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                    TypeScript
                  </span>
                  <span className="code-font text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                    Stripe
                  </span>
                  <span className="code-font text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                    MongoDB
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-white/60 hover:text-primary transition-colors"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white/60 hover:text-accent transition-colors"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                  <a
                    href="portfolio.html"
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    Подробнее <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal group">
            <div className="relative glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-accent/30 transition-all duration-500 hover:scale-105">
              <div className="relative h-64 bg-gradient-to-br from-accent/20 via-secondary/20 to-primary/20 overflow-hidden">
                <div className="absolute inset-0 bg-dark/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-chart-line text-6xl text-white/60 mb-4"></i>
                    <div className="code-font text-accent">
                      Analytics Dashboard
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="glass-effect px-2 py-1 rounded text-xs code-font text-primary border border-primary/20">
                    React
                  </span>
                  <span className="glass-effect px-2 py-1 rounded text-xs code-font text-secondary border border-secondary/20">
                    D3.js
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">
                  Real-time Dashboard
                </h3>
                <p className="text-white/60 mb-4 leading-relaxed">
                  Интерактивная панель аналитики с визуализацией данных в
                  реальном времени и продвинутой фильтрацией
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="code-font text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    React
                  </span>
                  <span className="code-font text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                    WebSocket
                  </span>
                  <span className="code-font text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                    D3.js
                  </span>
                  <span className="code-font text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
                    Redis
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-white/60 hover:text-primary transition-colors"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white/60 hover:text-accent transition-colors"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                  <a
                    href="portfolio.html"
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    Подробнее <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal group">
            <div className="relative glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-secondary/30 transition-all duration-500 hover:scale-105">
              <div className="relative h-64 bg-gradient-to-br from-secondary/20 via-primary/20 to-accent/20 overflow-hidden">
                <div className="absolute inset-0 bg-dark/40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-mobile-alt text-6xl text-white/60 mb-4"></i>
                    <div className="code-font text-secondary">Mobile App</div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="glass-effect px-2 py-1 rounded text-xs code-font text-primary border border-primary/20">
                    React Native
                  </span>
                  <span className="glass-effect px-2 py-1 rounded text-xs code-font text-accent border border-accent/20">
                    Expo
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">
                  Cross-platform App
                </h3>
                <p className="text-white/60 mb-4 leading-relaxed">
                  Кроссплатформенное мобильное приложение для управления
                  задачами с синхронизацией и push-уведомлениями
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="code-font text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                    React Native
                  </span>
                  <span className="code-font text-xs bg-accent/20 text-accent px-2 py-1 rounded">
                    Expo
                  </span>
                  <span className="code-font text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">
                    Firebase
                  </span>
                  <span className="code-font text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">
                    Redux
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-white/60 hover:text-primary transition-colors"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                    <a
                      href="#"
                      className="text-white/60 hover:text-accent transition-colors"
                    >
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                  <a
                    href="portfolio.html"
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    Подробнее <i className="fas fa-arrow-right ml-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 scroll-reveal">
          <a
            href="portfolio.html"
            className="group inline-flex items-center bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/25"
          >
            <span className="mr-2">Все проекты</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </div>
    </section>
  );
};
