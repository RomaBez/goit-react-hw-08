import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import { selectContacts } from "../../redux/contactsSlice";

import css from "./App.module.css";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts} onDelete={handleDelete} />
    </div>
  );
}

export default App;
