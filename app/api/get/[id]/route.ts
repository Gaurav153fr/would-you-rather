import { findPostById } from "@/lib/CreatePost";
import { NextRequest, NextResponse } from "next/server";

interface postType {
  _id: string;
  options: [
    { img: string; text: string; _id: string },
    { img: string; text: string; _id: string }
  ];
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const post: postType = await findPostById(params.id);

  return NextResponse.json({ options: post.options });
}
