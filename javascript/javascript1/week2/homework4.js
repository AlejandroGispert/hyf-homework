//Student manager

const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  if (studentName === "") {
    console.log("insert a valid name");
  } else if (class07Students.length > 5 && studentName != "Queen") {
    console.log("Cannot add more students to class 07");
  } else if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
  } else {
    class07Students.push(studentName);
  }
}

function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}

addStudentToClass("indira");
addStudentToClass("");
addStudentToClass("indira");
addStudentToClass("loco");
addStudentToClass("lucas");
addStudentToClass("theodor");
addStudentToClass("pål");
addStudentToClass("pele");
addStudentToClass("Queen");
console.log(class07Students);
getNumberOfStudents();
