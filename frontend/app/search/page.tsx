import SearchBar from "../ui/components/search/searchBar";
import { Metadata } from "next";
import SearchResults from "../ui/components/search/searchResults";
import { getAllPost } from "../lib/data";
import { Post } from "../lib/definitions";

export const metadata: Metadata = {
    title: "Search",
  };
export default async function SearchPage(props: {
    searchParams?: Promise<{
      query?: string;
    }>;
  }) {
    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const fetchedPost = (await getAllPost({ token: "" })) as Post[];
    return (
        <div className="">
            <SearchBar/>
            <SearchResults allPost={fetchedPost} query = {query}/>
        </div>
    )
}