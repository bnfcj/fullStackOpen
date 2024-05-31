import AddressDelete from "./AddressDelete";

function Address({ name, number, id }) {
  return (
    <li>
      {name} {number} {<AddressDelete id={id} />}
    </li>
  );
}
export default Address;
