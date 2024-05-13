import Part from "./Part";
import Total from "./Total";

function Content({ parts }) {
  return (
    <>
      {parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        );
      })}
      <Total total={parts.reduce((prev, curr) => prev + curr.exercises, 0)} />
    </>
  );
}

export default Content;
