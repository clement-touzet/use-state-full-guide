import { useState } from "react";

const INITIAL_INPUT_VALUE = "";

const ListExemple = () => {
  // liste mes scéances de musculation
  const [myList, setMyList] = useState(["push", "pull"]);
  const [inputValue, setInputValue] = useState(INITIAL_INPUT_VALUE);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClick = () => {
    setMyList((oldList) => {
      return [...oldList, inputValue];
    });
    setInputValue(INITIAL_INPUT_VALUE);
  };

  return (
    <div>
      <div>Mes scéances de musculation</div>
      <input value={inputValue} onChange={handleChange} />{" "}
      <button onMouseDown={handleClick}>valider</button>
      <br />
      <ul>
        {myList.map((element, index) => {
          return <li key={index}>{element}</li>;
        })}
      </ul>
    </div>
  );
};

// const ListExemple = () => {
//   const [myList, setMyList] = useState(["push", "pull"]);
//   const [inputValue, setinputValue] = useState(INITIAL_INPUT_VALUE);

//   const handleAddElement = () => {
//     const newElement = inputValue;
//     setMyList((oldList) => {
//       return [...oldList, newElement];
//     });
//     setinputValue(INITIAL_INPUT_VALUE);
//   };

//   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setinputValue(e.target.value);
//   };

//   return (
//     <div>
//       Mes scéances de musculation
//       <input type="text" value={inputValue} onChange={handleChangeInput} />
//       <button onMouseDown={handleAddElement}>ajouter</button>
//       <ul>
//         {myList.map((listElement, index) => {
//           return <li key={index}>{listElement}</li>;
//         })}
//       </ul>
//     </div>
//   );
// };

export default ListExemple;
