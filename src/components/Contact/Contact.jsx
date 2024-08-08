import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { toast } from "react-hot-toast";

import css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newNumber, setNewNumber] = useState(number);

  const handleDelete = () => {
    dispatch(deleteContact(id));
    toast.success("Contact deleted successfully!");
    setShowModal(false);
  };

  const handleEdit = () => {
    dispatch(
      updateContact({ id, updates: { name: newName, number: newNumber } })
    );
    toast.success("Contact updated successfully!");
    setEditing(false);
  };

  return (
    <div className={css.container}>
      <div className={css.contactInfo}>
        <FaUser size={24} />
        {editing ? (
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        ) : (
          <p className={css.name}>{name}</p>
        )}
      </div>
      <div className={css.contactInfo}>
        <FaPhoneAlt size={24} />
        {editing ? (
          <input
            type="text"
            value={newNumber}
            onChange={(e) => setNewNumber(e.target.value)}
          />
        ) : (
          <p className={css.number}>{number}</p>
        )}
      </div>
      <div>
        {editing ? (
          <button className={css.button} onClick={handleEdit}>
            Save
          </button>
        ) : (
          <>
            <button
              className={css.button}
              type="button"
              onClick={() => setEditing(true)}
            >
              Edit
            </button>
            <button
              className={css.button}
              type="button"
              onClick={() => setShowModal(true)}
            >
              Delete
            </button>
          </>
        )}
        {showModal && (
          <Modal
            message={`Are you sure you want to delete ${name} from your contacts?`}
            onConfirm={handleDelete}
            onCancel={() => setShowModal(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Contact;
