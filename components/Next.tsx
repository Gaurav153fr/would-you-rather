"use client";
import { getRandom } from "@/lib/CreatePost";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const getExcludedIds = (): string[] => {
  const excludedIds = localStorage.getItem("excludedIds");
  return excludedIds ? JSON.parse(excludedIds) : [];
};

const Next = ({ isHome }: { isHome: boolean }) => {
  const [excludedIds, setExcludedIds] = useState<string[]>([]);
  const [nextId, setNextId] = useState<string>("");

  useEffect(() => {
    const ids = getExcludedIds();
    setExcludedIds(ids);

    const fetchRandomId = async () => {
      const data = await getRandom(ids);
      setNextId(data);
    };

    fetchRandomId();
  }, []);

  if (!nextId) {
    return null; // or some loading indicator
  }

  return (
    <>
      {nextId.length > 0 && (
        <Link
          href={`/p/${nextId}`}
          className={
            isHome
              ? "w-32 h-32 bg-white/50 backdrop-blur-md rounded-sm hover:rounded-3xl m-2 text-lg font-extrabold transition-all text-center flex items-center p-2"
              : " p-2  rounded-sm font-bold m-1 shadow-full    fixed bottom-0  z-10 bg-yellow-400 shadow-sm hover:rounded-md"
          }
        >
          {isHome ? <>Start the game</> : <>Next</>}
        </Link>
      )}
    </>
  );
};

export default Next;
