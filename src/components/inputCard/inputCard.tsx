import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import dolarIcon from "src/assets/icon-dollar.svg";
import classNames from "classnames";

import "./inputCard.css";

const percents = [5, 10, 15, 25, 50];

type InputCardProps = {
  bill: number;
  tip: number;
  people: number;
  setBill: Dispatch<SetStateAction<number>>;
  setTip: Dispatch<SetStateAction<number>>;
  setPeope: Dispatch<SetStateAction<number>>;
};

const InputCard = ({
  tip,
  bill,
  people,
  setBill,
  setPeope,
  setTip,
}: InputCardProps) => {
  const handleBillChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBill(e.target.valueAsNumber);
  };

  const handleCustomTipChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTip(e.target.valueAsNumber);
  };

  const handlePeopleCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPeope(e.target.valueAsNumber);
  };

  const onChange =
    (setter: Dispatch<SetStateAction<number>>) =>
    (e: ChangeEvent<HTMLInputElement>) =>
      setter(e.target.valueAsNumber);

  return (
    <div className="calc__input-card">
      <Input
        icon={dolarIcon}
        label="Bill"
        placeholder="0"
        value={bill}
        onChange={onChange(setBill)}
      />
      <p className="input-label">Select Tip %</p>
      <div className="input-card__select-box-container">
        {percents.map((percent) => (
          <SelectBox
            content={percent}
            isSelected={tip === percent}
            onSelect={() => setTip(percent)}
          />
        ))}
        <Input placeholder="Custom" onChange={handleCustomTipChange} />
      </div>

      <Input
        icon={dolarIcon}
        label="Number of People"
        placeholder="0"
        onChange={handlePeopleCountChange}
      />
    </div>
  );
};

export default InputCard;

type SelectBoxProps = {
  content: number;
  isSelected: boolean;
  onSelect: () => void;
};

const SelectBox = ({ content, isSelected, onSelect }: SelectBoxProps) => {
  const selectBoxClass = classNames("select-box", {
    "select-box--selected": isSelected,
  });

  return (
    <div className={selectBoxClass} onClick={onSelect}>
      {content}%
    </div>
  );
};

type InputProps = {
  icon?: string;
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  value?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  icon,
  label,
  type = "number",
  placeholder,
  name,
  error,
  value,
  onChange,
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputContainerClass = classNames("input-container", {
    "input-container--focus": isFocused,
    "input-container--error": !!error,
  });

  return (
    <div className="form-controll">
      {label && (
        <div className="form-controll__heder input-label">
          <label htmlFor={name}>{label}</label>
          <p className="form-controll__error">{error}</p>
        </div>
      )}
      <div
        className={inputContainerClass}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        {icon && <img src={icon} alt="input icon" />}
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
