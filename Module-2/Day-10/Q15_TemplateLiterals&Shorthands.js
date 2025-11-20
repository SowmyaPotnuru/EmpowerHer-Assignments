// 1 Template Literals
let username = "Jhanavi"
let course = "Web Development"
console.log(`Hello ${username}, welcome to the ${course} course.`)

//2 Shorthand syntax
const name = "Sam";
const age = 21;
const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};
console.log(student)
student.greet();

const getFUllName = (first,last) => first+' '+last;
console.log(getFUllName("Sowmya", "Potnuru"))

