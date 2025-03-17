import { Post } from "@/app/lib/definitions";
import PostThumbnail from "./postThumbnail";
import { compareDesc } from "date-fns";
import { getAllPost, getPostByPage } from "@/app/lib/data";
import { cookies } from "next/headers";

export default async function PostsList() {
  const token = (await cookies()).get("token")?.value || "";
  const fetchedPosts: Post[] = await getAllPost({token:token})
  const sortedPosts = fetchedPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );
  return (
    <div className="flex flex-col gap-4 mt-8">
      {sortedPosts.map((post) => (
        <li key={post.id} className="list-none">
          <PostThumbnail key={post.id} post={post} />
        </li>
      ))}
    </div>
  );
}
