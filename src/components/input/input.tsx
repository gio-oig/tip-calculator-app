import classNames from "classnames";
import { ChangeEventHandler, useState } from "react";
import { InputTypes } from "src/utils/helpers";

type InputProps = {
  icon?: string;
  name?: keyof InputTypes;
  type?: string;
  label?: string;
  placeholder?: string;
  error?: string;
  value?: number;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const Input = ({
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
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
