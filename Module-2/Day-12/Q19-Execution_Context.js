var age = 19;

function displayAge(){
  console.log(age);   //global execution context
}

function changeAge(){
  age = 21;
  console.log(age);  // functional execution context
}

displayAge();
changeAge();