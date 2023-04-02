import Button from '../Button';
import { HomeProps } from './type';

export default function Home({ handleGameStart }: HomeProps) {
  return (
    <>
      <h1 className="title">Click The Number</h1>
      <p className="subtitle">Test your speed and accuracy. Click the numbers in ascending order as fast as you can.</p>
      <Button label="Start Now" handleGameStart={handleGameStart} />
    </>
  );
}