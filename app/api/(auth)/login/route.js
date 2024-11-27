import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      console.error("Missing fields:", { email, password });
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    console.log("Querying user with email:", email);
    const exist = await prisma.user.findUnique({
      where: { email },
      select: { password: true, id: true },
    });
    console.log("Query result:", exist);

    if (!exist) {
      return NextResponse.json({ message: "User not found" }, { status: 400 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, exist.password);
    console.log("Password match:", isPasswordCorrect);

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: "Incorrect password" },
        { status: 400 }
      );
    }

    cookies().set("token", exist.id, {
      maxAge: 60 * 60 * 24 * 365,
      path: "/",
    });

    return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ message: "Internal Error" }, { status: 500 });
  }
}
