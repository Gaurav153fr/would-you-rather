"use client";
import Next from "@/components/Next";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect } from "react";

const reset = () => {
  const excludedIds = localStorage.getItem("excludedIds");
  if (excludedIds) {
    localStorage.setItem("excludedIds", JSON.stringify([]));
  }
};
export default function Home() {
  const { data: session } = useSession();
  useEffect(() => {
    reset();
  }, []);
  return (
    <main className="flex min-h-screen  flex-col items-center scrolling-image overflow-hidden animated-background ">
      <h2 className=" text-3xl font-bold text-nowrap shadow-lg bg-white my-2 px-1">
        Would you rather?
      </h2>

      {session ? (
        <div>
          <Next isHome id="" />
          <Link
            href="/add"
            className="w-32 h-32 bg-white/50 backdrop-blur-md rounded-sm hover:rounded-3xl m-2 text-lg font-extrabold transition-all text-center flex items-center p-2"
          >
            Add a question
          </Link>
          
          <Link
            href="#"
            target="_blank"
            className="w-32 h-32 bg-white/50 backdrop-blur-md rounded-sm hover:rounded-3xl m-2 text-lg font-extrabold transition-all text-center flex items-center p-2"
          >
            See my github
          </Link>
        </div>
      ) : (
        <div>
          <button
            onClick={() => signIn("google")}
            className="w-32 h-32 bg-blue-600 rounded-sm hover:rounded-3xl m-2 text-lg font-extrabold transition-all text-white"
          >
            Sign in with google
          </button>
          <button
            onClick={() => signIn("github")}
            className="w-32 h-32 bg-red-600 rounded-sm hover:rounded-3xl m-2 text-lg font-extrabold transition-all text-white"
          >
            Sign in with github
          </button>
        </div>
      )}
    </main>
  );
}
