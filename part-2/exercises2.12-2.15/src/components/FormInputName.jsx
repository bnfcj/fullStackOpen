function FormInputName({ newName, setNewName }) {
  return (
    <div>
      name:{" "}
      <input
        value={newName}
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
    </div>
  );
}
export default FormInputName;
