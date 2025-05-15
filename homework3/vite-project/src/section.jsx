import data from "./data.json"
import "./section.css"

export default function Section({label, percentage}) {
  return (
    <>
    <section className="statistics">
      <h2 className="title">Upload stats</h2>
      <ul className="stat-list">
        {data.map((item) => (
          <li key={item.id} className="item">
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
    </>
  );
}