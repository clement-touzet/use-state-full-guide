import { useState } from "react";
import NotConditionalHooks from "./exemple/not-conditional-hooks";
import NameInput from "./mini-projects/name/name-input";
import TodoList from "./mini-projects/todo-list/todo-list";
import ListExemple from "./exemple/list-exemple/list-exemple";

function App() {
  const [task, setTask] = useState("Faire 1 heure de deep work");

  return (
    <div>
      <div>Ma tache : {task}</div>
      <br />
      {/* <NotConditionalHooks /> */}
      <ListExemple />

      <h2>Projets</h2>
      <h3>Name input</h3>
      <NameInput />
      <h3>Todo list</h3>
      <TodoList />
    </div>
  );
}

export default App;
