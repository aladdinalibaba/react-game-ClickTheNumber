import { covertTime } from '../../helper/covertTime';
import Button from '../Button';
import { ScoreProps } from './type';

export default function Score({ bestTime, elapsedTime, handleGameStart }: ScoreProps) {
  const isBestTime = bestTime >= elapsedTime;

  return (
    <>
      <h1 className="title">
        <span>Your Time: </span>
        <span className={`your-time ${isBestTime ? 'good' : 'bad'}`}>{covertTime(elapsedTime)}</span>
      </h1>
      {isBestTime ? (
        <p className="subtitle">Great job! Why not try again and see if you can beat your own score?</p>
      ) : (
        <>
          <p className="subtitle best-time">Your best time: {covertTime(bestTime)}</p>
          <p className="subtitle">Wow! Why not try again and see if you can do even better this time?</p>
        </>
      ) }
      <Button label="Try again" handleGameStart={handleGameStart} />
      <p className="subtitle source-code">
        <a href="https://github.com/aladdinalibaba/react-game-click-the-number" target="_blank">Source code.</a>
      </p>
    </>
  );
}