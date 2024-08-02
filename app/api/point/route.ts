import Post from "@/lib/model";
import { NextRequest, NextResponse } from "next/server";
interface data {
  id: string;
  point_id: string;
  email: string;
}
// Handler function for the POST request
export async function POST(req: NextRequest) {
  try {
    // Extract data from the request body

    const data: data = await req.json(); // Assumes the request body contains JSON
    console.log(data);
    const post = await Post.findOneAndUpdate(
      { _id: data.id, "options._id": data.point_id },
      { $push: { "options.$.points": data.email } },
      { new: true } // Return the updated document
    );
    try {
      //const savedPost = await post.save();
      console.log("Post saved successfully:", post);
    } catch (error) {
      console.error("Error saving post:", error);
    }
    // Process the data (e.g., save to a database)
    // For demonstration purposes, we're just returning the data
    return NextResponse.json({ message: "Data received successfully",post });
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json(
      { message: "Error processing request" },
      { status: 500 }
    );
  }
}
