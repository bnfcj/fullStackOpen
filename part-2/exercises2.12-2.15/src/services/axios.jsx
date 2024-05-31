import axios from "axios";
const getAll = async function () {
  const response = await axios.get("http://localhost:3001/persons");
  return response.data;
};
const post = async function (personObject) {
  const response = await axios.post(
    "http://localhost:3001/persons",
    personObject
  );
  return response.data;
};
const deleteAddress = async function (id) {
  const response = await axios.delete(`http://localhost:3001/persons/${id}`);
  return response.data;
};
const patchAddress = async function (id, address) {
  const response = await axios.patch(`http://localhost:3001/persons/${id}`, {
    number: address,
  });

  return response.data;
};
export default { getAll, post, deleteAddress, patchAddress };
