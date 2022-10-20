import classNames from "classnames";
import "./resultCard.css";

type ResultCardProps = {
  tipAmount: number;
  total: number;
  isResetable: boolean;
  resetInputData: () => void;
};

const ResultCard = ({
  tipAmount,
  total,
  isResetable,
  resetInputData,
}: ResultCardProps) => {
  const reserBtnClass = classNames("result__row__button", {
    "button--inactive": !isResetable,
  });

  return (
    <div className="calc__result">
      <ResultRow amount={tipAmount} />
      <ResultRow amount={total} />
      <button className={reserBtnClass} onClick={resetInputData}>
        reset
      </button>
    </div>
  );
};

export default ResultCard;

type ResultRowProps = {
  amount: number;
};

const ResultRow = ({ amount }: ResultRowProps) => (
  <div className="result__row">
    <div>
      <p>Tip Amount</p>
      <span>/ person</span>
    </div>
    <div className="row__price">${amount.toFixed(2)}</div>
  </div>
);
