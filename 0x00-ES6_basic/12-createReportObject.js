export default function createReportObject(employeesList) {
  const employeesStats = {
    allEmployees: employeesList,
    getNumberOfDepartments(x) {
      return Object.keys(x).length;
    },
  };
  return employeesStats;
}
