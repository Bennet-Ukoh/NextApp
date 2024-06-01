import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";

export default async function PostsList() {
  //await new Promise((resolve) => setTimeout(resolve, 1000));
  const posts = await prisma.post.findMany();
  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2">
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
