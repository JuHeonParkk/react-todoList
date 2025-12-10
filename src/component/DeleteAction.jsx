import React from "react";

export default function DeleteAction({ className }) {
  return (
    <div
      className={`flex justify-end items-center h-full text-sm font-thin ${className}`}
    >
      <button className="bg-red-500 text-white h-11 w-12">삭제</button>
    </div>
  );
}
