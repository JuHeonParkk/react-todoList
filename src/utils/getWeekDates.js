// 날짜 7일 생성 함수
export function getWeekDates(referenceDate) {
  const date = new Date(referenceDate); // 기준 날짜 설정
  const day = date.getDay(); // 요일 (0: 일요일, 1: 월요일, ..., 6: 토요일)

  // 이번 주의 시작일 (일요일)과 종료일 (토요일) 계산
  const startDate = new Date(date);
  startDate.setDate(date.getDate() - day);

  // 주 날짜 배열 생성
  const week = [];
  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(startDate); // 매 반복마다 새로운 날짜 객체 생성
    currentDate.setDate(startDate.getDate() + i); // 시작일로부터 i일 더하기
    week.push({
      full: currentDate.toISOString().split("T")[0],
      weekDay: ["일", "월", "화", "수", "목", "금", "토"][currentDate.getDay()],
      day: currentDate.getDate(),
    });
  }
  return week;
}
