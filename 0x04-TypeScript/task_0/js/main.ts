interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const firstStudent: Student = {
  firstName: 'henry',
  lastName: 'jojo',
  age: 35,
  location: 'london',
}

const secondStudent: Student = {
  firstName: 'cam',
  lastName: 'poulas',
  age: 45,
  location: 'leeds',
}
const studentsList: Array<Student> = [
  firstStudent,
  secondStudent,
];

const table = document.createElement('table');

studentsList.forEach((student) => {
  const row = table.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);

  cell1.textContent = student.firstName;
  cell2.textContent = student.location;
});

document.body.appendChild(table);
