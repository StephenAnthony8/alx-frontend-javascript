export default function createIteratorObject(report) {
  const employeeNames = [];

  for (const item of Object.values(report.allEmployees)) {
    employeeNames.push(...Object.values(item));
  }
  return employeeNames;
}