import React from 'react';

export type ButtonProps = {
  label: string;
  handleGameStart: () => void;
}

export default function Button({ label, handleGameStart }: ButtonProps) {
  return (
    <button
      className="button"
      type="button"
      onClick={handleGameStart}
    >{label}</button>
  );
}