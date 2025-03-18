import { Post } from "@/app/lib/definitions";
import { ChatBubbleLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function CommentButton({post} : {post: Post}) {
  return (
    <div>
      
        <button className="relative  flex flex-row gap-1 items-center group hover:text-blue-400 transition-all duration-150 ease-in">
          <div className="absolute z-1 h-8 w-8 group-hover:bg-blue-50 rounded-full flex items-center justify-center transition-all duration-150 ease-in -left-2"></div>
          <ChatBubbleLeftIcon className="h-4 w-4 z-2" />
          <p className="text-sm z-2">{post.comment_count}</p>
        </button>
    </div>
  );
}
