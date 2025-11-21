// a)
arr1 = [1, 2, 3];
arr2 = [4, 5];

console.log(...arr1, ...arr2);

// b)

function sum(...nums){
  let sum = 0
  for(let i=0; i<nums.length; i++){
    sum += nums[i]
  }
  return sum
}
console.log(sum(2,5,6,8,4))

// c)
const user = {
  name: "Alice",
  age: 22,
  address: {
    city: "Bangalore",
    pin: 560001
  }
};

const {name, address:{city,pin}} = user;
console.log("name:",name)
console.log("city:",city)
console.log("pin:",pin)