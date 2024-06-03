import { useState } from "react";
import MyChildren from "./children";

export const MyParent = () => {
  const [degreesInCelcius, setDegreesInCelcius] = useState(21);

  const changeTemperature = (newTemperature: number) => {
    setDegreesInCelcius(newTemperature);
  };

  return (
    <div>
      <MyChildren
        degreesInCelcius={degreesInCelcius}
        changeTemperature={changeTemperature}
      />
    </div>
  );
};
