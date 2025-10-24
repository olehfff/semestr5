import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = (type) => {
    setFeedback((prev) => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage = total
    ? Math.round((feedback.good / total) * 100)
    : 0;

  useEffect(() => {
    console.log("Feedback updated:", feedback);
  }, [feedback]);

  return (
    <div className="App">
      <h1>Віджет відгуків</h1>

      <div className="buttons">
        <button onClick={() => handleFeedback("good")}>Добре</button>
        <button onClick={() => handleFeedback("neutral")}>Нейтрально</button>
        <button onClick={() => handleFeedback("bad")}>Погано</button>
      </div>

      <h2>Статистика</h2>
      {total > 0 ? (
        <ul>
          <li>Добре: {feedback.good}</li>
          <li>Нейтрально: {feedback.neutral}</li>
          <li>Погано: {feedback.bad}</li>
          <li>Усього: {total}</li>
          <li>Позитивні: {positivePercentage}%</li>
        </ul>
      ) : (
        <p>Ще немає відгуків</p>
      )}
    </div>
  );
}

export default App;
