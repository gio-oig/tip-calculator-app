import "./resultCard.css";

const ResultCard = () => {
  return (
    <div className="calc__result">
      <ResultRow amount={5} />
      <ResultRow amount={5} />
      <button className="result__row__button button--inactive">reset</button>
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
