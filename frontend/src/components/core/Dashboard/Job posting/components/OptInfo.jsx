import React from "react";

export default function OptInfo({ content }) {
  return (
    <div className="flex gap-2  w-[116%]  mt-3 -ml-[7.1em]  bg-[#EBF3FE] border-[1px] border-blue-300 py-[10px] justify-start rounded-sm  px-6">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
        >
          <path
            fill="blue"
            d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10"
            opacity={0.8}
          ></path>
          <path
            fill="white"
            d="M12 17.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
          ></path>
        </svg>
      </span>
      <p className="text-black">{content}</p>
    </div>
  );
}