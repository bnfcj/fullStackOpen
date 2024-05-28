import { useState } from "react";
import { SearchComponent } from "./components/SearchComponent";
import Form from "./components/Form";
import Heading2 from "./components/Heading2";
import Addresses from "./components/Addresses";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredName, setFilteredName] = useState("");

  return (
    <div>
      <Heading2 text="Phonebook" />
      {<SearchComponent setFilteredName={setFilteredName} />}
      <Heading2 text="Add a new" />
      <Form
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setPersons={setPersons}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <Heading2 text="Numbers" />
      <Addresses filteredName={filteredName} persons={persons} />
    </div>
  );
};

export default App;
