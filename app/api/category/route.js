import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, image } = body;
    if (!name || !image) {
      console.error("Missing fields:", { name, image });
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    const category = await prisma.category.create({
      data: {
        name,
        image,
      },
    });

    console.log("Category created successfully:", category);
    return NextResponse.json(
      { message: "Category created successfully", category },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred while creating category:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
