import { useEffect, useState } from "react";
import { SearchComponent } from "./components/SearchComponent";
import Form from "./components/Form";
import Heading2 from "./components/Heading2";
import Addresses from "./components/Addresses";
import axiosFunctions from "./services/axios";
const App = () => {
  useEffect(() => {
    axiosFunctions.getAll().then((data) => setPersons(data));
  }, []);
  const [persons, setPersons] = useState([]);
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
      <Addresses
        filteredName={filteredName}
        setPersons={setPersons}
        persons={persons}
      />
    </div>
  );
};

export default App;
