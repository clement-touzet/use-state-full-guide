import { useState } from "react";

const clickIncrement = 1;

const NotPureButton = () => {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks((oldClicks) => {
      // cete fonction n'est pas pure
      const newClicks = oldClicks + clickIncrement;
      return newClicks;
    });
  };

  return <button onClick={handleClick}>Clicks: {clicks} </button>;
};

export default NotPureButton;
