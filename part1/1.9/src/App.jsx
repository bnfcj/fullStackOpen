import { useState } from "react";

function Heading({ title }) {
  return <h2>{title}</h2>;
}
function Statistics({ good, neutral, bad }) {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positivePercent = (good / total) * 100;
  if (!total) {
    return <p>No feedback given</p>;
  }
  return (
    <ul>
      <li>good {good}</li>
      <li>neutral {neutral}</li>
      <li>bad {bad}</li>
      <li>all {total}</li>
      <li>average {average || 0}</li>
      <li>positive {positivePercent || 0}%</li>
    </ul>
  );
}
function RatingButton({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

function Rating({ rating, text }) {
  if (text === "positive")
    return (
      <li>
        {text} {rating}%
      </li>
    );
  return (
    <li>
      {text} {rating}
    </li>
  );
}
function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <Heading title="give feedback" />
      <RatingButton
        text="good"
        onClick={() => {
          setGood(good + 1);
        }}
      />
      <RatingButton
        text="neutral"
        onClick={() => {
          setNeutral(neutral + 1);
        }}
      />
      <RatingButton
        text="bad"
        onClick={() => {
          setBad(bad + 1);
        }}
      />
      <Heading title="statistics" />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
}

export default App;
