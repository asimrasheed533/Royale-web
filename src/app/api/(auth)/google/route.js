import { PrismaClient } from "@prisma/client";
import prisma from "@/lib/prisma";

export default async function POST(req, res) {
  function decodeJWT(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );

    return JSON.parse(jsonPayload);
  }

  try {
    const { credential } = req.body;
    const decodedToken = decodeJWT(credential);

    console.log("Decoded token:", decodedToken);

    const { email, name } = decodedToken;

    let user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name,
        },
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({ message: "Authentication failed" });
  }
}
