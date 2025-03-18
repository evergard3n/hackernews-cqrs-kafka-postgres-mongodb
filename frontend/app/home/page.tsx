import { Metadata } from "next"
import NewPost from "../ui/components/home/newpost";
import { lusitana } from "../ui/fonts";
import PostsList from "../ui/components/post/postsList";
import HotPosts from "../ui/components/post/homeHotPosts";
import { placeholderComments } from "../lib/placeholders";


export const metadata: Metadata = {
    title: "4san",
  };
export default function HomePage() {
    return  (
        <div className={`{lusitana.className} antialisased `}>
            
            <NewPost/>
            
            <div className="flex md:flex-row w-full gap-8 justify-between md:px-14">
                <div className="md:w-2/3 w-full">
                <PostsList/>
                </div>
                <div className="w-1/3 hidden md:block">
                <HotPosts/>
                </div>
            </div>
        </div>
    )
}