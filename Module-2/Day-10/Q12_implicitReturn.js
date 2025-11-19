function calc(n){
  let obj = {}
  const square = n => n**2
  const cube = n => n**3
  
  obj["square"] = square(n)
  obj["cube"] = cube(n)

  return obj
}

let res = calc(5)
console.log(res)
