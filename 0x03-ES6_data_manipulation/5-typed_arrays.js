export default function createInt8TypedArray(length, position, value) {
  /* returns a new ArrayBuffer of {length} with an Int8 {value} at {position} */
  if (length <= 0) {
    throw new Error('Position outside range');
  }
  const rtnArr = new Int8Array(length);

  try {
    if (position < length && position >= 0) {
      rtnArr[position] = value;
    } else {
      throw new Error();
    }
  } catch (error) {
    throw new Error('Position outside range');
  }
  return rtnArr;
}
