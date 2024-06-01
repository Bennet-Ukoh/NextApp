import Form from "@/components/form";
import PostsList from "@/components/posts-list";
import React, { Suspense } from "react";

export default async function Post() {
  return (
    <main className="text-center pt-32 px-5">
      <h1 className="md:text-5xl text-4xl font-bold mb-4">All posts</h1>
      <Suspense fallback="Loading...">
        <PostsList />
      </Suspense>
      <Form />
    </main>
  );
}
