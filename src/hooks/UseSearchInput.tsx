import React, { useState } from "react";

const UseSearchInput = () => {
  const [search, setSearch] = useState<string>("");
  console.log(search);
  return { search, setSearch };
};

export default UseSearchInput;
