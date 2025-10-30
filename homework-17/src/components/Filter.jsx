
const Filter = ({ value, onChange }) => (
  <label style={{ display: "block", marginBottom: "15px" }}>
    Find contacts by name:
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search..."
    />
  </label>
);

export default Filter;