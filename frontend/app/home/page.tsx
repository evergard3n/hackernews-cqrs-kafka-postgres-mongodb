import { Metadata } from "next"
import NewPost from "../ui/components/home/newpost";
import { lusitana } from "../ui/fonts";
import PostsList from "../ui/components/post/postsList";
import HomeRecentComment from "../ui/components/comment/homeRecentCmt";
import { placeholderComments } from "../lib/placeholders";

export const metadata: Metadata = {
    title: "4san",
  };
export default function HomePage() {
    return  (
        <div className={`{lusitana.className} antialisased `}>
            
            <NewPost/>
            
            <div>
                <PostsList/>
                <HomeRecentComment comments={placeholderComments}/>
            </div>
        </div>
    )
}