type Props = {
  degreesInCelcius: number;
  changeTemperature: (newTemperature: number) => void;
};

const MyChildren = ({ degreesInCelcius, changeTemperature }: Props) => {
  const handleClickChangeTemperature = () => {
    changeTemperature(25);
  };
  return (
    <div>
      <p>Température : {degreesInCelcius}</p>
      <button onMouseDown={handleClickChangeTemperature}>
        changer temperature
      </button>
    </div>
  );
};

export default MyChildren;
