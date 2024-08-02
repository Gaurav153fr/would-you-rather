"use server"
import mongoose from "mongoose";
import Post from "./model";

async function createPost(options: [{ text: string; img: string }]) {
  const post = new Post({
    options: [
      { text: "test post1", img: "url1" },
      { text: "test post2", img: "url2" },
    ],
  });

  try {
    const savedPost = await post.save();
    console.log("Post saved successfully:", savedPost);
  } catch (error) {
    console.error("Error saving post:", error);
  }
}

async function findPostById(id: string) {
  const post = await Post.findById(id);
  return post;
}
async function getRandom(excludedIds:string[]) {
  const [randomPost] = await Post.aggregate([
    { 
      $match: { 
        _id: { $nin: excludedIds.map(id => new mongoose.Types.ObjectId(id)) } 
      } 
    },
    { $sample: { size: 1 } }
  ]);

  console.log(randomPost);

  return randomPost ? randomPost._id.toString() : null;
}


export { createPost, findPostById, getRandom };
