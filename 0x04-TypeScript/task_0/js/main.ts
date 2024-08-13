/* Student interface creation */
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
/* Student array */
const studentsList: Student[] = [
	{firstName: "John", lastName: "Doe", age: 27, location: "Nairobi"},
	{firstName: "Abraham", lastName: "Loncoln", age: 27, location: "Nairobi"}
];

/* table rendering */

window.onload = () => {
	
	/* create table */
	const studentTable = document.createElement("table");
	studentsList.forEach((student) => {

		/* create tr element */
		const tabRow = document.createElement("tr");

		/* create td elements with student content */
		const rowName = document.createElement("td")
		rowName.append(student.firstName);
		const rowLocation = document.createElement("td")
		rowLocation.append(student.location);

		/* append td elements to tr */
		tabRow.appendChild(rowName);
		tabRow.appendChild(rowLocation);

		/* append tr elements to table element */
		studentTable.appendChild(tabRow);
	});
};


