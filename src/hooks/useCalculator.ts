import { useEffect, useState } from "react";
import { calculateResult, InputTypes } from "src/utils/helpers";

const initialErrorState = {
  bill: "",
  tip: "",
  people: "",
};

export const useCalculator = () => {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [errors, setErrors] = useState(initialErrorState);

  const [bill, setBill] = useState(NaN);
  const [tip, setTip] = useState(NaN);
  const [people, setPeope] = useState(NaN);

  const onInputChange = (data: InputTypes) => {
    if (!bill || !tip || !people) return;

    const { tipAmountForEachPerson, totalToPayForEachPeople } =
      calculateResult(data);

    setTipAmount(tipAmountForEachPerson);
    setTotalAmount(totalToPayForEachPeople);
  };

  const validate = (name: keyof typeof initialErrorState, val: number) => {
    let errorMessage = "";

    if (val > 10000) {
      errorMessage = "Can’t be more then 10000";
    } else if (!val) {
      errorMessage = "Can’t be empty";
    }

    setErrors((state) => ({ ...state, [name]: errorMessage }));
  };

  const resetInputData = () => {
    setTipAmount(0);
    setTotalAmount(0);

    setBill(NaN);
    setTip(NaN);
    setPeope(NaN);
  };

  useEffect(() => {
    onInputChange({ bill, tip, people });
  }, [bill, tip, people]);

  const isResetable = !!(bill || tip || people);

  return {
    tipAmount,
    totalAmount,
    bill,
    setBill,
    tip,
    setTip,
    people,
    setPeope,
    onInputChange,
    resetInputData,
    isResetable,
    errors,
    validate,
  };
};
