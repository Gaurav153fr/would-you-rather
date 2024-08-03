"use client";
import React, { Dispatch, SetStateAction, useRef } from "react";

interface CardProps {
  setPoint: (id: string) => void;
  id: string;
  isClicked: boolean;
  setClicked: Dispatch<SetStateAction<boolean>>;
  img: string;
  text: string;
}

const Card: React.FC<CardProps> = ({
  setPoint,
  id,
  isClicked,
  setClicked,
  img,
  text,
}) => {
  const div = useRef<HTMLDivElement>(null);

  const handleClick = async () => {
    if (isClicked == false) {
      setClicked(true);
      console.log("bhai bhai");
      if (div.current) {
        div.current.style.scale = "1.1";
        div.current.style.transform = "translateY(-5%)";
      }

      setPoint(id);
    }
  };

  return (
    <>
      <div
        className="select-none up z-5 cursor-pointer max-md:w-full"
        onClick={handleClick}
        ref={div}
      >
        <div className=" shadow-none md:h-80 max-md:m-auto max-md:h-64 m bg-white/80 backdrop-blur-sm aspect-square p-2 border-red-800 border-8 floating-l curvy ">
          <img
            src={img}
            className="object-cover w-full curvy h-4/5 aspect-square "
          />
          <div className="w-full h-full text-center">
            <h2 className="text-black font-extrabold text-2xl m-auto text-pretty max-md:text-xl">
              {text}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
