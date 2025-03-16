"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query", term);
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);
  return (
    <div className="bg-white p-4 rounded-lg w-full md:w-1/2 flex flex-row items-center gap-4">
      <div className="bg-zinc-100 h-10 rounded-full focus:border-0 w-full px-4 flex flex-row gap-2 items-center focus:outline-amber-100">
        <MagnifyingGlassIcon width={15} height={15} />
        <input
          type="text"
          className="w-full focus:outline-none"
          placeholder="Search"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </div>
  );
}
