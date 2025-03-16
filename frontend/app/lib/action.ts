"use server";
import { z } from "zod";
import User from "./definitions";
import { v4 as uuidv4 } from "uuid";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
const FormSchema = z.object({
  post_id: z.string(),
  author: z.string(),
  title: z.string(),
  content: z.string(),
  timestamp: z.string(),
  tags: z.string(),
});

const CommentSchema = z.object({
  content: z.string(),
})

const CreatePost = FormSchema.omit({
  post_id: true,
  timestamp: true,
  author: true,
});

export async function createComment({id, token} : {id: string , token: string}, formData: FormData) {
  const {content} = CommentSchema.parse({
    content: formData.get("comment")
  })
  try {
    const response = await fetch(`http://localhost:3001/api/post/${id}/comment`, {
      method: "POST",
      headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
      body: JSON.stringify({content}),
    });

    if (!response.ok) {
      throw new Error(`Token error. current: ${token}`);
    }
    
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error(`Token error. current: ${token}. current id: ${id}`);
  }

  // refetch data from the database
  revalidatePath(`/posts/${id}`);
  //  redirect to the home page
  redirect(`/posts/${id}`);
}

// post request?? - post request handler to be exact
export async function createPost(token: string, formData: FormData) {
  const { title, content, tags } = CreatePost.parse({
    title: formData.get("title"),
    content: formData.get("content"),
    tags: formData.get("tags"),
  });
  const newPost = {
    title,
    content,
    tags: tags.split(","), // assuming tags is an array
  };

  try {
    const response = await fetch("http://localhost:3001/api/post/", {
      method: "POST",
      headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
      body: JSON.stringify(newPost),
    });

    if (!response.ok) {
      throw new Error("Some error happened and I dont know why.");
    }
    
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch post.");
  }

  // refetch data from the database
  revalidatePath("/home");
  //  redirect to the home page
  redirect("/home");
}

