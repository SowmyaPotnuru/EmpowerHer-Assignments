import React, {useState} from "react";

function Counter(){
  const [count, setCount] = useState(0);
  increment = () =>{
    setCount(count+1);
  }
  return(
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={increment}>Increment</button>
    </div>
  )
}
export default Counter;