"use client";
import Next from "@/components/Next";
import { signIn, useSession } from "next-auth/react";
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
    <main className="flex min-h-screen  flex-col items-center scrolling-image overflow-hidden ">
      <h2 className="text-5xl my-3 font-extrabold font-mono drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] stroke-text stroke-2">
        Would you rather?
      </h2>
      {session ? (
        <Next />
      ) : (
        <div>
          <button
            onClick={() => signIn("google")}
            className="w-20 h-20 bg-white rounded-md m-2 text-lg font-extrabold"
          >
            Sign in with google
          </button>
          <button
            onClick={() => signIn("github")}
            className="w-20 h-20 bg-white rounded-md m-2 text-lg font-extrabold"
          >
            Sign in with github
          </button>
        </div>
      )}
    </main>
  );
}
