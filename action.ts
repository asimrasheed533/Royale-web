"use server";

import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import bcryptjs from "bcryptjs";
import { redirect } from "next/navigation";
import { jwtDecode } from "jwt-decode";

export async function loginWithGoogle(
  prevState: { status: string | null; error: string },
  credentials: string | undefined
) {
  if (!credentials) {
    return {
      ...prevState,
      status: "error",
      error: "Google login failed",
    };
  }

  const { sub } = jwtDecode(credentials) as {
    sub: string;
  };

  const user = await prisma.user.findFirst({
    where: {
      googleSub: sub,
    },
  });

  if (!user) {
    return {
      ...prevState,
      status: "error",
      error: "User not found",
    };
  }

  (await cookies()).set("token", user.id, { path: "/" });
  return { ...prevState, status: "ok", error: "" };
}

export async function registerWithGoogle(
  prevState: { status: string | null; error: string },
  credentials: string | undefined
) {
  if (!credentials) {
    return {
      ...prevState,
      status: "error",
      error: "Google login failed",
    };
  }

  const { name, sub, email } = jwtDecode(credentials) as {
    sub: string;
    name: string;
    email: string;
  };

  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (user) {
    return {
      ...prevState,
      status: "error",
      error: "Email is already in use",
    };
  }

  await prisma.user.create({
    data: {
      name,
      email,
      password: sub,
      googleSub: sub,
    },
  });

  return { ...prevState, status: "ok", error: "" };
}

export async function connectGoogle(
  prevState: { status: string | null; error: string },
  credentials: string | undefined
) {
  if (!credentials) {
    return { ...prevState, status: "error", error: "Credentials are required" };
  }

  const { sub } = jwtDecode(credentials) as {
    sub: string;
  };

  const userId = (await cookies()).get("token")?.value;

  if (!userId) {
    return {
      ...prevState,
      status: "error",
      error: "You need to be logged in to connect Google",
    };
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return {
      ...prevState,
      status: "error",
      error: "User not found",
    };
  }

  await prisma.user.update({
    where: { id: userId },
    data: {
      googleSub: sub,
    },
  });
  return { ...prevState, status: "ok", error: "" };
}

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

  const hashedPassword = await bcryptjs.hash(password, 10);

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
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

export async function signIn(
  prevState: {
    emailError: string | null;
    passwordError: string | null;
    status: string | null;
  },
  formData: FormData
) {
  const email = formData.get("email") as string;
  if (!email) {
    return { ...prevState, emailError: "Email is required", status: "error" };
  }
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });
  if (!user) {
    return { ...prevState, emailError: "User not found", status: "error" };
  }
  const password = formData.get("password") as string;

  const isPasswordValid = await bcryptjs.compare(password, user.password);
  if (!isPasswordValid) {
    return {
      ...prevState,
      passwordError: "Password is incorrect",
      status: "error",
    };
  }

  (await cookies()).set("token", user.id, { path: "/" });
  return {
    ...prevState,
    status: "ok",
    error: "",
  };
}

export async function logout() {
  (await cookies()).set("token", "", { path: "/", expires: new Date(0) });
  return redirect("/");
}
