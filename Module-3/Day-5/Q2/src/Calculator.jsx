import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("add");
  const [results, setResults] = useState([]);

  const handleCalculate = () => {
    const a = Number(num1);
    const b = Number(num2);
    let result;

    if (isNaN(a) || isNaN(b)) return;

    switch (operation) {
      case "add":
        result = a + b;
        break;
      case "subtract":
        result = a - b;
        break;
      case "multiply":
        result = a * b;
        break;
      default:
        return;
    }

    // Append result (do NOT replace previous ones)
    setResults([...results, `${a} ${getSymbol(operation)} ${b} = ${result}`]);
  };

  const getSymbol = (op) => {
    if (op === "add") return "+";
    if (op === "subtract") return "-";
    if (op === "multiply") return "*";
  };
  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter number 1"
      />
      <br />
      <br />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter number 2"
      />
      <br />
      <br />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
      </select>
      <br />
      <br />
      <button onClick={handleCalculate}>Perform Actions</button>
      <hr />

      <h3>Results</h3>
      <ul>
        {results.map((res, index) => (
          <li key={index}>{res}</li>
        ))}
      </ul>
    </div>
  );
}
export default Calculator;
