import { ChangeEvent, Dispatch, SetStateAction } from "react";

import ResultCard from "src/components/resultCard/resultCard";
import { Input } from "src/components/input/input";
import { SelectBox } from "src/components/selectBox/selectBox";

import { useCalculator } from "./hooks/useCalculator";

import logo from "src/assets/logo.svg";
import dolarIcon from "src/assets/icon-dollar.svg";
import personIcon from "src/assets/icon-person.svg";

import { InputTypes } from "src/utils/helpers";

import "./App.css";

const percents = [5, 10, 15, 25, 50];

function App() {
  const {
    tipAmount,
    totalAmount,
    bill,
    setBill,
    tip,
    setTip,
    people,
    setPeope,
    resetInputData,
    isResetable,
    errors,
    validate,
  } = useCalculator();

  const setInputValue =
    (setter: Dispatch<SetStateAction<number>>) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      setter(e.target.valueAsNumber);
      validate(e.target.name as keyof InputTypes, e.target.valueAsNumber);
    };

  return (
    <div className="App">
      <img className="logo" src={logo} alt="split tter" />
      <div className="calc-container">
        <div className="calc__input-card">
          <Input
            name="bill"
            icon={dolarIcon}
            label="Bill"
            placeholder="0"
            error={errors.bill}
            value={bill}
            onChange={setInputValue(setBill)}
          />
          <div className="tip-card">
            <p className="input-label">Select Tip %</p>
            <div className="input-card__select-box-container">
              {percents.map((percent) => (
                <SelectBox
                  content={percent}
                  isSelected={tip === percent}
                  onSelect={() => setTip(percent)}
                />
              ))}
              <Input
                name="tip"
                placeholder="Custom"
                value={tip}
                error={errors.tip}
                onChange={setInputValue(setTip)}
              />
            </div>
          </div>

          <Input
            name="people"
            icon={personIcon}
            label="Number of People"
            placeholder="0"
            error={errors.people}
            value={people}
            onChange={setInputValue(setPeope)}
          />
        </div>
        <ResultCard
          tipAmount={tipAmount}
          total={totalAmount}
          isResetable={isResetable}
          resetInputData={resetInputData}
        />
      </div>
    </div>
  );
}

export default App;
