export default function createInt8TypedArray(length, position, value) {
  /* returns a new ArrayBuffer of {length} with an Int8 {value} at {position} */
  if (length <= 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const rtnBuffer = new ArrayBuffer(length);

  const rtnArr = new DataView(rtnBuffer);
  rtnArr.setInt8(position, value);

  return rtnArr;
}
