
const ContactItem = ({ id, name, number, onDelete }) => (
  <li style={{ marginBottom: "8px" }}>
    {name}: {number}
    <button
      onClick={() => onDelete(id)}
      style={{ marginLeft: "10px", color: "white", background: "red" }}
    >
      Delete
    </button>
  </li>
);

export default ContactItem;