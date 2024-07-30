import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, fetchContacts } from "../../redux/contactsOps";
import { selectContacts } from "../../redux/contactsSlice";
import { useEffect } from "react";

import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const error = useSelector((state) => state.contacts.error);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {error && <p className={css.error}>Error: {error}</p>}
      <ContactList contacts={contacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
