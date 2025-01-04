"use server";

import prisma from "@/lib/prisma";

export async function createCategory(
  prevState: {
    nameError: string | null;
    status: string | null;
  },
  formData: FormData
) {
  const name = formData.get("name") as string;

  if (!name) {
    return { ...prevState, nameError: "Name is required", status: "error" };
  }

  await prisma.category.create({
    data: {
      name,
    },
  });

  return { ...prevState, status: "ok", nameError: null };
}
