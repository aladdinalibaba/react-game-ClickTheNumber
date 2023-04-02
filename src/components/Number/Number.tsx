import { NumberProps } from './type';

export default function Number({
  label,
  currentNumber,
  handleNumberClick
}: NumberProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.currentTarget.disabled = handleNumberClick(+label, currentNumber);
  }

  return (
    <button
      className="number"
      onClick={handleClick}
    >{label}</button>
  );
}