import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client/edge";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { shopName, name, email, phone, size, message } = body;

    const entry = await prisma.waitlistEntry.create({
      data: {
        shopName,
        name,
        email,
        phone,
        size,
        message,
      },
    });

    return NextResponse.json(entry, { status: 201 });
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "code" in error &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { error: "Este email ya está registrado" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Error al procesar la solicitud" },
      { status: 500 }
    );
  }
}
