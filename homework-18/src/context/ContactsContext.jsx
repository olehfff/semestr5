import { createContext, useState } from "react";

export const ContactsContext = createContext();

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState([
    { id: 1, name: "Alice", number: "123-45-67" },
    { id: 2, name: "Bob", number: "987-65-43" },
  ]);

  const addContact = (name, number) => {
    setContacts(prev => [...prev, { id: Date.now(), name, number }]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(c => c.id !== id));
  };

  return (
    <ContactsContext.Provider value={{ contacts, addContact, deleteContact }}>
      {children}
    </ContactsContext.Provider>
  );
};
