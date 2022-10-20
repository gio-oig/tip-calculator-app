import classNames from "classnames";

type SelectBoxProps = {
  content: number;
  isSelected: boolean;
  onSelect: () => void;
};

export const SelectBox = ({
  content,
  isSelected,
  onSelect,
}: SelectBoxProps) => {
  const selectBoxClass = classNames("select-box", {
    "select-box--selected": isSelected,
  });

  return (
    <div className={selectBoxClass} onClick={onSelect}>
      {content}%
    </div>
  );
};
