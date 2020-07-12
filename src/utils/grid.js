export function isValidGridValue(value) {
  // valid value: 0 - 12
  return Array.from(new Array(13), (x, i) => i).includes(value);
}