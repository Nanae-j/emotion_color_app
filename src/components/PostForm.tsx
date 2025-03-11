"use client";

import { addPostAction } from "@/actions/addPostAction";
import { colors } from "@/data/colorsData";
import { EmotionColor } from "@/types/types";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

const PostForm = () => {
  const [selectedColors, setSelectedColors] = useState<EmotionColor[]>(colors);

  const handleChange = (e: { target: { value: string } }) => {
    const newColors = selectedColors.map((color) => {
      const newColor = { ...color };

      if (newColor.emotion === e.target.value) {
        newColor.checked = !newColor.checked;
      }

      return newColor;
    });

    setSelectedColors(newColors);
  };

  return (
    <div className="mb-28">
      <form action={addPostAction}>
        <div className="mb-3 text-right">
          <button
            type="submit"
            className="bg-default hover:outline-default hover:text-default rounded-md px-6 py-2 text-xl text-white transition-colors hover:bg-white hover:outline-2"
          >
            <FiSend />
          </button>
        </div>
        <textarea
          name="postContent"
          id="postContent"
          placeholder="Share your thoughts and feelings..."
          className="border-whitesmoke outline-default h-32 w-full resize-none rounded-2xl border-1 bg-white p-3"
        />
        <p className="flex items-center gap-1">
          今の気分は：
          {selectedColors.map((color) => {
            return color.checked ? (
              <span
                key={color.label}
                className={`${color.value === "purple" ? "text-purple" : ""} ${color.value === "red" ? "text-red" : ""} ${color.value === "orange" ? "text-orange" : ""} ${color.value === "yellow" ? "text-yellow" : ""} ${color.value === "green" ? "text-green" : ""} ${color.value === "pink" ? "text-pink" : ""} ${color.value === "blue" ? "text-blue" : ""}`}
              >
                {color.label}
              </span>
            ) : (
              ""
            );
          })}
        </p>
        <div className="my-5 flex flex-wrap items-center gap-5">
          {selectedColors.map((color, index) => {
            return (
              <div key={color.value}>
                <input
                  type="checkbox"
                  id={`color-${index}`}
                  value={color.emotion}
                  className="sr-only" // デフォルトのチェックボックスを非表示
                  checked={color.checked}
                  onChange={handleChange}
                  name={color.emotion}
                />
                <div className="inline-block">
                  <label
                    htmlFor={`color-${index}`}
                    className="flex cursor-pointer flex-col items-center"
                  >
                    <div
                      className={` ${color.value === "purple" ? "bg-purple" : ""} ${color.value === "red" ? "bg-red" : ""} ${color.value === "orange" ? "bg-orange" : ""} ${color.value === "yellow" ? "bg-yellow" : ""} ${color.value === "green" ? "bg-green" : ""} ${color.value === "pink" ? "bg-pink" : ""} ${color.value === "blue" ? "bg-blue" : ""} ${color.checked === true ? "h-12 w-12" : ""} h-8 w-8 rounded-full transition-all`}
                    ></div>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default PostForm;
