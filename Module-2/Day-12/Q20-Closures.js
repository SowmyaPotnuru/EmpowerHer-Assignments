// Question 1: Closure-Based Counter Implementation
// Task-1: Implement the createCounter function.
function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(`Current count: ${count}`);
  }
  function decrement() {
    count--;
    console.log(`Current count: ${count}`);
  }
  return { increment, decrement };
}

const counter = createCounter();
counter.increment(); // Output: Current count: 1
counter.increment(); // Output: Current count: 2
counter.decrement(); // Output: Current count: 1

// Task-2: Explain how closures are being used to encapsulate the counter variable.
// In programming, a closure is a function that remembers the environment in which it was created. This unique characteristic allows it to access variables from its containing (outer) scope, even after that scope has closed or the outer function has finished executing.
// As a result, each time the returned inner function is called, it can modify and access the same counter variable instance. Because the counter is only directly accessible through the inner function, it is effectively "encapsulated," meaning its state can be managed and modified only via the controlled methods provided by the closure, preventing external code from accidentally or maliciously altering its value.
console.log("--------------")

// Task-3: What happens if multiple counters are created using the same function? Provide examples to demonstrate this behavior.
// If multiple counters are created using the same function, then it creates different instances using that particular function with same behaviour. 
// Example: IN the above we created a counter variable using createCounter() function, now let's create another counterK variable using that function and see. 
const counterK = createCounter();
counterK.increment();
counterK.decrement();
counterK.increment();

console.log("--------------")

// Question 2: Simulating Private Variables with Closures
// Task-1: Implement the createBankAccount function.
function createBankAccount(){
  let transList = [];
  let balance = 0;
  function deposit(amt){
    balance += amt;
    console.log(`Deposited: ${amt}`);
    transactions("Deposited", amt);
  }
  function withdraw(amt){
    if(balance>=amt){
      console.log(`Withdrawn: ${amt}`);
      balance -= amt;
      transactions("Withdrawn", amt);
    }else{
      console.log("Insufficient balance");
    }
  }
  function transactions(type,tAmt){
    if(type!==undefined || tAmt!==undefined){
      let trans = {Type: type, Amount:tAmt}
      transList.push(trans)
    }
    return transList
  }
  function transactionHistory(){
    console.log(transactions());
  }
  return {deposit, withdraw, transactionHistory}
}

const account = createBankAccount();
account.deposit(500); // Output: Deposited: 500
account.withdraw(200); // Output: Withdrawn: 200
account.withdraw(400); // Output: Insufficient balance
console.log(account.balance); // Output: undefined

// Task-2: How does the closure ensure that the balance variable is private?
// When the balance variable is executed outside the closure i.e., during global execution, it shows undefined that means we cannot access the variable globally, so we can tell it is private as it belongs to lexical environment (inside the closure).

// Task-3: Modify the function to include a transactionHistory feature that stores all transactions and explain how closures enable this feature.
account.transactionHistory();
//[ { Type: 'Deposited', Amount: 500 }, { Type: 'Withdrawn', Amount: 200 } ]
//Closures helped to store the transactions and execute it, when called.