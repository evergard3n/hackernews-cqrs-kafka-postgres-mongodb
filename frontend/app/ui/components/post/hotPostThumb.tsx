import { getPostById } from "@/app/lib/data";
import { Post } from "@/app/lib/definitions";
import { formatDistance, subDays } from "date-fns";
import Link from "next/link";
export default async function HotPostsThumb({ post }: { post: Post }) {
  const postTitle =
    post.content.length > 50 ? post.content.slice(0, 50) : post.content;
  return (
    <Link href={`posts/${post.id}`}>
      <div className="hover:bg-zinc-50 px-4 transition-colors duration-150 ease-in-out">
        <p className="font-bold">{postTitle}</p>
        <p className="text-sm">
          {post.author.display_name} -{" "}
          {formatDistance(new Date(post.createdAt), new Date(), {
            addSuffix: true,
          })}
        </p>
        <p className="text-sm">{post.comment_count} comments</p>
      </div>
    </Link>
  );
}
