let intervalId; 
intervalId = setInterval(() => {
  console.log("Loading...");
}, 1000);

// Set a timeout to clear the interval after 5 seconds
setTimeout(() => {
  clearInterval(intervalId);
  console.log("Loaded Successfully!");
}, 5000); 