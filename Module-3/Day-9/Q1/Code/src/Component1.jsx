import Component2 from "./Component2";
import { AppContext } from "./AppContext";

function Component1() {
  const contextValues = {
    a: "Apple",
    b: "Ball",
    c: "Cat",
    d: "Dog",
    e: "Elephant",
    f: "Fish",
  };

  return (
    <AppContext.Provider value={contextValues}>
      <Component2 />
    </AppContext.Provider>
  );
}

export default Component1;
