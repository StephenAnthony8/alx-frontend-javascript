export default function updateStudentGradeByCity(students, city, newGrades) {
  /* returns an array of students for a specific city with their new grade */
  const cityArr = students.filter((x) => x.location === city);

  const rtnArr = cityArr.map((x) => {
    const rtn = x;
    rtn.grade = (rtn.grade === undefined ? 'N/A' : rtn.grade);

    for (const item of newGrades) {
      if (item.studentId === x.id) {
        rtn.grade = item.grade;
      }
    }
    return rtn;
  });

  return rtnArr;
}
