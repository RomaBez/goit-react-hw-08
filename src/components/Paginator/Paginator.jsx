import { useState, useEffect, useRef } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { DaysGeneralStats } from "../DaysGeneralStats/DaysGeneralStats";
import styles from "./Paginator.module.css";

const Paginator = () => {
  const [days, setDays] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [modalPosition, setModalPosition] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const modalRef = useRef(null);

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

  const handleSelectDay = (day, event) => {
    setSelectedDay(day);
    const rect = event.target.getBoundingClientRect();
    setModalPosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
    });
  };

  const goPrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear((prev) => prev - 1);
    } else {
      setCurrentMonth((prev) => prev - 1);
    }
  };

  const goNextMonth = () => {
    const today = new Date();
    if (currentYear === today.getFullYear() && currentMonth >= today.getMonth())
      return;

    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear((prev) => prev + 1);
    } else {
      setCurrentMonth((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalRef]);

  const handleCloseModal = () => {
    setSelectedDay(null);
  };

  return (
    <div>
      <div className={styles.paginator}>
        <button onClick={goPrevMonth}>
          <MdKeyboardArrowLeft />
        </button>
        <span>{`${new Date(currentYear, currentMonth).toLocaleString("en-US", {
          month: "long",
        })}, ${currentYear}`}</span>
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
            onClick={(e) =>
              handleSelectDay({ ...day, waterPerc: day.progress }, e)
            }
          >
            <span>{day.date}</span>
            <span>{`${day.progress}%`}</span>
          </div>
        ))}
      </div>
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

export default Paginator;
