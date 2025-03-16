"use client";
import { GreenButton, ForgotPasswordButton } from "./buttons";
import AcmeLogo from "../logo";
import { useState } from "react";
import { useUser } from "@/app/lib/currentUserContext";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const { setUser } = useUser();
  const router = useRouter();
  const [error, setError] = useState("");

  const handleClick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.currentTarget);
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    try {
      const response = await fetch("http://localhost:3001/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid username or password");
      }

      const data = await response.json();
      localStorage.setItem("token", data.access_token);
      document.cookie = `token=${data.access_token}; path=/`;
      // Fetch user information
      const userResponse = await fetch("http://localhost:3001/api/auth/whoami", {
        headers: { Authorization: `Bearer ${data.access_token}` },
      });

      if (!userResponse.ok) throw new Error("Failed to fetch user data");
      const user = await userResponse.json();

      setUser(user);
      // add the logic that if the last page is signup, redirect to home 
      if (document.referrer.includes("/signup")) {
        router.push("/home");
      } else {
        router.back();
      }
      router.back();
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="font-extrabold bg-white w-full rounded-lg flex flex-col py-8 gap-3 items-center">
      <div>
        <AcmeLogo />
      </div>
      <form onSubmit={handleClick} className="flex flex-col gap-3">
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          className="border border-zinc-200 rounded-lg px-4 py-2"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="border border-zinc-200 rounded-lg px-4 py-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300 ease-in-out"
        >
          Log In
        </button>
        <ForgotPasswordButton />
      </form>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mt-4 pt-8 border-t border-zinc-200 w-full h-full flex items-center justify-center">
        <GreenButton value="Create an account" href="/signup" />
      </div>
    </div>
  );
}