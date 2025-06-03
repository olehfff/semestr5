import data from "./data.json"
import "./section.css"

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#"; 
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function Section() {
  return (
    <>
      <section className="statistics">
        <h2 className="title">Upload stats</h2>
        <ul className="stat-list">
          {data.map((item) => (
            <li
              key={item.id}
              className="item"
              style={{ backgroundColor: getRandomColor() }}
            >
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}