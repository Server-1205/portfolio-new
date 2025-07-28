import { PrismaClient, SkillCategory } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Запуск заполнения базы данных...");

  // Очистка данных
  await prisma.contact.deleteMany();
  await prisma.testimonial.deleteMany();
  await prisma.certificate.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.experience.deleteMany();
  await prisma.education.deleteMany();
  await prisma.skill.deleteMany();
  await prisma.project.deleteMany();
  await prisma.siteSettings.deleteMany();

  // Создание настроек сайта
  await prisma.siteSettings.create({
    data: {
      id: "settings",
      siteName: "Мое Портфолио",
      siteDesc:
        "Full-stack разработчик с опытом создания современных веб-приложений",
      email: "your.email@example.com",
      phone: "+7 (900) 123-45-67",
      location: "Москва, Россия",
      linkedin: "https://linkedin.com/in/yourprofile",
      github: "https://github.com/yourusername",
      heroTitle: "Привет! Я Full-stack разработчик",
      heroSubtitle:
        "Создаю современные веб-приложения с использованием React, Next.js и Node.js",
      about:
        "Опытный разработчик с 3+ годами опыта в создании веб-приложений. Специализируюсь на React, Next.js, Node.js и современных технологиях.",
    },
  });

  // Создание навыков
  const skills = [
    // Frontend
    {
      name: "React",
      category: SkillCategory.FRONTEND,
      level: 5,
      icon: "react",
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      category: SkillCategory.FRONTEND,
      level: 4,
      icon: "nextjs",
      color: "#000000",
    },
    {
      name: "TypeScript",
      category: SkillCategory.FRONTEND,
      level: 4,
      icon: "typescript",
      color: "#3178C6",
    },
    {
      name: "JavaScript",
      category: SkillCategory.FRONTEND,
      level: 5,
      icon: "javascript",
      color: "#F7DF1E",
    },
    {
      name: "HTML5",
      category: SkillCategory.FRONTEND,
      level: 5,
      icon: "html5",
      color: "#E34F26",
    },
    {
      name: "CSS3",
      category: SkillCategory.FRONTEND,
      level: 5,
      icon: "css3",
      color: "#1572B6",
    },
    {
      name: "Tailwind CSS",
      category: SkillCategory.FRONTEND,
      level: 4,
      icon: "tailwindcss",
      color: "#06B6D4",
    },

    // Backend
    {
      name: "Node.js",
      category: SkillCategory.BACKEND,
      level: 4,
      icon: "nodejs",
      color: "#339933",
    },
    {
      name: "Express.js",
      category: SkillCategory.BACKEND,
      level: 4,
      icon: "express",
      color: "#000000",
    },
    {
      name: "Prisma",
      category: SkillCategory.BACKEND,
      level: 3,
      icon: "prisma",
      color: "#2D3748",
    },
    {
      name: "GraphQL",
      category: SkillCategory.BACKEND,
      level: 3,
      icon: "graphql",
      color: "#E10098",
    },

    // Database
    {
      name: "PostgreSQL",
      category: SkillCategory.DATABASE,
      level: 4,
      icon: "postgresql",
      color: "#336791",
    },
    {
      name: "MongoDB",
      category: SkillCategory.DATABASE,
      level: 3,
      icon: "mongodb",
      color: "#47A248",
    },
    {
      name: "Redis",
      category: SkillCategory.DATABASE,
      level: 3,
      icon: "redis",
      color: "#DC382D",
    },

    // Tools
    {
      name: "Git",
      category: SkillCategory.TOOLS,
      level: 4,
      icon: "git",
      color: "#F05032",
    },
    {
      name: "Docker",
      category: SkillCategory.TOOLS,
      level: 3,
      icon: "docker",
      color: "#2496ED",
    },
    {
      name: "VS Code",
      category: SkillCategory.TOOLS,
      level: 5,
      icon: "vscode",
      color: "#007ACC",
    },
    {
      name: "Figma",
      category: SkillCategory.DESIGN,
      level: 3,
      icon: "figma",
      color: "#F24E1E",
    },
  ];

  await prisma.skill.createMany({
    data: skills.map((skill, index) => ({ ...skill, order: index })),
  });

  // Создание проектов
  const projects = [
    {
      title: "E-commerce Платформа",
      description:
        "Современная платформа электронной коммерции с корзиной покупок, системой платежей, административной панелью и аналитикой продаж.",
      shortDesc: "Полнофункциональный интернет-магазин",
      technologies: [
        "Next.js",
        "TypeScript",
        "Prisma",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
      ],
      category: "fullstack",
      featured: true,
      url: "https://ecommerce-demo.example.com",
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
    },
    {
      title: "Task Management App",
      description:
        "Приложение для управления задачами с возможностью создания команд, назначения задач, отслеживания прогресса и уведомлений в реальном времени.",
      shortDesc: "Система управления проектами и задачами",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
      category: "fullstack",
      featured: true,
      url: "https://taskmanager-demo.example.com",
      githubUrl: "https://github.com/yourusername/task-manager",
    },
    {
      title: "Weather Dashboard",
      description:
        "Интерактивная панель погоды с прогнозами, картами, уведомлениями о погодных условиях и персонализированными настройками.",
      shortDesc: "Современная панель прогноза погоды",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
      category: "frontend",
      featured: false,
      url: "https://weather-dashboard.example.com",
      githubUrl: "https://github.com/yourusername/weather-dashboard",
    },
  ];

  await prisma.project.createMany({ data: projects });

  // Создание опыта работы
  const experience = [
    {
      company: "Tech Solutions Ltd",
      position: "Senior Frontend Developer",
      description:
        "Разработка и поддержка крупных веб-приложений. Работа с командой из 8 разработчиков. Внедрение современных практик разработки.",
      startDate: new Date("2022-03-01"),
      current: true,
      location: "Москва",
      technologies: ["React", "Next.js", "TypeScript", "GraphQL"],
      achievements: [
        "Увеличил производительность приложения на 40%",
        "Внедрил систему автоматического тестирования",
        "Обучил 3 junior разработчиков",
      ],
      order: 0,
    },
    {
      company: "StartupXYZ",
      position: "Full-stack Developer",
      description:
        "Разработка MVP продукта с нуля. Создание архитектуры приложения, API и пользовательского интерфейса.",
      startDate: new Date("2020-06-01"),
      endDate: new Date("2022-02-28"),
      current: false,
      location: "Удаленно",
      technologies: ["Node.js", "React", "MongoDB", "AWS"],
      achievements: [
        "Создал MVP за 3 месяца",
        "Привлек 1000+ пользователей",
        "Настроил CI/CD процессы",
      ],
      order: 1,
    },
  ];

  await prisma.experience.createMany({ data: experience });

  // Создание образования
  const education = [
    {
      institution: "Московский Государственный Университет",
      degree: "Бакалавр",
      field: "Компьютерные науки",
      description:
        "Изучение алгоритмов, структур данных, программирования и математики.",
      startDate: new Date("2018-09-01"),
      endDate: new Date("2022-06-30"),
      achievements: ["Красный диплом", "Участник олимпиад по программированию"],
      order: 0,
    },
  ];

  await prisma.education.createMany({ data: education });

  // Создание сертификатов
  const certificates = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      description: "Сертификация по разработке облачных приложений на AWS",
      issuedDate: new Date("2023-05-15"),
      expiryDate: new Date("2026-05-15"),
      skills: ["AWS", "Cloud Computing", "Lambda"],
      featured: true,
      order: 0,
    },
    {
      name: "React Developer Certificate",
      issuer: "Meta",
      description: "Профессиональная сертификация по разработке на React",
      issuedDate: new Date("2022-12-10"),
      skills: ["React", "JavaScript", "Frontend"],
      featured: true,
      order: 1,
    },
  ];

  await prisma.certificate.createMany({ data: certificates });

  // Создание отзывов
  const testimonials = [
    {
      name: "Анна Петрова",
      position: "Product Manager",
      company: "Tech Solutions Ltd",
      content:
        "Отличный разработчик! Всегда выполняет задачи в срок и предлагает улучшения. Приятно работать в команде.",
      rating: 5,
      featured: true,
      approved: true,
      order: 0,
    },
    {
      name: "Михаил Сидоров",
      position: "CTO",
      company: "StartupXYZ",
      content:
        "Профессионал своего дела. Помог создать продукт с нуля и масштабировать его под растущую нагрузку.",
      rating: 5,
      featured: true,
      approved: true,
      order: 1,
    },
  ];

  await prisma.testimonial.createMany({ data: testimonials });

  // Создание записей блога
  const blogPosts = [
    {
      title: "Современные подходы к разработке на React",
      slug: "modern-react-development",
      excerpt:
        "Рассматриваем новые возможности React 18 и лучшие практики разработки.",
      content: "Полный контент статьи о современной разработке на React...",
      tags: ["React", "JavaScript", "Frontend"],
      published: true,
      featured: true,
      readTime: 5,
      publishedAt: new Date(),
    },
    {
      title: "Введение в Next.js 13",
      slug: "nextjs-13-introduction",
      excerpt: "Обзор новых возможностей Next.js 13 и App Router.",
      content: "Подробное руководство по Next.js 13...",
      tags: ["Next.js", "React", "SSR"],
      published: true,
      featured: false,
      readTime: 7,
      publishedAt: new Date(),
    },
  ];

  await prisma.blogPost.createMany({ data: blogPosts });

  console.log("✅ База данных успешно заполнена!");
  console.log("📊 Создано:");
  console.log(`  - ${skills.length} навыков`);
  console.log(`  - ${projects.length} проектов`);
  console.log(`  - ${experience.length} записей опыта`);
  console.log(`  - ${education.length} записей образования`);
  console.log(`  - ${certificates.length} сертификатов`);
  console.log(`  - ${testimonials.length} отзывов`);
  console.log(`  - ${blogPosts.length} статей блога`);
}

main()
  .catch((e) => {
    console.error("❌ Ошибка при заполнении базы данных:");
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
