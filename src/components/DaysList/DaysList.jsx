import React from "react";
import styles from "./DaysList.module.css";

const DaysList = ({ days, onSelectDay }) => {
  return (
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
  );
};

export default DaysList;
