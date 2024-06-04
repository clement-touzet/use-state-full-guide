import { useState } from "react";

const NameInput = () => {
  // objectif : permettre d'afficher un nom et de le modifier grâce à un
  // champ input en dessous.

  // 1 : créer un état
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
    setInputValue(event.target.value);
  };

  return (
    <div>
      {/* 2 afficher l'état */}
      <p>Nom : {name}</p>
      <br />
      {/* 3 utiliser un <input /> pour modifier l'état */}
      <input value={inputValue} onChange={handleChange} />
    </div>
  );
};

export default NameInput;
