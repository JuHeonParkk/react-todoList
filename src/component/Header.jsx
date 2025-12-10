import React from "react";

export default function Header({ setModalOpen, setIsEditing }) {
  const todayDate = new Date();
  const formattedDate = `${todayDate.getFullYear()}년 ${
    todayDate.getMonth() + 1
  }월`;

  return (
    <div className="w-full h-16 flex justify-between items-center px-4 border-b-2 border-black">
      <div>
        <h1 className="text-lg font-bold">{formattedDate}</h1>
      </div>
      <div className="flex justify-center items-center gap-2">
        <button
          className="bg-green-300 px-4 py-2 rounded text-xl font-bold border-2 border-black"
          onClick={() => {
            setModalOpen(true);
            setIsEditing(false);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
