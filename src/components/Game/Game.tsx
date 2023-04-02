import { useState } from 'react';
import Number from '../Number';
import { GameProp } from './type';
import { getArrayOfNumbers } from '../../helper/getArrayOfNumbers';
import { shuffle } from '../../helper/shuffle';

export default function Game({ handleGameEnd }: GameProp) {
  const [numbers] = useState(shuffle(getArrayOfNumbers(25, 1)));
  const [currentNumber, setCurrentNumber] = useState(1);
  const isEnd = numbers.length === currentNumber;

  const handleNumberClick = (value: number, currentNumber: number) => {
    if (value === currentNumber) {
      if (isEnd) {
        handleGameEnd();
      } else {
        setCurrentNumber(prev => prev + 1);
      }
      
      return true;
    }

    return false;
  }

  return (
    <div className="number-container">
      {numbers.map(number =>
        <Number
          key={number}
          label={number}
          currentNumber={currentNumber}
          handleNumberClick={handleNumberClick}
        />
      )}
    </div>
  );
}