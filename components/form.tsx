import CreatePost from "@/actions/action";
import React from "react";

export default function Form() {
  return (
    <form
      className="gap-2 my-10 max-[400px] mx-auto flex flex-col "
      action={CreatePost}
    >
      <input
        className="border rounded h-10 p-3"
        name="title"
        type="text"
        placeholder="Title for new post"
        required
      />
      <textarea
        name="body"
        placeholder="`Body of content"
        className="border rounded  px-3 py-2"
        required
        rows={6}
      />
      <button className="bg-blue-500 h-10 rounded px-5 py-2 text-white">
        Submit
      </button>
    </form>
  );
}
