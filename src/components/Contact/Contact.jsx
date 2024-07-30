import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

import css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <div className={css.contactInfo}>
        <FaUser size={24} />
        <p className={css.name}>{name}</p>
      </div>
      <div className={css.contactInfo}>
        <FaPhoneAlt size={24} />
        <p className={css.number}>{number}</p>
      </div>
      <div>
        <button
          className={css.button}
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
