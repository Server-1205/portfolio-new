export interface Post {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
  url: string;
  tags: Array<{
    name: string;
    color: string;
  }>;
  hoverColor: string;
  indicators: string[];
}

export const postsData: Post[] = [
  {
    id: "react-18-features",
    title: "React 18: Новые возможности и Concurrent Features",
    excerpt:
      "Глубокое погружение в новые возможности React 18, включая Concurrent Rendering, Suspense и автоматический батчинг...",
    date: "27 Июля 2025",
    readTime: "8 мин",
    url: "/blog/react-18-features",
    hoverColor: "primary",
    indicators: ["primary", "accent", "secondary"],
    tags: [
      { name: "React", color: "primary" },
      { name: "JavaScript", color: "accent" },
      { name: "Frontend", color: "secondary" },
    ],
  },
  {
    id: "nextjs-14-app-router",
    title: "Next.js 14: App Router и Server Components",
    excerpt:
      "Полное руководство по новому App Router в Next.js 14 и эффективному использованию Server Components для производительности...",
    date: "22 Июля 2025",
    readTime: "12 мин",
    url: "/blog/nextjs-14-app-router",
    hoverColor: "accent",
    indicators: ["accent", "secondary", "primary"],
    tags: [
      { name: "Next.js", color: "accent" },
      { name: "React", color: "primary" },
      { name: "SSR", color: "green-400" },
    ],
  },
  {
    id: "nodejs-performance",
    title: "Node.js Performance: Оптимизация для Production",
    excerpt:
      "Практические советы по оптимизации Node.js приложений: профилирование, кэширование, worker threads и мониторинг...",
    date: "18 Июля 2025",
    readTime: "15 мин",
    url: "/blog/nodejs-performance",
    hoverColor: "secondary",
    indicators: ["secondary", "primary", "accent"],
    tags: [
      { name: "Node.js", color: "secondary" },
      { name: "Performance", color: "accent" },
      { name: "Backend", color: "primary" },
    ],
  },
];
