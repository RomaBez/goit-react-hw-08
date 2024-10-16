import React, { useState, useEffect } from "react";
import Paginator from "../../components/Paginator/Paginator";
import DaysList from "../../components/DaysList/DaysList";
import DaysGeneralStats from "../../components/DaysGeneralStats/DaysGeneralStats";

const CalendarPage = () => {
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    generateDays(currentYear, currentMonth);
    console.log(days);
  }, [currentYear, currentMonth]);

  const generateDays = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (v, i) => ({
      date: i + 1,
      month: month, // Додаємо місяць
      year: year, // Додаємо рік
      progress: Math.floor(Math.random() * 101),
    }));
    setDays(daysArray);
  };

  const handleMonthChange = (month, year) => {
    setCurrentMonth(month);
    setCurrentYear(year);
  };

  const handleSelectDay = (day) => {
    setSelectedDay(day);
  };

  return (
    <div>
      <Paginator onMonthChange={handleMonthChange} />
      <DaysList days={days} onSelectDay={handleSelectDay} />
      <DaysGeneralStats selectedDay={selectedDay} />
    </div>
  );
};

export default CalendarPage;
