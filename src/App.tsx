import { useCallback, useState } from 'react';
import Score from './components/Score';
import Game from './components/Game';
import { GameState } from './type';
import Home from './components/Home';

export default function App() {
  const [gameState, setGameState] = useState<GameState>('HOME');
  const [elapsedTime, setElapsedTime] = useState<null | number>(null);
  const bestTime = localStorage.getItem('best-time');
  
  const handleGameStart = () => {
    setGameState('GAME');
    setElapsedTime(Date.now());
  }

  const handleGameEnd = () => {
    setGameState('SCORE');
    const endTime = Date.now();
    setElapsedTime(prev => endTime - prev!);
    storeTime(endTime - elapsedTime!)
  }

  const storeTime = useCallback((elapsedTime: number) => {
    if (!bestTime || +bestTime > elapsedTime) {
      localStorage.setItem('best-time', String(elapsedTime));
    }
  }, [elapsedTime]);

  return (
    <div className="container">
      {gameState === 'HOME' ? (
        <Home handleGameStart={handleGameStart} />
      ) : gameState === 'SCORE' ? (
        <Score
          bestTime={+bestTime!}
          elapsedTime={elapsedTime!}
          handleGameStart={handleGameStart}
        />
      ) : gameState === 'GAME' && (
        <Game handleGameEnd={handleGameEnd} />
      )}
    </div>
  );
}