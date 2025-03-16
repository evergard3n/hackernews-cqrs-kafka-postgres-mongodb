import { getAllCommentByPostId } from "@/app/lib/data";
import SingleComment from "./singleComment";
import { Comment } from "@/app/lib/definitions";
import { cookies } from "next/headers";

export async function CommentsList({ post_id }: { post_id: string }) {
  const token = (await cookies()).get("token")?.value || "";
  const comments: Comment[] = await getAllCommentByPostId({
    post_id: post_id,
    token: token,
  });
  return (
    <div>
      <ol className="flex flex-col justify-start ">
        {comments && comments.map((comment, index) => (
          <li key={index} className="border-b border-t pb-2 border-zinc-200">
            <SingleComment comment={comment} />
          </li>
        ))}
        {!comments && 
          (<p>No comment yet</p>)
        }
      </ol>
    </div>
  );
}
