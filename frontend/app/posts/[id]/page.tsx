
import { createComment } from "@/app/lib/action";
import { getPostById } from "@/app/lib/data";
import CreateComment from "@/app/ui/components/comment/commentCreate";
import { CommentsList } from "@/app/ui/components/comment/commentsList";
import PostBackBtn from "@/app/ui/components/post/backBtn";
import PostContent from "@/app/ui/components/post/postContent";
import { Metadata } from "next";
import { cookies } from "next/headers";

export async function generateMetadata(props: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  // const token = localStorage.getItem("token") || "";
  // const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InRlc3QiLCJkaXNwbGF5X25hbWUiOiJhZG1pbl90ZXN0In0.o5DpRi3arjmT2iTRWAXwTT7s3bxLrYn09G_8Qm_xLhPAN1I_b2qK_gTs3ZMRvgt1vPbf_LMHdfm-fJWda0TDG9ndUQELQUO1rHtGWpaovIdyhCNOB7IawFrapC7pAoL9nOI9JYOkOK7yWN52fmV39jsAZZLZ0xggEQLL_P06dAE3v3KT8A7gPoI7R7rxnMDtIGAi3lwjUFT9dDgSK4NLe-OEWDZ41V2txN-CRzXNJ0NMc0WbUylr86j4ukITD1veZDe8q-U5EU-FIhXsdymE52Fsg-5_b908FfdIB2LL5XSkGAgeVPbrGzPvOMCXP11RBMp4KbHhhSg--est2C6wZQ"
  const token = (await cookies()).get("token")?.value || "";
  const post = await getPostById({ id: params.id, token: token });
  return {
    title: post.content.slice(0,10),
  };
}

export default async function PostPage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const id = params.id;
  // const token = localStorage.getItem("token") || "";
  
  //const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InRlc3QiLCJkaXNwbGF5X25hbWUiOiJhZG1pbl90ZXN0In0.o5DpRi3arjmT2iTRWAXwTT7s3bxLrYn09G_8Qm_xLhPAN1I_b2qK_gTs3ZMRvgt1vPbf_LMHdfm-fJWda0TDG9ndUQELQUO1rHtGWpaovIdyhCNOB7IawFrapC7pAoL9nOI9JYOkOK7yWN52fmV39jsAZZLZ0xggEQLL_P06dAE3v3KT8A7gPoI7R7rxnMDtIGAi3lwjUFT9dDgSK4NLe-OEWDZ41V2txN-CRzXNJ0NMc0WbUylr86j4ukITD1veZDe8q-U5EU-FIhXsdymE52Fsg-5_b908FfdIB2LL5XSkGAgeVPbrGzPvOMCXP11RBMp4KbHhhSg--est2C6wZQ"
  const token = (await cookies()).get("token")?.value || "";
  const post = await getPostById({ id: id, token: token });
  
  return (
    <div className="min-h-fit max-h-svh w-full flex flex-col justify-start bg-white text-black rounded-lg">
      <PostContent post={post} />
      {/* <div>
        <form action={createCommentWithParams} className="flex flex-row justify-center px-4 py-2">
          <input
            type="text"
            className="w-full grow focus:outline-none"
            required
            placeholder="Leave a comment"
            id="comment"
            name="comment"
          />
          <button
            type="submit"
            className="w-fit h-full px-4 py-2 hover:bg-zinc-200 transition-colors duration-150 ease-in-out rounded-md"
          >
            Post
          </button>
        </form>
      </div> */}
      <CreateComment id={post.id}/>
      <CommentsList post_id={post.id} />
    </div>
  );
}