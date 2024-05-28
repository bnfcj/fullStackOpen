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
    if (persons.some((person) => person.name === newName))
      return alert(`${newName} is already added to phonebook`);
    if (!newName || !newNumber)
      return alert("One or more required fields are empty");

    setPersons([...persons, { name: newName, number: newNumber }]);
    setNewName("");
    setNewNumber("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
      </div>
      <div>
        number:{" "}
        <input
          type="tel"
          value={newNumber}
          onChange={(e) => {
            setNewNumber(e.target.value);
          }}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
export default Form;
