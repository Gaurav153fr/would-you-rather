/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Login = () => {
  const { data: session } = useSession();
  return (
    <>
      <div className="flex items-center h-full  p-2">
        {session ? (
          <>
            <div className="w-10 ">
              <img
                src={session.user?.image || "nojs"}
                className="rounded-full"
              />
            </div>
            <h3 className="mx-2 text-white">{session.user?.name}</h3>
            <button
              onClick={() => signOut()}
              className="bg-red-400 p-2 rounded-md"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => signIn("github")}
              className="bg-green-400 p-2 rounded-md"
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default Login;
