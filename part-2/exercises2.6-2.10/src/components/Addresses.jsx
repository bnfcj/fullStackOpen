import Address from "./Address";
function Addresses({ filteredName, persons }) {
  return (
    <ul>
      {filteredName
        ? persons.reduce((acc, person) => {
            if (person.name.toLowerCase().includes(filteredName.toLowerCase()))
              return [
                ...acc,
                <Address
                  key={person.name}
                  name={person.name}
                  number={person.number}
                />,
              ];
            return acc;
          }, [])
        : persons.map((person) => {
            return (
              <Address
                key={person.name}
                name={person.name}
                number={person.number}
              />
            );
          })}
    </ul>
  );
}
export default Addresses;
