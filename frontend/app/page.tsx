import { GlobeAltIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-dvh flex flex-col md:flex-row items-center justify-center">
      <GlobeAltIcon className="h-32 w-32 md:h-90 md:w-90 rotate-[15deg] antialiased" />
      <div className="flex flex-col items-center md:items-end">
        <h1 className="text-5xl md:text-9xl font-black">4san</h1>
        <h1 className="text-xl md:text-2xl font-black">The ultimate forum.</h1>
        <div className="w-full h-fit rounded-sm border border-zinc-500 flex flex-col mt-4">
          <Link
            href={"/signup"}
            className="border-b border-zinc-500 w-full h-full flex items-center justify-center py-2 hover:bg-zinc-900 hover:text-white transition-colors duration-300 ease-in-out"
          >
            <p>Create account</p>
          </Link>
          <Link
            href={"/login"}
            className="border-b border-zinc-500 w-full h-full flex items-center justify-center py-2 hover:bg-zinc-900 hover:text-white transition-colors duration-300 ease-in-out"
          >
            Sign In
          </Link>
          <Link
            href={"/home"}
            className=" w-full h-full flex items-center justify-center py-2 hover:bg-zinc-900 hover:text-white transition-colors duration-300 ease-in-out"
          >
            Continue as Guest
          </Link>
        </div>
      </div>
    </div>
  );
}
