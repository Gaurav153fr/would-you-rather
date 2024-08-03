"use client";
import { getRandom } from "@/lib/CreatePost";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const getExcludedIds = (id: string): string[] => {
  const excludedIds = localStorage.getItem("excludedIds");
  if (excludedIds) {
    var e: string[] = JSON.parse(excludedIds);
    if (id.length > 0 && e.indexOf(id) < 0) {
      e.push(id);
      return e;
    } else return e;
  } else {
    return [];
  }
};

const Next = ({ isHome, id }: { isHome: boolean; id: string }) => {
  const [excludedIds, setExcludedIds] = useState<string[]>([]);
  const [nextId, setNextId] = useState<string>("");

  useEffect(() => {
    const ids = getExcludedIds(id);
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
