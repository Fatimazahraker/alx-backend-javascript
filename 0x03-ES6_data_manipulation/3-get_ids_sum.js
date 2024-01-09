export default function getStudentIdsSum(array) {
  const sum = array.reduce((total, student) => total + student.id, 0);
  return sum;
}
