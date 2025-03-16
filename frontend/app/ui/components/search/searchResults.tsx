import { Post } from "@/app/lib/definitions";
import PostThumbnail from "../post/postThumbnail";


export default function SearchResults({ allPost, query }: { allPost: Post[], query:string }) {

  const filteredPosts = allPost?.filter((post: Post) =>
    post.content.slice(0,20).includes(query)
  );
  return (
    <div className="flex flex-col gap-4 mt-8">
      {filteredPosts && query && filteredPosts.map((post) => (
        <li key={post.id} className="list-none">
          <PostThumbnail key={post.id} post={post} />
        </li>
      ))}
    </div>
  );
}
