// a)
const isEven = (num) => {
  (num%2 == 0) ? console.log(true) : console.log(false)
}
isEven(4)

// b)
const result = (marks) => {
  (marks >= 35) ? console.log("Pass") : console.log("Fail")
}
result(55)

// c)
const greet = (name) => {
  (name!="") ? console.log("Hello "+name) : console.log("Guest")
}
greet("Sowmya")