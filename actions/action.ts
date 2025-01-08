"use server";

import prisma from "@/lib/prisma";

export async function category(
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

export async function register(
  prevState: {
    nameError: string | null;
    emailError: string | null;
    passwordError: string | null;
    confirmPasswordError: string | null;
    status: string | null;
  },
  formData: FormData
) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (!name) {
    return { ...prevState, nameError: "Name is required", status: "error" };
  }

  if (!email) {
    return { ...prevState, emailError: "Email is required", status: "error" };
  }

  if (!password) {
    return {
      ...prevState,
      passwordError: "Password is required",
      status: "error",
    };
  }
  if (password !== confirmPassword) {
    return {
      ...prevState,
      passwordError: "Passwords do not match",
      status: "error",
    };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  });

  return {
    ...prevState,
    status: "ok",
    nameError: null,
    emailError: null,
    passwordError: null,
  };
}
