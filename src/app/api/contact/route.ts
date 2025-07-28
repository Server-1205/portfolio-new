// import { NextRequest, NextResponse } from "next/server";

// // POST /api/contact - отправить сообщение
// export async function POST(request: NextRequest) {
//   try {
//     const data = await request.json();

//     // Валидация данных
//     if (!data.name || !data.email || !data.message) {
//       return NextResponse.json(
//         { error: "Обязательные поля: имя, email, сообщение" },
//         { status: 400 }
//       );
//     }

//     const contact = await prisma.contact.create({
//       data: {
//         name: data.name,
//         email: data.email,
//         subject: data.subject,
//         message: data.message,
//         phone: data.phone,
//         company: data.company,
//       },
//     });

//     return NextResponse.json(
//       {
//         data: contact,
//         message: "Сообщение отправлено успешно",
//       },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Ошибка отправки сообщения:", error);
//     return NextResponse.json(
//       { error: "Ошибка отправки сообщения" },
//       { status: 500 }
//     );
//   }
// }

// // GET /api/contact - получить все сообщения (для админки)
// export async function GET(request: NextRequest) {
//   try {
//     const { searchParams } = new URL(request.url);
//     const status = searchParams.get("status");
//     const read = searchParams.get("read");

//     const filters: any = {};

//     if (status) filters.status = status;
//     if (read !== null) filters.read = read === "true";

//     const contacts = await prisma.contact.findMany({
//       where: filters,
//       orderBy: { createdAt: "desc" },
//     });

//     return NextResponse.json({
//       data: contacts,
//       message: "Сообщения получены успешно",
//     });
//   } catch (error) {
//     console.error("Ошибка получения сообщений:", error);
//     return NextResponse.json(
//       { error: "Ошибка получения сообщений" },
//       { status: 500 }
//     );
//   }
// }
