export function getArrayOfNumbers(length: number, start: number) {
  return Array.from({ length }, (_, k) => k + start);
}