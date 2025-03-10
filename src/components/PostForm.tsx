"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";

const PostForm = () => {
  const [colors, setColors] = useState([
    { label: "ノンビリ", value: "#73FF00", checked: false },
    { label: "ワクワク", value: "#FFE600", checked: false },
    { label: "ニコニコ", value: "#FF8800", checked: false },
    { label: "トキメキ", value: "#FB00FF", checked: false },
    { label: "イライラ", value: "#FF0004", checked: false },
    { label: "シクシク", value: "#0071FF", checked: false },
    { label: "モヤモヤ", value: "#8C00FF", checked: false },
  ]);

  // const [color, setColor] = useState("");

  const handleChange = (e: { target: { value: string } }) => {
    const newColors = colors.map((color) => {
      const newColor = { ...color };

      if (newColor.label === e.target.value) {
        newColor.checked = !newColor.checked;
      }

      return newColor;
    });

    setColors(newColors);
  };

  return (
    <div className="mb-28">
      <form action="">
        <div className="mb-3 text-right">
          <button className="bg-default hover:outline-default hover:text-default rounded-md px-6 py-2 text-xl text-white transition-colors hover:bg-white hover:outline-2">
            <FiSend />
          </button>
        </div>
        <textarea
          name=""
          id=""
          placeholder="Share your thoughts and feelings..."
          className="border-whitesmoke outline-default h-32 w-full resize-none rounded-2xl border-1 bg-white p-3"
        />
        <p className="flex items-center gap-1">
          今の気分は：
          {colors.map((color) => {
            return color.checked ? (
              <span
                key={color.value}
                className={`${color.value === "#8C00FF" ? "text-[#8C00FF]" : ""} ${color.value === "#FF0004" ? "text-[#FF0004]" : ""} ${color.value === "#FF8800" ? "text-[#FF8800]" : ""} ${color.value === "#FFE600" ? "text-[#FFE600]" : ""} ${color.value === "#73FF00" ? "text-[#73FF00]" : ""} ${color.value === "#FB00FF" ? "text-[#FB00FF]" : ""} ${color.value === "#0071FF" ? "text-[#0071FF]" : ""}`}
              >
                {color.label}
              </span>
            ) : (
              ""
            );
          })}
        </p>
        <div className="my-5 flex items-center gap-5">
          {colors.map((color, index) => {
            return (
              <div key={color.value}>
                <input
                  type="checkbox"
                  id={`color-${index}`}
                  value={color.label}
                  className="sr-only" // デフォルトのチェックボックスを非表示
                  checked={color.checked}
                  onChange={handleChange}
                />
                <div className="inline-block">
                  <label
                    htmlFor={`color-${index}`}
                    className="flex cursor-pointer flex-col items-center"
                  >
                    <div
                      className={` ${color.value === "#8C00FF" ? "bg-[#8C00FF]" : ""} ${color.value === "#FF0004" ? "bg-[#FF0004]" : ""} ${color.value === "#FF8800" ? "bg-[#FF8800]" : ""} ${color.value === "#FFE600" ? "bg-[#FFE600]" : ""} ${color.value === "#73FF00" ? "bg-[#73FF00]" : ""} ${color.value === "#FB00FF" ? "bg-[#FB00FF]" : ""} ${color.value === "#0071FF" ? "bg-[#0071FF]" : ""} ${color.checked === true ? "h-12 w-12" : ""} h-8 w-8 rounded-full transition-all`}
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
