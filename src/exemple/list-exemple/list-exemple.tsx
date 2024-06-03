import { useState } from "react";

const INITIAL_INPUT_VALUE = "";

const ListExemple = () => {
  const [myList, setMyList] = useState(["push", "pull"]);
  const [inputValue, setinputValue] = useState(INITIAL_INPUT_VALUE);

  const handleAddElement = () => {
    const newElement = inputValue;
    setMyList((oldList) => {
      return [...oldList, newElement];
    });
    setinputValue(INITIAL_INPUT_VALUE);
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setinputValue(e.target.value);
  };

  return (
    <div>
      Mes scéances de musculation
      <input type="text" value={inputValue} onChange={handleChangeInput} />
      <button onMouseDown={handleAddElement}>ajouter</button>
      <ul>
        {myList.map((listElement, index) => {
          return <li key={index}>{listElement}</li>;
        })}
      </ul>
    </div>
  );
};

export default ListExemple;
