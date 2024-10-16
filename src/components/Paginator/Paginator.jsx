import { useState } from "react";
import styles from "./Paginator.module.css";

const Paginator = ({ onMonthChange }) => {
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
    <div className={styles.paginator}>
      <button onClick={goPrevMonth}>{"<"}</button>
      <span>{`${months[currentMonth]}, ${currentYear}`}</span>
      {!(
        currentYear === new Date().getFullYear() &&
        currentMonth === new Date().getMonth()
      ) && <button onClick={goNextMonth}>{">"}</button>}
    </div>
  );
};

export default Paginator;
