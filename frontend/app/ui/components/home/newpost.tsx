"use client";
import UserIcon from "./userIcon";
import { useState } from "react";
import NewPostBig from "./newPostBig";
import Link from "next/link";
import { toast } from "sonner";
import { useUser } from "@/app/lib/currentUserContext";
import { redirect } from "next/navigation";
export default function NewPost() {
  const [open, setOpen] = useState(false);
  const user = useUser().user;
  const handleClick = () => {
    if (!user) {
      toast.warning("You have to login first!");
      redirect("/login");
    }
    redirect('/posts/create');
    
  };
  return (
    
    <div className="bg-white p-4 rounded-lg w-full md:w-1/2 flex flex-row items-center gap-4">
      {/* <UserIcon /> */}
      
<input
        type="text"
        disabled={open}
        className="bg-zinc-100 h-10 rounded-full focus:border-0 w-full px-4"
        placeholder="What's on your mind?"
        onClick={handleClick}
      />
    </div>
  );
}
