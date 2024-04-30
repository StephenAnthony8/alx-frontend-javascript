export default function getStudentIdsSum(students) {
  /* returns the sum of all the student ids */

  if (students instanceof Array) {
    return students.reduce((initial, current) => initial + current.id, 0);
  }
  return 0;
}
