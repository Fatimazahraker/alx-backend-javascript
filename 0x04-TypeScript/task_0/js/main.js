var firstStudent = {
    firstName: 'henry',
    lastName: 'jojo',
    age: 35,
    location: 'london'
};
var secondStudent = {
    firstName: 'cam',
    lastName: 'poulas',
    age: 45,
    location: 'leeds'
};
var studentsList = [
    firstStudent,
    secondStudent,
];
var table = document.createElement('table');
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
});
document.body.appendChild(table);
