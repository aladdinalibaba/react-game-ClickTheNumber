export type NumberProps = {
  label: string | number;
  currentNumber: number;
  handleNumberClick: (value: number, current: number) => boolean;
}