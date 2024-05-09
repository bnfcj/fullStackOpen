import { useState } from "react";

function Heading({ title }) {
  return <h2>{title}</h2>;
}
function RatingButton({ text, onClick }) {
  return <button onClick={onClick}>{text}</button>;
}
function RatingsList({ ratings, texts }) {
  return (
    <ul>
      <Rating rating={ratings[0]} text={texts[0]} />
      <Rating rating={ratings[1]} text={texts[1]} />
      <Rating rating={ratings[2]} text={texts[2]} />
    </ul>
  );
}
function Rating({ rating, text }) {
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

      <RatingButton text="good" onClick={() => setGood(good + 1)} />
      <RatingButton text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <RatingButton text="bad" onClick={() => setBad(bad + 1)} />

      <Heading title="statistics" />
      <RatingsList
        ratings={[good, neutral, bad]}
        texts={["good", "neutral", "bad"]}
      ></RatingsList>
    </>
  );
}

export default App;
