"use client";
import { ArrowUpTrayIcon } from "@heroicons/react/24/outline";
import { toast } from "sonner";
export default function ShareButton({ postid }: { postid: string }) {
  const textToCopy = `http://localhost:3001/posts/${postid}`;
  const handleShare = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(textToCopy);
      toast.success("Link copied to clipboard");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <button onClick={handleShare} className="relative text-sm flex flex-row gap-1 items-center group hover:text-green-400 transition-all duration-150 ease-in">
      <div className="absolute z-1 h-8 w-8 group-hover:bg-green-50 rounded-full flex items-center justify-center transition-all duration-150 ease-in -left-2"></div>
      <ArrowUpTrayIcon className="h-4 w-4 z-2" />
      <p className="z-2">Share</p>
    </button>
  );
}
