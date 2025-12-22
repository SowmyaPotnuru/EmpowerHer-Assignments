import Component2 from "./Component2";

function App() {
  const a = "Apple";
  const b = "Ball";
  const c = "Cat";
  const d = "Dog";
  const e = "Elephant";
  const f = "Fish";

  return (
    <div>
      <h2>Component1</h2>

      <Component2
        a={a}
        b={b}
        c={c}
        d={d}
        e={e}
        f={f}
      />
    </div>
  );
}

export default App;
