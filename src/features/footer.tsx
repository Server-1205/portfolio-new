import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div>
              <Link
                href="/"
                className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent code-font"
              >
                &lt;DV/&gt;
              </Link>
              <p className="text-white/60 mt-4 leading-relaxed">
                Full-stack разработчик, специализирующийся на создании
                современных веб-приложений с React, Node.js и Next.js
              </p>
            </div>

            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-xl border border-white/10 text-white/60 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-github" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-xl border border-white/10 text-white/60 hover:text-accent hover:border-accent/30 transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect p-3 rounded-xl border border-white/10 text-white/60 hover:text-secondary hover:border-secondary/30 transition-all duration-300 hover:scale-110"
              >
                <i className="fab fa-telegram" />
              </a>
              <a
                href="mailto:dvolkov.dev@example.com"
                className="glass-effect p-3 rounded-xl border border-white/10 text-white/60 hover:text-primary hover:border-primary/30 transition-all duration-300 hover:scale-110"
              >
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Навигация</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  О себе
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  Проекты
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  Блог
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  Контакт
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-white/60">
                <i className="fas fa-envelope mr-3 text-primary" />
                dvolkov.dev@example.com
              </li>
              <li className="flex items-center text-white/60">
                <i className="fab fa-telegram mr-3 text-accent" />
                @dvolkov_dev
              </li>
              <li className="flex items-center text-white/60">
                <i className="fas fa-map-marker-alt mr-3 text-secondary" />
                Москва, Россия
              </li>
            </ul>

            <div className="mt-6">
              <h5 className="text-white font-medium mb-3">Статус:</h5>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse" />
                <span className="text-white/60 text-sm">
                  Открыт для новых проектов
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/40 text-sm">
              &copy; 2025 Дмитрий Волков. Все права защищены.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-white/40 hover:text-white/60 text-sm transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
