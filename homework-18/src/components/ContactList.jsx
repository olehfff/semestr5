import { useContext } from "react";
import { ContactsContext } from "../context/ContactsContext";

const ContactList = () => {
  const { contacts, deleteContact } = useContext(ContactsContext);

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={() => deleteContact(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
