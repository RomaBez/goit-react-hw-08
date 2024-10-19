import { useRef, useEffect } from "react";
import styles from "./DaysGeneralStats.module.css";

export const DaysGeneralStats = ({
  selectedDay,
  position,
  onShow,
  onClose,
}) => {
  const modalRef = useRef(null);
  const dailyNorm = 1.8;
  const { date, month, waterPerc, servingsCount } = selectedDay;

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

  const formattedDate = `${date}, ${monthNames[month]}`;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (!modalRef.current || !position) return;

    const { top = 0, left = 0, width = 0 } = position;
    const modal = modalRef.current;
    const modalWidth = modal.offsetWidth;

    const spaceToLeft = left;
    const spaceToRight = window.innerWidth - left - width;

    if (spaceToLeft > modalWidth) {
      modal.style.left = `${left - modalWidth}px`;
    } else if (spaceToRight > modalWidth) {
      modal.style.left = `${left + width}px`;
    } else {
      modal.style.left = "50%";
      modal.style.transform = "translateX(-50%)";
    }

    modal.style.top = `${top - modal.offsetHeight}px`;
  }, [position]);

  return (
    <div
      ref={modalRef}
      className={styles.modal}
      style={{ visibility: onShow ? "visible" : "hidden" }}
    >
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={styles.date}>{formattedDate}</p>
        </li>
        <li className={styles.item}>
          Daily norma: <span className={styles.info}>{dailyNorm} L</span>
        </li>
        <li className={styles.item}>
          Fulfillment of the daily norm:
          <span className={styles.info}>{waterPerc}%</span>
        </li>
        <li className={styles.item}>
          How many servings of water:
          <span className={styles.info}>{servingsCount || 0}</span>
        </li>
      </ul>
    </div>
  );
};
