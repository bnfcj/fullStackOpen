import { useState } from "react";
const Display = ({ counter }) => {
  console.log("Para re-rendered");
  return <p>{counter}</p>;
};
const Button = ({ onClick, text }) => {
  console.log("Button re-rendered");
  return <button onClick={onClick}>{text}</button>;
};
function App() {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);
  function increaseByOne() {
    setCounter(counter + 1);
  }
  function decreaseByOne() {
    setCounter(counter - 1);
  }
  function setToZero() {
    setCounter(0);
  }
  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={decreaseByOne} text="minus" />
      <Button onClick={setToZero} text="zero" />
    </div>
  );
}

export default App;
