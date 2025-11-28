function displayMessage(name){
  console.log(`Hello ${name}!`)
}

function getUserInput(callback){
  setTimeout(()=>{
    let userName = "Alice"
    callback(userName);
  },1000)
}

getUserInput(displayMessage);