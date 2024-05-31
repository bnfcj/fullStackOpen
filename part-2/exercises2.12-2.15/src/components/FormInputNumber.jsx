function FormInputNumber({ newNumber, setNewNumber }) {
  return (
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
  );
}
export default FormInputNumber;
