import { useState } from "react";

const INTIAL_LIST = [
  {
    id: 1,
    name: "courir 15 minutes",
  },
];

const INITIAL_INPUT_VALUE = "";
let nextId = 2;

const TodoList = () => {
  // Afficher une todo liste: permettre d'ajouter et de supprimer un élément

  // 1 créer l'état
  const [todoList, setTodoList] = useState(INTIAL_LIST);
  const [inputValue, setInputValue] = useState(INITIAL_INPUT_VALUE);

  const handleClick = (id: number) => {
    setTodoList((oldList) => {
      return oldList.filter((task) => task.id !== id);
    });
  };

  const handleClickAdd = () => {
    setTodoList((oldList) => {
      return [...oldList, { id: nextId, name: inputValue }];
    });
    nextId++;
    setInputValue(INITIAL_INPUT_VALUE);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {/* 4 : Faire un <input /> avec un bouton pour ajouter une nouvelle tache */}
      <div>
        <input value={inputValue} onChange={handleChange} />
        <button onMouseDown={handleClickAdd}>ajouter</button>
      </div>

      <br />
      {/* 2 : afficher le nom de chaque tache */}
      <ul>
        {todoList.map((task) => {
          return (
            <div>
              <li>
                <p>{task.name}</p>
                <button onMouseDown={() => handleClick(task.id)}>
                  supprimer
                </button>
              </li>
            </div>
          );
        })}
      </ul>

      {/* 3 : Faire un boutton pour supprimer une tache */}
    </div>
  );
};

export default TodoList;
