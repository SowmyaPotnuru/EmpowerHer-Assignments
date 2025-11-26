let countDown = 10;
console.log(countDown);
let setIntervalId = setInterval(() => {
  countDown--;
  if(countDown===0){
    console.log("Countdown Complete!");
    clearInterval(setIntervalId);
  }else{
    console.log(countDown);
  }
})