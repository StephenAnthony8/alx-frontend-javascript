export default function appendToEachArrayValue(array, appendString) {
  const rtnArr = [];
  for (const value of array) {
    rtnArr.push(appendString + value);
  }

  return rtnArr;
}
