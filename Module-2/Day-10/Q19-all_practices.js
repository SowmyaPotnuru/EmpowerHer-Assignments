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
for (let j = 0; j < 3; j++) {}
console.log(j);
// There is an error, ReferenceError: j is not defined because j uses 'let' keyword here,
// and it belongs to the block scope.

// c) Why is const used for values that should not be reassigned?
// Because 'const' is block-scope, so it belongs to the particular value and it cannot be reassigned.
