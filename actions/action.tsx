"use server";
import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function CreatePost(formData: FormData) {
  //auth check
  const { isAuthenticated } = getKindeServerSession();
  if (!isAuthenticated()) {
    redirect("/api/auth/login");
  }
  const title = formData.get("title") as string;
  const body = formData.get("body") as string;

  //update database
  await prisma.post.create({
    data: {
      title,
      body,
    },
  });

  //revalidate the list of posts
  revalidatePath("/posts");
}
