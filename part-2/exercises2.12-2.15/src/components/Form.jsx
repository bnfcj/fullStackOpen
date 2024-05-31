import FormButton from "./FormButton";
import FormInputName from "./FormInputName";
import FormInputNumber from "./FormInputNumber";
import axiosFunctions from "../services/axios";
function Form({
  persons,
  newName,
  newNumber,
  setPersons,
  setNewName,
  setNewNumber,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
    };
    const person = persons.find((person) => person.name === newName);
    if (!newName || !newNumber) {
      return alert("One or more required fields are empty");
    } else if (person) {
      const confirmed = confirm(
        `${newName} is already added to phonebook, want to update number?`
      );

      if (confirmed) {
        axiosFunctions
          .patchAddress(person.id, newNumber)
          .then((data) => {
            const newPersons = persons.map((person) => {
              return person.name !== newName ? person : data;
            });
            setPersons([...newPersons]);
          })
          .catch((err) => console.log(err));
      }
    } else {
      axiosFunctions.post(personObject).then((data) => {
        setPersons([...persons, data]);
      });
    }

    setNewName("");
    setNewNumber("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormInputName newName={newName} setNewName={setNewName} />
      <FormInputNumber newNumber={newNumber} setNewNumber={setNewNumber} />
      <FormButton />
    </form>
  );
}
export default Form;
