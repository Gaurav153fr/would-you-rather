"use client";
import Card from "@/components/Card";
import Loader from "@/components/Loader";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

interface Option {
  img: string;
  text: string;
  _id: string;
  points: string[];
}

interface PostType {
  options: Option[];
}

// Utility function to get excluded IDs from local storage
const getExcludedIds = (): string[] => {
  const excludedIds = localStorage.getItem("excludedIds");
  return excludedIds ? JSON.parse(excludedIds) : [];
};

// Utility function to add a new ID to the excluded IDs array in local storage
const addExcludedId = (id: string) => {
  const excludedIds = getExcludedIds();
  if (!excludedIds.includes(id)) {
    excludedIds.push(id);
    localStorage.setItem("excludedIds", JSON.stringify(excludedIds));
  }
};

const CardContainer = ({ post, id }: { post: PostType; id: string }) => {
  const { data: session } = useSession();
  const [isClicked, setClicked] = useState(false);

  useEffect(() => {
    addExcludedId(id);
    let timer = 30;
    const interval = setInterval(() => {
      if (--timer < 0) {
        clearInterval(interval);
        setClicked(true);
      }
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [id]);

  async function givePoint(id_point: string) {
    const email = session?.user?.email;

    if (email) {
      const hasGivenPoint = post.options.some((option) =>
        option.points.includes(email)
      );

      if (!hasGivenPoint) {
        const response = await fetch(`/api/point`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
            point_id: id_point,
            email: email, // email is now guaranteed to be a string
          }),
        });

        const result = await response.json();
      }
    } else {
      console.error("No email found in session");
    }
  }

  const totalPoints =
    (post.options[0]?.points?.length || 0) +
    (post.options[1]?.points?.length || 0);

  return (
    <div className="w-full flex justify-center max-md:flex-col ">
      <Card
        left={true}
        setPoint={givePoint}
        id={post.options[0]._id}
        isClicked={isClicked}
        setClicked={setClicked}
        img={post.options[0].img}
        text={post.options[0].text}
      />
      <Loader duration="30" />
      <Card
        left={false}
        setPoint={givePoint}
        id={post.options[1]._id}
        isClicked={isClicked}
        setClicked={setClicked}
        img={post.options[1].img}
        text={post.options[1].text}
      />
      <div
        className={`w-full h-20 fixed bottom-0 flex pb-2  ${
          isClicked ? "" : "blur-3xl"
        } `}
      >
        <div className="w-1/2 mt-5 flex items-center justify-center h-full bg-blue-700/80 backdrop-blur-md ">
          <h3 className="text-6xl font-extrabold stroke-text max-md:text-3xl">
            {Math.round((post.options[0].points.length / totalPoints) * 100)}%{" "}
          </h3>
        </div>
        <div className="w-1/2 mt-5 flex items-center justify-center h-full bg-red-700/80 max-md:p-0 backdrop-blur-md">
          <h3 className="text-6xl font-extrabold stroke-text max-md:text-3xl">
            {Math.round((post.options[1].points.length / totalPoints) * 100)}%{" "}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
