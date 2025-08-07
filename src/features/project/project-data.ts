export interface Project {
  id: string;
  title: string;
  description: string;
  icon: string;
  iconLabel: string;
  gradient: string;
  hoverColor: string;
  technologies: Array<{
    name: string;
    color: string;
  }>;
  topTechs: Array<{
    name: string;
    color: string;
  }>;
  githubUrl?: string;
  liveUrl?: string;
  detailsUrl: string;
}

export const projectsData: Project[] = [
  {
    id: "ecommerce",
    title: "Next.js E-Commerce",
    description:
      "Полнофункциональная платформа интернет-торговли с админ-панелью, платежными системами и аналитикой",
    icon: "fas fa-shopping-cart",
    iconLabel: "E-Commerce Platform",
    gradient: "from-primary/20 via-accent/20 to-secondary/20",
    hoverColor: "primary",
    topTechs: [
      { name: "React", color: "primary" },
      { name: "Node.js", color: "accent" },
    ],
    technologies: [
      { name: "Next.js", color: "primary" },
      { name: "TypeScript", color: "accent" },
      { name: "Stripe", color: "secondary" },
      { name: "MongoDB", color: "green-400" },
    ],
    githubUrl: "#",
    liveUrl: "#",
    detailsUrl: "/portfolio/ecommerce",
  },
  {
    id: "dashboard",
    title: "Real-time Dashboard",
    description:
      "Интерактивная панель аналитики с визуализацией данных в реальном времени и продвинутой фильтрацией",
    icon: "fas fa-chart-line",
    iconLabel: "Analytics Dashboard",
    gradient: "from-accent/20 via-secondary/20 to-primary/20",
    hoverColor: "accent",
    topTechs: [
      { name: "React", color: "primary" },
      { name: "D3.js", color: "secondary" },
    ],
    technologies: [
      { name: "React", color: "primary" },
      { name: "WebSocket", color: "accent" },
      { name: "D3.js", color: "secondary" },
      { name: "Redis", color: "blue-400" },
    ],
    githubUrl: "#",
    liveUrl: "#",
    detailsUrl: "/portfolio/dashboard",
  },
  {
    id: "mobile-app",
    title: "Cross-platform App",
    description:
      "Кроссплатформенное мобильное приложение для управления задачами с синхронизацией и push-уведомлениями",
    icon: "fas fa-mobile-alt",
    iconLabel: "Mobile App",
    gradient: "from-secondary/20 via-primary/20 to-accent/20",
    hoverColor: "secondary",
    topTechs: [
      { name: "React Native", color: "primary" },
      { name: "Expo", color: "accent" },
    ],
    technologies: [
      { name: "React Native", color: "primary" },
      { name: "Expo", color: "accent" },
      { name: "Firebase", color: "secondary" },
      { name: "Redux", color: "purple-400" },
    ],
    githubUrl: "#",
    liveUrl: "#",
    detailsUrl: "/portfolio/mobile-app",
  },
];
