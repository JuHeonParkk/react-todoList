import React, { useState, useEffect } from "react";
import { getWeekDates } from "../utils/getWeekDates";

export default function DateNavigation({
  selectedDate,
  setSelectedDate,
  today,
}) {
  const [baseDate, setBaseDate] = useState(new Date()); // 기준 날짜 상태관리
  const [weekDates, setWeekDates] = useState([]); // 주 날짜 배열 상태관리

  useEffect(() => {
    setWeekDates(getWeekDates(baseDate));
  }, [baseDate]);

  const handlePreWeek = () => {
    const prev = new Date(baseDate);
    prev.setDate(prev.getDate() - 7);
    setBaseDate(prev);
  };

  const handleNextWeek = () => {
    const next = new Date(baseDate);
    next.setDate(next.getDate() + 7);
    setBaseDate(next);
  };

  const colorChange = (date) => {
    const day = new Date(date.full).getDay();
    if (day === 0) return "red";
    else if (day === 6) return "blue";
    else return "black";
  };

  return (
    <div className="flex justify-between items-center my-2">
      <div>
        <button
          onClick={handlePreWeek}
          className="text-gray-500 hover:text-black"
        >
          ◀
        </button>
      </div>
      {weekDates.map((date) => {
        const isSelected = selectedDate === date.full;
        const isToday = today === date.full;

        let dateStyle = "inline-block w-12 text-center cursor-pointer ";
        if (isSelected && isToday) {
          dateStyle +=
            "bg-green-300 font-bold rounded-lg p-1 border-2 border-black";
        } else if (isSelected && !isToday) {
          dateStyle += "p-1 border-2 border-green-300 rounded-lg";
        } else {
          dateStyle += "p-1";
        }
        return (
          <div
            key={date.full}
            onClick={() => setSelectedDate(date.full)}
            className={dateStyle}
          >
            <span style={{ color: colorChange(date) }}>{date.weekDay}</span>
            <h3 style={{ color: colorChange(date) }}>{date.day}</h3>
          </div>
        );
      })}
      <div>
        <button
          onClick={handleNextWeek}
          className="text-gray-500 hover:text-black"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
