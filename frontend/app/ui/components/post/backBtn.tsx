'use client'
import { useRouter } from "next/navigation"
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function PostBackBtn() {
    const router = useRouter();
    return (
        <button
        onClick={() => router.back()}
        className=" text-black hover:bg-zinc-100 w-8 h-8 rounded-full py-2"
      >
        <ArrowLeftIcon width="15" height="15" className="mx-auto"/>
      </button>
    )
}