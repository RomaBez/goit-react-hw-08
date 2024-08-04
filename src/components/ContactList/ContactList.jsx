import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

import css from "./ContactList.module.css";

const ContactList = () => {
  const filter = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filter.map((contact) => {
        return (
          <li key={contact.id} className={css.item}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
