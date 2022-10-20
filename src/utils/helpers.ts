export type InputTypes = {
  bill: number;
  tip: number;
  people: number;
};

export function calculateResult(data: InputTypes) {
  const { bill, people, tip } = data;

  const tipAm = bill * (tip / 100);

  const tipAmountForEachPerson = tipAm / people;
  const totalToPayForEachPeople = (bill + tipAm) / people;

  return {
    tipAmountForEachPerson,
    totalToPayForEachPeople,
  };
}
