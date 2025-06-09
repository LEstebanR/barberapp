// import { PrismaClient } from "@prisma/client";
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

// const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { shopName, name, email, phone, size, message } = body

    console.log('body', body)

    const entry = await prisma.waitlistEntry.create({
      data: {
        shopName,
        name,
        email,
        phone,
        size,
        message,
      },
    })

    console.log(entry)

    return NextResponse.json(entry, { status: 201 })
  } catch (error) {
    console.error(error)
    if (
      error &&
      typeof error === 'object' &&
      'code' in error &&
      error.code === 'P2002'
    ) {
      return NextResponse.json(
        { error: 'Este email ya está registrado' },
        { status: 400 }
      )
    }
    return NextResponse.json(
      { error: 'Error al procesar la solicitud' },
      { status: 500 }
    )
  }
}
