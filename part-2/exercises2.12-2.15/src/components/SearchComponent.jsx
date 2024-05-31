import { useState } from "react";

function SearchComponent({ setFilteredName }) {
  return (
    <input type="text" onChange={(e) => setFilteredName(e.target.value)} />
  );
}

export { SearchComponent };
