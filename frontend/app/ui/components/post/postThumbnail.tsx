import { Post, Tags } from "@/app/lib/definitions";
import { formatDistance } from "date-fns";
import Link from "next/link";
import { getAllCommentByPostId, getUserById } from "@/app/lib/data";

function TagsList({ tags }: { tags: Tags }) {
  return (
    <div className="flex flex-row items-center gap-2">
      {tags.map((tag, index) => (
        <div
          key={index}
          className="w-fit py-1 px-2 rounded-full text-xs bg-zinc-100"
        >
          {tag.toLowerCase()}
        </div>
      ))}
    </div>
  );
}

export default async function PostThumbnail({ post }: { post: Post }) {
  const numberOfComments = post.comment_count;
  return (
    <Link href={`posts/${post.id}`}>
      <div className="w-full min-h-24 h-fit bg-white rounded-lg flex flex-row gap-4 overflow-clip">
        <div className="min-h-24 h-fit w-[6px] bg-amber-400"></div>
        <div className="flex flex-col gap-1 items-start justify-center">
          {post.content.length > 50 ? (
            <p className="uppercase text-xl font-bold hover:underline">
              {post.content.slice(0, 50)}...
            </p>
          ) : (
            <p className="uppercase text-xl font-bold hover:underline">
              {post.content}
            </p>
          )}

          <p className="text-sm">
            {`Posted by ${post.author.display_name} ${formatDistance(
              new Date(post.createdAt),
              new Date()
            )} ago - ${numberOfComments} comments`}
          </p>
          {/* <TagsList tags={post.tags} /> */}
        </div>
      </div>
    </Link>
  );
}
