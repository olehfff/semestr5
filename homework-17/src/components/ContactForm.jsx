import { useState } from "react";

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(name, number);
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer"
          required
        />
      </label>
      <br />
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <br />
      <button type="submit" style={{ marginTop: "10px" }}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;