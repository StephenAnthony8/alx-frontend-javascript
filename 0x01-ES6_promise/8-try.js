export default function divideFunction(numerator, denominator) {
  if (denominator === 0) {
    return (numerator / denominator);
  }
  throw Error('Cannot divide by 0');
}
