export default function getStudentsByLocation(array, city) {
  const result = array.filter((array) => array.location === city);
  return result;
}
