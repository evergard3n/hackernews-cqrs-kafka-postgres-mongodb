
import { Post } from "@/app/lib/definitions";
import HotPostsThumb from "./hotPostThumb";
import {getAllPost, getPostByPage} from "@/app/lib/data";

export default async function HomeHotPosts() {
  const data: Post[] = await getAllPost({ token: "" });
  const sortedPost = data.sort((a,b) => b.comment_count - a.comment_count);
  return (
    <div className="bg-white rounded-lg  py-2 mt-8">
      <h2 className="text-lg font-bold border-b border-zinc-200 py-2 px-4">
        Trending Posts
      </h2>
      <ol className="pt-2">
        {data &&
          data.map((post, index) => (
            <li key={index} className="">
              <HotPostsThumb post={post}/>
            </li>
          ))}
      </ol>
    </div>
  );
}
