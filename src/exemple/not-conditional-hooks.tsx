import { useState } from "react";

const NotConditionalHooks = () => {
  // cas d'erreur: il ne faut pas appeler un hook conditionnellement
  const [darkMode, setDarkMode] = useState(false);
  let task;
  let setTask;
  const condition = darkMode;
  if (condition) {
    [task, setTask] = useState("Faire 1 heure de deep work");
  }

  const handleChange = () => {
    setTask("test");
  };

  const handleClickDarkMode = () => {
    setDarkMode(true);
  };

  return (
    <div>
      <br />
      {task}
      <br />
      dark mode ? : {Boolean(darkMode).toString()}
      <br />
      <button onMouseDown={handleChange}>change </button>
      <br />
      <button onMouseDown={handleClickDarkMode}>activer dark mode </button>
    </div>
  );
};

export default NotConditionalHooks;
