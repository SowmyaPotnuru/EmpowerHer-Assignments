// 1
if (true) {
  let x = 10;
  var y = 20;
}
console.log(y);
console.log(x);

// The above code gives an error "x is not defined", because for 'x' variable we used let keyword means it belongs to only the block, so we cannot execute it outside,
// whereas y variable has var keyword, it can be executed outside the block, as it is belongs to the global.


// 2
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile.user?.details?.email);
console.log(profile.user?.details?.phone);


// 3
// Create an example where optional chaining prevents a runtime error when accessing a missing nested property.

const user = {
  name: "Alice",
  address: {
    city: "Mumbai",
    // note: address.zipcode is missing
  }
};

// Without optional chaining – would throw TypeError
// console.log(user.address.zipcode.length); // Uncaught TypeError: Cannot read properties of undefined (reading 'length')

// With optional chaining – safe access
const zipcodeLength = user.address.zipcode?.length;
console.log(zipcodeLength);  // undefined (no error)
