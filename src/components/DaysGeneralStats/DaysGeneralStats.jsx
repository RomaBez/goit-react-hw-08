import React from "react";
import styles from "./DaysGeneralStats.module.css";

const DaysGeneralStats = ({ selectedDay }) => {
  if (!selectedDay) return null;

  // Приклад денної норми
  const dailyNorm = 1.8; // літри

  const { date, month, year, progress, portions } = selectedDay;

  // Форматування дати
  const monthNames = [
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

  const formattedDate = `${date}, ${monthNames[month]}`; // Залишаємо month без змін, якщо ви передаєте правильний місяць

  return (
    <div className={styles.generalStats}>
      <h3>{formattedDate}</h3>

      <div className={styles.statsSection}>
        <span>Daily norma:</span>
        <span>{`${dailyNorm} л`}</span>
      </div>

      <div className={styles.statsSection}>
        <span>Fulfillment of the daily norm:</span>
        <span>{`${progress}%`}</span>
      </div>

      <div className={styles.statsSection}>
        <span>How many servings of water:</span>
        <span>{portions || 0}</span>
      </div>
    </div>
  );
};

export default DaysGeneralStats;
