"use client"
import { getRandom } from "@/lib/CreatePost";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const getExcludedIds = (): string[] => {
  const excludedIds = localStorage.getItem("excludedIds");
  return excludedIds ? JSON.parse(excludedIds) : [];
};

const Next = () => {
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
    <Link
      href={`/p/${nextId}`}
      className=" p-2 bg-green-600 rounded-md font-bold m-1 shadow-md stroke-text hover:scale-105"
    >
      Next
    </Link>
  );
};

export default Next;
