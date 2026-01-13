function checkPrime(num){
  let isPrime = true
  for(let i=2; i<num; i++){
    if(num%i === 0){
      isPrime = false
    }
  }

  if(isPrime){
    return "true";
  }
  else{
     return "false";
  }
}

export default checkPrime;
