import React from "react";

export default function List({
  data,
  index,
  todoData,
  setTodoData,
  setModalOpen,
  setIsEditing,
  setEditedId,
  setEditedTitle,
}) {
  // checkbox 상태관리
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
    localStorage.setItem("todoData", JSON.stringify(newTodoData)); // 로컬 스토리지에 저장
  };

  return (
    <div
      index={index}
      className="w-full h-10 bg-white flex justify-start items-center gap-2"
    >
      <input
        type="checkbox"
        onChange={() => handleCompleteChange(data.id)}
        checked={data.completed ? true : false}
      />
      <div
        className="w-1 h-7 rounded"
        style={{ backgroundColor: data.color }}
      ></div>
      <div
        className={` w-full h-full items-center flex ${
          data.completed ? "line-through" : undefined
        } cursor-pointer`}
        onClick={() => {
          setModalOpen(true);
          setIsEditing(true);
          setEditedId(data.id);
          setEditedTitle(data.title);
        }}
      >
        {data.title}
      </div>
    </div>
  );
}
