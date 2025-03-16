"use client";
import { useUser } from "@/app/lib/currentUserContext";
import Link from "next/link";
import UserIcon from "./userIcon";
export default function LogInStatus() {
  const user = useUser().user;
  return (
    <div className={`w-11/12 h-24 rounded-lg transition-colors duration-150 ease-in-out mt-4 text-black flex items-center justify-center mb-4 ${user && 'hover:bg-zinc-100'}`}>
      {!user && (
        <div className="flex flex-col items-center gap-4">
          <p>Log in or Sign up</p>
          <div className="flex flex-row items-center gap-2">
            <Link href={"/login"}>
              <button className=" w-20 h-8 bg-zinc-800 hover:bg-zinc-600 transition-colors duration-150 ease-in-out text-white rounded-full">
                Log In
              </button>
            </Link>
            <Link href={"/signup"}>
              <button className="w-20  h-8  hover:bg-zinc-100 transition-colors duration-150 ease-in-out text-black rounded-full">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      )}
      {
        user && (
            <div className="flex flex-row gap-4 items-center ">
                <div className="flex flex-col items-start">  
                    <p className="text-sm">Logged in as:</p>
                    <p className="font-bold text-lg">@{user.username}</p>
                </div>
            </div>
        )
      }
    </div>
  );
}
