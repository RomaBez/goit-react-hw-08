import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, lazy, Suspense } from "react";
import { fetchContacts } from "../../redux/contacts/operations";
import 

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

  return;
}

export default App;
