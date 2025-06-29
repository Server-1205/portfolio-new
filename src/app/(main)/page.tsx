export default function Home() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
            Ваше имя
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Frontend-разработчик, специализирующийся на создании современных
            веб-приложений с использованием React и Next.js
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/projects"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Мои проекты
            </a>
            <a
              href="/contact"
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Связаться со мной <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
