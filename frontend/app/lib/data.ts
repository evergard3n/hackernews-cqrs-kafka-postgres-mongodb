// import { comments, listposts, listUsers } from "./placeholders";
import User, { Comment, Post, Tags } from "./definitions";
export async function getPostById({ id, token }: { id: string , token: string }) {
  try {
    // const token = localStorage.getItem("token");
    const response = await fetch(`http://localhost:3000/api/post/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error("Cant fetch post.");
    }
    const res = await response.json();
    const {
      post_id,
      author,
      content,
      tags,
      comment_count,
      created_at,
    }: {
      post_id: number;
      author: User;
      content: string;
      tags: Tags;
      comment_count: number;
      created_at: string;
    } = res;
    const post: Post = res;
    return post;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch post.");
  }
}
export async function getPostByPage({ page, token }: { page: number, token:string}) {
  try {
    const response = await fetch(`http://localhost:3000/api/post?page=${page}/`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error(`Cant fetch posts of page ${page}.`);
    }
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch post.");
  }
}

export async function getAllPost({ token }: { token:string}) {
  try {
    const response = await fetch(`http://localhost:3000/api/post/`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error(`Cant fetch all post.`);
    }
    const res = await response.json();
    return res.data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch post.");
  }
}

export function getUserById({ id }: { id: string }) {
  try {
    // const data = listUsers;
    // const user = listUsers.find((user) => user.id == id);
    // if (!user) {
    //   throw new Error("User not found!");
    // }
    // return user;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch user.");
  }
}

export function getUserNameById({ id, token }: { id: string, token: string }) {}

export async function getAllCommentByPostId({ post_id, token }: { post_id: string, token:string }) {
  try {
    const response = await fetch(`http://localhost:3000/api/post/${post_id}/comment`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    if (!response.ok) {
      throw new Error(`Cant fetch all comment of post ${post_id}.`);
    }
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch post.");
  }
}

export async function getRecentComments() {
  try {
    const response = await fetch('http://localhost:3000/api/post/comment') 
    if(!response.ok) {
      throw new Error(`Cant fetch all comment.`);
    }
    const res = await response.json();
    return res;
  } catch (error) {
    console.error("Database Error: ", error);
    throw new Error("Failed to fetch post")
    
  }
}