import React, { useState, useEffect } from "react";
import Paginator from "../../components/Paginator/Paginator";
import { DaysGeneralStats } from "../../components/DaysGeneralStats/DaysGeneralStats";

const CalendarPage = () => {
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [modalPosition, setModalPosition] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    generateDays(currentYear, currentMonth);
  }, [currentYear, currentMonth]);

  const generateDays = (year, month) => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysArray = Array.from({ length: daysInMonth }, (v, i) => ({
      date: i + 1,
      month: month,
      year: year,
      progress: Math.floor(Math.random() * 101),
    }));
    setDays(daysArray);
  };

  const handleMonthChange = (month, year) => {
    setCurrentMonth(month);
    setCurrentYear(year);
  };

  const handleSelectDay = (day, event) => {
    setSelectedDay(day);
    const rect = event.target.getBoundingClientRect();
    setModalPosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
    });
  };

  const handleCloseModal = () => {
    setSelectedDay(null);
  };

  return (
    <div>
      <Paginator
        days={days}
        onMonthChange={handleMonthChange}
        onSelectDay={handleSelectDay}
      />
      {selectedDay && (
        <DaysGeneralStats
          selectedDay={selectedDay}
          position={modalPosition}
          onShow={Boolean(selectedDay)}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default CalendarPage;
