import { useState } from "react";

function Heading({ title }) {
  return <h2>{title}</h2>;
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
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [percentPositive, setPercentPositive] = useState(0);
  function updateOverallStatistics({ good, neutral, bad }) {
    // Set the new total
    const newTotal = total + 1;
    setTotal(newTotal);
    // Set the new average
    console.log(good);
    const score = good - bad;
    const average = score / newTotal;
    setAverage(average);
    // Set the percentage positive
    setPercentPositive((good / newTotal) * 100);
  }
  return (
    <>
      <Heading title="give feedback" />
      <RatingButton
        text="good"
        onClick={() => {
          const newGood = good + 1;
          setGood(newGood);
          updateOverallStatistics({
            good: newGood,
            neutral: neutral,
            bad: bad,
          });
        }}
      />
      <RatingButton
        text="neutral"
        onClick={() => {
          setNeutral(neutral + 1);
          updateOverallStatistics({
            good: good,
            neutral: neutral + 1,
            bad: bad,
          });
        }}
      />
      <RatingButton
        text="bad"
        onClick={() => {
          setBad(bad + 1);
          updateOverallStatistics({
            good: good,
            neutral: neutral,
            bad: bad + 1,
          });
        }}
      />
      <Heading title="statistics" />
      <ul>
        <Rating rating={good} text="good" />
        <Rating rating={neutral} text="neutral" />
        <Rating rating={bad} text="bad" />
        <Rating rating={total} text="total" />
        <Rating rating={average} text="average" />
        <Rating rating={percentPositive} text="positive" />
      </ul>
    </>
  );
}

export default App;
