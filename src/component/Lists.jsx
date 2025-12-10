import React from "react";
import DeleteAction from "./DeleteAction.jsx";
import List from "./List.jsx";
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

export default function Lists({
  todoData,
  setTodoData,
  setModalOpen,
  setIsEditing,
  setEditedId,
  setEditedTitle,
  selectedDate,
}) {
  // selectedDate에 해당하는 할 일만 필터링
  const filteringDate = todoData.filter((data) => data.date === selectedDate);

  // 스와이프 삭제 액션
  const trailingActions = (id) => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={() => {
          const newTodoData = todoData.filter((item) => item.id !== id); // id가 일치하지 않는 항목들만 남김
          setTodoData(newTodoData);
        }}
      >
        <DeleteAction />
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <div className="w-full h-full p-4">
      <div className="text-sm text-gray-600">{filteringDate.length} Tasks</div>
      {filteringDate.length === 0 && (
        <div className="w-full h-full flex justify-center items-center text-gray-400">
          할 일이 없습니다.
        </div>
      )}
      {filteringDate.length > 0 && (
        <div className="w-full h-full overflow-y-auto flex flex-col gap-2">
          <SwipeableList>
            {filteringDate.map((data, index) => (
              <SwipeableListItem
                key={data.id}
                trailingActions={trailingActions(data.id)}
              >
                <List
                  data={data}
                  key={index}
                  todoData={todoData}
                  setTodoData={setTodoData}
                  setModalOpen={setModalOpen}
                  setIsEditing={setIsEditing}
                  setEditedId={setEditedId}
                  setEditedTitle={setEditedTitle}
                />
              </SwipeableListItem>
            ))}
          </SwipeableList>
        </div>
      )}
    </div>
  );
}
