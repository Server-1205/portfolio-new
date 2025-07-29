import { Hero } from "@/features/hero";
import { RecentPosts } from "@/features/recent-posts";
import { RecentProjects } from "@/features/recent-projects";
import { SkillsSection } from "@/features/skills-section";

// const getProjects = async () => {
//   try {
//     const projects = await dbClient.project.findMany({
//       orderBy: [{ createdAt: "desc" }],
//       take: 3,
//     });
//     if (!projects) {
//       throw new Error("Ошибка при получении проектов");
//     }
//     return projects;
//   } catch (error) {
//     console.error("Ошибка:", error);
//     return [];
//   }
// };

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <Hero
        title="Привет"
        subtitle="я Сервер"
        codeComment={'console.log("Hello World!");'}
        description={
          <>
            Full-Stack разработчик, создающий современные веб-приложения с
            использованием &nbsp;
            <span className="text-primary font-semibold">React</span>
            ,&nbsp;
            <span className="text-accent font-semibold">Node.js</span>
            &nbsp; и&nbsp;
            <span className="text-secondary font-semibold">Next.js</span>
            &nbsp;
          </>
        }
      />
      <SkillsSection />
      <RecentProjects />
      <RecentPosts />
    </>
  );
}
