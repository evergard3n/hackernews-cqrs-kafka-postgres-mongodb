'use client';

import { createComment } from "@/app/lib/action";
import { useUser } from "@/app/lib/currentUserContext"
import { useEffect, useState } from "react";
export default function CreateComment({id} : {id: string}) {
  const [token, setToken] = useState<string | null>(null);
  const [input, setInput] = useState<string>("");
  const { user } = useUser();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  const createCommentWithParams = (formData: FormData) => {
    if (token) {
      createComment({ id, token }, formData);
    } else {
      alert("Token is not available. Please log in again.");
    }
  };

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (!user) {
            alert("You must be logged in to post a comment.");
            return;
        }
        const formData = new FormData(event.currentTarget);
        createCommentWithParams(formData);
        setInput("");
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
      setInput(e.target.value)
    }
    return (
        <div>
        <form action={createCommentWithParams} onSubmit={(e) => handleSubmit(e)} className="flex flex-row justify-center px-4 py-2">
          <input
            type="text"
            className="w-full grow focus:outline-none"
            required
            placeholder="Leave a comment"
            id="comment"
            name="comment"
            onChange={handleChange}
            value={input}
          />
          <button
            type="submit"
            className="w-fit h-full px-4 py-2 hover:bg-zinc-200 transition-colors duration-150 ease-in-out rounded-md"
          >
            Post
          </button>
        </form>
      </div>
    )
}