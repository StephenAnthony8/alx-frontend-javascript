export default function getListStudentIds(arr) {
  let rtnArr = [];
  if (arr instanceof Array) {
    try {
      rtnArr = arr.map((x) => x.id);
    } catch (error) {
      rtnArr = [];
    }
  }
  return rtnArr;
}
