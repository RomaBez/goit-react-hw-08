import css from "./Modal.module.css";

const Modal = ({ message, onConfirm, onCancel }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <p>{message}</p>
        <button className={css.button} onClick={onConfirm}>
          Confirm
        </button>
        <button className={css.button} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
