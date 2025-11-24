// 1. Template Literals + Expressions
// a)
console.log(`The result of adding 5 and 7 is ${5+7}.`);

// b)
const multilineString = `This is the first line.
This is the second line.
And this is the third line.`;

console.log(multilineString);

// c)
let firstName = "John";
let lastName = "Doe";
console.log(`FullName of the person is ${firstName} ${lastName}`);

console.log("-------------")

// 2. Arrow Functions & this
// a)
const square = n => n*n 
console.log(square(4))

// b)
const obj = {
  value: 50,
  test: () => console.log(this.value)
};
obj.test();

// Here test() function is written in arrow function, as arrow functions do not have their own 'this' binding,
//  so it refers to 'this' in the outer scope which is "undefined".

// c)
const obj1 = {
  value: 50,
  test: function(){
    console.log(this.value)
  }
};
obj1.test();

console.log("-------------")

// 3. Rest, Spread & Copying Objects
// a)
const product = { name: "Pen", price: 10 };
console.log({...product});

// b) 
const a = { x: 1 };
const b = { y: 2 };
const newObj = {...a,...b};
console.log(newObj);

// c)
function maxValue(...nums){
  let max = 0
  for(let i=0; i<nums.length; i++){
    let x = nums[i]
    if(x > max){
      max = x
    }
  }
  return max
}
console.log(maxValue(1,4,3,8,7))

console.log("-------------")

// 4. Destructuring & Optional Chaining
// a)
const arr = [10, 20, 30];
const [a1, b1] = arr;
console.log(a1, b1);

// b)
const laptop = { brand: "Dell", ram: "8GB" };
const {brand, ram} = laptop;
console.log(brand); // "Dell"

// c)
const info = {};
console.log(info?.details); //undefined

console.log("-------------")

// 5. Scoping (let/var/const)
// a)
for (var i = 0; i < 3; i++) {}
console.log(i);
// The output is 3. Because i uses 'var' keyword, as it is global variable, it collects the 
// last iteration value and prints it.

// b) 
// for (let j = 0; j < 3; j++) {}
// console.log(j);
// There is an error, ReferenceError: j is not defined because j uses 'let' keyword here,
// and it belongs to the block scope.

// c) Why is const used for values that should not be reassigned?
// Because 'const' is block-scope, so this tells the value belongs to the particular variable only and it cannot be reassigned/changed.

console.log("-------------")

// 6. Ternary Operator – Practice
// a)
let speed = kmph => (kmph > 60) ? "Fast" : "Normal"
console.log(speed(78));

// b)
function findAge(age){
  return (age>=18) ? "Adult" : "Minor"
}
console.log(findAge(32))

// c)
const checkNum = num => {
  return (num>0) ? "Positive" :
         (num==0) ? "Zero" :
        "Negative"
}
console.log(checkNum(15));

console.log("-------------")

// 7. Spread, Rest & Arrays
// a) Add elements 4, 5 to this array using spread:
const nums = [1,2,3];
console.log([...nums,4,5]);

// b) Combine these arrays using spread:
let a5 = ["x","y"];
let b5 = ["z"];
const c = [...a5, ...b5]
console.log(c);

// c)Write a function using rest: printNames("A","B","C") → returns ["A","B","C"].
function printNames(...rest){
  return rest;
}
console.log(printNames("A","B","C"));

console.log("-------------")

// 8. Object Destructuring & Shorthand
// a) Destructure the following:
const user = { id: 101, status: "active" };
const {id, status} = user;
console.log(id, status);

// b) Convert this to shorthand:
const newId = 101;
const role = "admin";
const newUser = {
  newId,
  role
};
console.log(newUser);

// c) Create an object using shorthand and add a method using shorthand syntax.
const item = "pen";
const quantity = 2;
const price = 10;
const itemList = {
  item,
  quantity,
  price,
  totalAmt(){
    console.log(`Total Amount: ${this.quantity*this.price}`);
  }
}
itemList.totalAmt();

console.log("-------------")

// 9. Template Literals (More Practice)
// a) Use a template literal to print today’s date using: new Date().toDateString() 
console.log(`Today's Date is: ${new Date().toDateString() }`);

// b) Create a template literal that prints: "Hello NAME, your score is SCORE/100"
const studName = "Akhil";
const studScore = 85;
console.log(`Hello ${studName}, your score is ${studScore}/100.`);

console.log("-------------")

// 10. Arrow Function Shorthands
// a) Convert a normal function to a one-line arrow function for addition.
const addition = (a,b) => a+b;
console.log("Addition of 3 and 5 is:",addition(3,5));

// b) Write an arrow function isAdult(age) that returns true/false.
const isAdult = age => {
  if(age>=18){
    return true
  }else{
    return false
  }
}
console.log("Greater than age 18:",isAdult(25));

// c) Create an arrow function double that doubles a number.
const double = num => num*num 
console.log("Double the number:",double(9));

console.log("-------------")

// 11. Spread Operator (Arrays & Objects)
// a) Clone an array using spread.
let alpArr = ["S","O","W","M","Y","A"]
console.log(...alpArr);

// b) Add element 100 to the beginning of an array using spread.
let marks = [80,85,70,67];
let newMarks = [100,...marks];
console.log(newMarks);

// c) Merge two objects and override one property using spread.
let schl = {
  name: "Tiny Tots",
  noOfStudents: 75,
  appraisals: 5,
  address: {
    city: "Visakhapatnam",
    zipcode: 530013
  }
}
let studList = {
  noOfStudents : 150,
  totalBoys: 80,
  totalGirls: 70
}
let schlObj = {...schl, ...studList};
console.log(schlObj);

console.log("-------------")

// 12. Optional Chaining (More Practice)
// a) Access user.address.city safely:
const userDetails = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(userDetails.address?.city);

// b) Access user.job.title safely (should print undefined).
console.log(userDetails.address?.title);

// c)Write an example where optional chaining prevents a runtime error.
const userA = {
  name: "Alice",
  address: {
    city: "Mumbai",
    // note: address.zipcode is missing
  }
};
const zipcodeLength = userA.address.zipcode?.length;
console.log(zipcodeLength);  // undefined (no error)

// Here in userA.address gives "Reference Error" for userA.address.zipcode.length, but optional chaining prevents it.


