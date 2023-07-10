import bcrypt from "bcrypt";
import { NextResponse, type NextRequest } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: NextRequest) {
  console.log("this called");

  const body = await request.json();
  const { email, name, password } = body;
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma?.user.create({
    data: {
      email,
      name,
      hashedPassword,
    },
  });

  return NextResponse.json(user);
}
