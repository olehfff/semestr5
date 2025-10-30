import { useState, useContext } from "react";
import { ContactsContext } from "../context/ContactsContext";

const Filter = () => {
  const [query, setQuery] = useState("");
  const { contacts } = useContext(ContactsContext);

  const filtered = contacts.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <ul>
        {filtered.map(c => (
          <li key={c.id}>{c.name}: {c.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
