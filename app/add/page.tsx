"use client";
import { useState } from "react";

const Page = () => {
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          options: [
            { img: img1, text: text1, points: ["poin1"] },
            { img: img2, text: text2, points: ["point1"] },
          ],
        }),
      });

      if (response.ok) {
        console.log("Data sent successfully");
      } else {
        console.error("Error sending data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex bg-white/50 backdrop-blur-md flex-col p-5"
      >
        <div>
          <h3 className="bg-yellow-400 text-xl font-bold">Option 1</h3>
          <input
            type="text"
            className="  placeholder:text-red-500 rounded-md m-2"
            placeholder="  Image URL:"
            onChange={(e) => setImg1(e.target.value)}
          />

          <input
            type="text"
            className="  placeholder:text-red-500 rounded-md m-2"
            placeholder="Text:"
            onChange={(e) => setText1(e.target.value)}
          />
        </div>{" "}
        <div>
          <h3 className="bg-yellow-400 text-xl font-bold">Option 2</h3>
          <input
            type="text"
            className="  placeholder:text-red-500 rounded-md m-2"
            placeholder="  Image URL:"
            onChange={(e) => setImg2(e.target.value)}
          />

          <input
            type="text"
            className="  placeholder:text-red-500 rounded-md m-2"
            placeholder="Text:"
            onChange={(e) => setText2(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-white font-mono">
          Send Data
        </button>
      </form>
      {img1 && img2 && (
        <>
          <img src={img1} alt="img1" />
          <img src={img2} alt="img2" />
        </>
      )}
    </main>
  );
};

export default Page;
