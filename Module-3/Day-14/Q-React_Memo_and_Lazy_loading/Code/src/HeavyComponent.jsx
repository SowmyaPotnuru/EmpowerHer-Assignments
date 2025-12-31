import React from "react";

const HeavyComponent = React.memo(() => {
  console.log("🔥 HeavyComponent rendered");

  // Simulate heavy UI
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div style={{ background: "#f4f4f4", padding: "20px" }}>
      <h3>Heavy Component</h3>
      <p>This component is expensive to render.</p>
    </div>
  );
});

export default HeavyComponent;
