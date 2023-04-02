export function covertTime(time: number) {
  time = time / 1000;
  let result;
  
  if (time >= 60) {
    result = String(Math.floor(time) / 60).slice(0, 4) + 'm';
  } else {
    result = time.toString().slice(0, -1) + 's';
  }

  return result;
}