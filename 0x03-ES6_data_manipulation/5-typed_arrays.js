export default function createInt8TypedArray(length, position, value) {
  /* returns a new ArrayBuffer of {length} with an Int8 {value} at {position} */
  const rtnArr = new Int8Array(length);

  try {
    if (position < length) {
      rtnArr[position] = value;
    } else {
      throw new Error();
    }
  } catch (error) {
    throw new Error('Position outside range');
  }
  return rtnArr;
}
