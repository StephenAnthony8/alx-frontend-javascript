export default function getStudentsByLocation(arr, filt) {
  /* returns an array of objects located in a specific city */
  let rtnArr = [];
  if (arr instanceof Array) {
    try {
      rtnArr = arr.filter((x) => x.location === filt);
    } catch (error) {
      rtnArr = [];
    }
  }
  return rtnArr;
}
