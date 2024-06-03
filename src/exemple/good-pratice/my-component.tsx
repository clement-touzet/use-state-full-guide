import { useState } from "react";

const MyComponent = () => {
  const [name, setName] = useState("Clément");

  const handleChangeName = () => {
    setName("...");
  };

  return <div>Nom : {name}</div>;
};

export default MyComponent;
