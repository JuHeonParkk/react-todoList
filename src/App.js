import "./App.css";
import Layout from "./component/Layout.jsx";
import Header from "./component/Header.jsx";
import DateNavigation from "./component/DateNavigation.jsx";
import Lists from "./component/Lists.jsx";
import Modal from "./component/Modal.jsx";
import AddModal from "./component/AddModal.jsx";
import React, { useState } from "react";

function App() {
  const initialTodoData = localStorage.getItem("todoData")
    ? JSON.parse(localStorage.getItem("todoData"))
    : [];
  const [modalOpen, setModalOpen] = useState(false); // 모달 열기 상태관리
  const [isEditing, setIsEditing] = useState(false); // 편집 모드 상태관리

  const [todoData, setTodoData] = useState(initialTodoData); // todoData 상태관리
  const [value, setValue] = useState(""); // 입력값 상태관리
  const [color, setColor] = useState(null); // 색상 상태관리
  const [editedId, setEditedId] = useState(null); // 편집할 id 상태관리
  const [editedTitle, setEditedTitle] = useState(""); // 편집할 제목 상태관리

  const handleSubmit = (e) => {
    e.preventDefault(); // form 리로드 방지

    // 새로운 할 일 객체 생성
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
      color: color, // 기본 색상 설정
      date: selectedDate,
    };

    setTodoData([...todoData, newTodo]); // todoData에 새로운 할 일 추가
    localStorage.setItem("todoData", JSON.stringify([...todoData, newTodo])); // 로컬 스토리지에 저장
    setValue(""); // 입력창 초기화
    setModalOpen(false); // 모달 닫기
  };

  const today = new Date().toISOString().split("T")[0]; // 오늘 날짜 (YYYY-MM-DD 형식)
  const [selectedDate, setSelectedDate] = useState(today); // 선택된 날짜 상태관리

  return (
    <div>
      <Layout>
        <Header setModalOpen={setModalOpen} setIsEditing={setIsEditing} />
        <DateNavigation
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          today={today}
        />
        <Lists
          todoData={todoData}
          setTodoData={setTodoData}
          setModalOpen={setModalOpen}
          setIsEditing={setIsEditing}
          setEditedId={setEditedId}
          setEditedTitle={setEditedTitle}
          selectedDate={selectedDate}
        />

        {/* Add to todoList Modal*/}
        <Modal isOpen={modalOpen}>
          <AddModal
            setModalOpen={setModalOpen}
            value={value} // 입력값
            setValue={setValue}
            handleSubmit={handleSubmit}
            isEditing={isEditing}
            editedTitle={editedTitle}
            setEditedTitle={setEditedTitle}
            id={editedId}
            todoData={todoData}
            setTodoData={setTodoData}
            color={color}
            setColor={setColor}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </Modal>
      </Layout>
    </div>
  );
}

export default App;
