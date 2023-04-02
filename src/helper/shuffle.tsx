export function shuffle(arrays: number[]) {
  return arrays.sort((a, b) => .5 - Math.random());
}