export default function updateStudentGradeByCity(studentsArray, city, newGrades) {
  const studentsInCity = studentsArray.filter((student) => student.location === city);
  const result = studentsInCity.map((student) => {
    const foundGrade = newGrades.find((grade) => grade.studentId === student.id);
    if (foundGrade) {
      return { ...student, grade: foundGrade.grade };
    }
    return { ...student, grade: 'N/A' };
  });
  return result;
}
