import { NextRequest, NextResponse } from "next/server";
import { dbClient } from "@/shared/lib/prisma";

// GET /api/skills - получить все навыки
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const visible = searchParams.get("visible");

    const filters: any = {};

    if (category) filters.category = category;
    if (visible !== null) filters.visible = visible === "true";

    const skills = await dbClient.skill.findMany({
      where: filters,
      orderBy: [{ order: "asc" }, { level: "desc" }, { name: "asc" }],
    });

    // Группировка по категориям
    const groupedSkills = skills.reduce((acc, skill) => {
      const category = skill.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(skill);
      return acc;
    }, {} as Record<string, typeof skills>);

    return NextResponse.json({
      data: {
        all: skills,
        grouped: groupedSkills,
      },
      message: "Навыки получены успешно",
    });
  } catch (error) {
    console.error("Ошибка получения навыков:", error);
    return NextResponse.json(
      { error: "Ошибка получения навыков" },
      { status: 500 }
    );
  }
}
