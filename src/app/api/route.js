import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    return NextResponse.json({
      message: "Hello from Next.js!",
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
