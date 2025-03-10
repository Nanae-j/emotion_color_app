"use client";

import { useState } from "react";

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

  const [color, setColor] = useState("");

  const handleChange = (e) => {
    const newColors = colors.map((color) => {
      const newColor = { ...color };

      if (newColor.label === e.target.value) {
        newColor.checked = !newColor.checked;
        setColor(newColor.label);
      }

      return newColor;
    });

    setColors(newColors);
  };

  return (
    <div className="mb-15">
      <form action="">
        <textarea
          name=""
          id=""
          placeholder="Share your thoughts and feelings..."
          className="border-whitesmoke h-32 w-full resize-none rounded-2xl border-1 bg-white p-3"
        />
        <p>今の気分は：{color}</p>
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
                      className={`
                        ${color.value === '#8C00FF' ? 'bg-[#8C00FF]' : ''}
                        ${color.value === '#FF0004' ? 'bg-[#FF0004]' : ''}
                        ${color.value === '#FF8800' ? 'bg-[#FF8800]' : ''}
                        ${color.value === '#FFE600' ? 'bg-[#FFE600]' : ''}
                        ${color.value === '#73FF00' ? 'bg-[#73FF00]' : ''}
                        ${color.value === '#FB00FF' ? 'bg-[#FB00FF]' : ''}
                        ${color.value === '#0071FF' ? 'bg-[#0071FF]' : ''}
                        ${color.checked === true ? 'h-15 w-15' : ''}
                        h-12 w-12 rounded-full transition-all`}
                    ></div>
                  </label>
                </div>
              </div>
            );
          })}
        </div>
        <button className="flex items-center gap-3 rounded-md px-1 py-3 transition-all ease-in">
          <span className="font-black tracking-wider text-sky-400">
            COLOR IT ...
          </span>
          <span className="h-[10px] w-[10px] animate-ping rounded-full bg-sky-400 opacity-75"></span>
        </button>
      </form>
    </div>
  );
};

export default PostForm;
