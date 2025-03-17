import { Post } from "@/app/lib/definitions";
import { format, formatDistance } from "date-fns";
import PostBackBtn from "./backBtn";
export default function PostContent({ post }: { post: Post }) {
  // const tags: string = post.tags.join(", ");
  return (
    <div className="w-full h-fit border-b border-zinc-200 flex flex-col gap-4 items-start p-4">
      <div className="flex flex-row gap-4 items-center border-b border-zinc-200 w-full pb-4">
        <PostBackBtn />
        <h1 className="font-bold">Post</h1>
      </div>
      <div className="flex flex-row gap-2">
          <h1 className="font-bold">{post.author.display_name}</h1>
          <p className="font-extralight">@{post.author.username}</p>
          {/* <p className="font-extralight">-</p>
          <p className="font-extralight">{formatDistance(new Date(post.created_at), new Date(Date.now()))} ago</p> */}
        </div>
      <p>{post.content}</p>
      {/* <h1 className="font-black text-3xl">{post.title}</h1> */}
      {/* <div className="flex flex-row gap-4 ml-auto text-xs">
        <p>At {format(new Date(post.created_at), "MM/dd/yyyy")}</p>
        <p>Tags: {tags}</p>
      </div> */}
    </div>
  );
}
