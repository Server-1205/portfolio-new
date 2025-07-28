import { NextRequest, NextResponse } from "next/server";
import { dbClient } from "@/shared/lib/prisma";

// GET /api/projects - получить все проекты
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");
    const limit = searchParams.get("limit");

    const filters: any = {};

    if (category) filters.category = category;
    if (featured) filters.featured = featured === "true";

    const projects = await dbClient.project.findMany({
      where: filters,
      orderBy: [{ featured: "desc" }, { createdAt: "desc" }],
      take: limit ? parseInt(limit) : undefined,
    });

    return NextResponse.json({
      data: projects,
      message: "Проекты получены успешно",
    });
  } catch (error) {
    console.error("Ошибка получения проектов:", error);
    return NextResponse.json(
      { error: "Ошибка получения проектов" },
      { status: 500 }
    );
  }
}

// POST /api/projects - создать новый проект
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    const project = await dbClient.project.create({
      data: {
        title: data.title,
        description: data.description,
        shortDesc: data.shortDesc,
        image: data.image,
        images: data.images || [],
        url: data.url,
        githubUrl: data.githubUrl,
        technologies: data.technologies || [],
        category: data.category,
        featured: data.featured || false,
        completed: data.completed ?? true,
      },
    });

    return NextResponse.json(
      {
        data: project,
        message: "Проект создан успешно",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Ошибка создания проекта:", error);
    return NextResponse.json(
      { error: "Ошибка создания проекта" },
      { status: 500 }
    );
  }
}
