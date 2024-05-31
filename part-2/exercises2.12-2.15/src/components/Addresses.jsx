import Address from "./Address";
import axiosFunctions from "../services/axios";
function Addresses({ filteredName, persons, setPersons }) {
  function handleDelete(e) {
    if (e.target.matches(".deleteAddress")) {
      const id = e.target.dataset.id;
      axiosFunctions.deleteAddress(id).then(() => {
        const newPersons = persons.filter((person) => {
          return person.id !== id;
        });
        setPersons([...newPersons]);
      });
    }
  }
  return (
    <ul onClick={handleDelete}>
      {filteredName
        ? persons.reduce((acc, person) => {
            if (person.name.toLowerCase().includes(filteredName.toLowerCase()))
              return [
                ...acc,
                <Address
                  key={person.id}
                  name={person.name}
                  number={person.number}
                />,
              ];
            return acc;
          }, [])
        : persons.map((person) => {
            return (
              <Address
                id={person.id}
                key={person.id}
                name={person.name}
                number={person.number}
              />
            );
          })}
    </ul>
  );
}
export default Addresses;
