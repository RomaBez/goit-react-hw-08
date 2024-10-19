import { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import styles from "./Paginator.module.css";

const Paginator = ({ days, onMonthChange, onSelectDay }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const goPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
      onMonthChange(11, currentYear - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
      onMonthChange(currentMonth - 1, currentYear);
    }
  };

  const goNextMonth = () => {
    const today = new Date();
    if (currentYear === today.getFullYear() && currentMonth >= today.getMonth())
      return;

    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
      onMonthChange(0, currentYear + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
      onMonthChange(currentMonth + 1, currentYear);
    }
  };

  return (
    <div>
      <div className={styles.paginator}>
        <button onClick={goPrevMonth}>
          <MdKeyboardArrowLeft />
        </button>
        <span>{`${months[currentMonth]}, ${currentYear}`}</span>
        {!(
          currentYear === new Date().getFullYear() &&
          currentMonth === new Date().getMonth()
        ) && (
          <button onClick={goNextMonth}>
            <MdKeyboardArrowRight />
          </button>
        )}
      </div>
      <div className={styles.daysList}>
        {days.map((day) => (
          <div
            key={day.date}
            className={`${styles.dayItem} ${
              day.progress < 100 ? styles.incomplete : ""
            }`}
            onClick={(e) => onSelectDay({ ...day, waterPerc: day.progress }, e)}
          >
            <span>{day.date}</span>
            <span>{`${day.progress}%`}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Paginator;
