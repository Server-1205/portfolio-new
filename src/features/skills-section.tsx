interface Props {
  classNameName?: string;
}

export const SkillsSection = ({}: Props) => {
  return (
    <section className="py-20 bg-dark-light relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid-bg h-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 scroll-reveal">
          <div className="code-font text-accent mb-4">
            {"// мой стек технологий"}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Технологии &
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Инструменты
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Современный стек технологий для создания высокопроизводительных
            веб-приложений
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="scroll-reveal glass-effect p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-500 group hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
              <i className="fab fa-react text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Frontend
            </h3>
            <p className="text-white/60 mb-6 text-center">
              Создание интерактивных пользовательских интерфейсов
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">React</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Next.js</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">TypeScript</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal glass-effect p-8 rounded-2xl border border-white/10 hover:border-accent/30 transition-all duration-500 group hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-accent to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
              <i className="fab fa-node-js text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Backend
            </h3>
            <p className="text-white/60 mb-6 text-center">
              Создание надежных серверных решений
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Node.js</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Express.js</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">MongoDB</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="scroll-reveal glass-effect p-8 rounded-2xl border border-white/10 hover:border-secondary/30 transition-all duration-500 group hover:scale-105">
            <div className="w-16 h-16 bg-gradient-to-br from-secondary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow">
              <i className="fas fa-tools text-white text-3xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Инструменты
            </h3>
            <p className="text-white/60 mb-6 text-center">
              Современные инструменты разработки
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Git & GitHub</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">Docker</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/80">AWS</span>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
