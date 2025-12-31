import React, { useState, lazy, Suspense } from "react";

// Lazy load the heavy component
const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Performance Optimization</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <hr />

      {/* Lazy-loaded component */}
      <Suspense fallback={<p>Loading Heavy Component...</p>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
