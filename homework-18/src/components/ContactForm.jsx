import { useRef, useContext } from "react";
import { ContactsContext } from "../context/ContactsContext";

const ContactForm = () => {
  const nameRef = useRef();
  const numberRef = useRef();
  const { addContact } = useContext(ContactsContext);

  const handleSubmit = e => {
    e.preventDefault();
    const name = nameRef.current.value.trim();
    const number = numberRef.current.value.trim();
    if (!name || !number) return alert("Please fill in both fields");
    addContact(name, number);
    nameRef.current.value = "";
    numberRef.current.value = "";
    nameRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input ref={nameRef} placeholder="Name" />
      <input ref={numberRef} placeholder="Number" />
      <button type="submit">Add</button>
    </form>
  );
};

export default ContactForm;
