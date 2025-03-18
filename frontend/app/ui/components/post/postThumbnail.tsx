import { Post, Tags } from "@/app/lib/definitions";
import { formatDistance } from "date-fns";
import Link from "next/link";
import { getAllCommentByPostId, getUserById } from "@/app/lib/data";
import {
  ChatBubbleLeftIcon,
  ArrowUpTrayIcon,
} from "@heroicons/react/24/outline";
import ShareButton from "./shareButton";
import CommentButton from "./commentButton";
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
  return (
    <Link href={`posts/${post.id}`}>
      <div className="w-full min-h-24 py-4 h-fit bg-white rounded-lg flex flex-row gap-4 overflow-clip pl-4">
        <div className="flex flex-col gap-1 items-start justify-center">
          <div>
            <p className="text-sm font-bold">
              {`${post.author.display_name} `}{" "}
              <span className="font-normal">{`@${
                post.author.username
              } · ${formatDistance(
                new Date(post.createdAt),
                new Date()
              )}`}</span>
            </p>
          </div>
          <p className="text-lg">{post.content}</p>

          {/* <TagsList tags={post.tags} /> */}
          <div className="flex flex-row items-center gap-8 pt-1">
            <CommentButton post={post} />
            <ShareButton postid={post.id} />
          </div>
        </div>
      </div>
    </Link>
  );
}
