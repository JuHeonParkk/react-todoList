import React, { useState } from "react";
import ColorList from "./ColorList";

export default function AddModal({
  setModalOpen,
  value,
  setValue,
  handleSubmit,
  isEditing,
  setIsEditing,
  editedTitle,
  setEditedTitle,
  id,
  todoData,
  setTodoData,
  color,
  setColor,
  selectedDate,
  setSelectedDate,
}) {
  // 입력값 변경
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // 색상값 변경
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  // 수정 입력값 변경
  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  // 수정
  const handleEditSubmit = (e) => {
    e.preventDefault(); // form 리로드 방지

    let newTodoData = todoData.map((data) => {
      return data.id === id
        ? { ...data, title: editedTitle, color: color }
        : data;
    });
    setTodoData(newTodoData); // 수정된 todoData 상태 업데이트
    setModalOpen(false); // 모달 닫기
    localStorage.setItem("todoData", JSON.stringify(newTodoData)); // 로컬 스토리지에 저장
  };
  return (
    <div>
      <div className="flex justify-between">
        <button
          className="text-gray-500 p-2"
          onClick={() => setModalOpen(false)}
        >
          취소
        </button>
        <form onSubmit={isEditing ? handleEditSubmit : handleSubmit}>
          <input
            type="submit"
            value={isEditing ? "수정" : "추가"}
            className="p-2"
          />
        </form>
      </div>
      <div className="py-1 px-2">
        <form onSubmit={isEditing ? handleEditSubmit : handleSubmit}>
          <input
            type="text"
            placeholder={isEditing ? editedTitle : "할 일을 입력하세요."}
            value={isEditing ? editedTitle : value}
            onChange={isEditing ? handleEditChange : handleChange}
            className="w-full p-3 text-sm bg-white rounded"
          />
        </form>
        <div className="my-3 text-sm">
          <div className="bg-white rounded p-2">
            <ColorList
              color={color}
              setColor={setColor}
              onChange={handleColorChange}
            />
          </div>
          <div className="text-black font-bold my-3 px-2 w-full bg-white rounded p-2">
            {selectedDate}
          </div>
        </div>
      </div>
    </div>
  );
}
