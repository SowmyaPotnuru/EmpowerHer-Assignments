console.log("Begin"); 
setTimeout(() => { console.log("Timeout Task"); }, 0);
 Promise.resolve().then(() => { console.log("Promise Task"); }); 
 console.log("End");

 //The above given code is executing in the correct order.
 // But it would be wrong order if is calling the callback instead of passing it. For example these are WRONG because they invoke console.log immediately:
 
 // Wrong — console.log executes immediately, not when the timer fires
//setTimeout(console.log("Timeout Task"), 0);

// Wrong — console.log executes immediately instead of being a then-callback
//Promise.resolve().then(console.log("Promise Task"));

//Always pass a function (e.g. () => console.log(...) or () => fn()), or pass the function reference (console.log) — but not console.log("text") which executes immediately.