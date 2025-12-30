import { useState, useMemo, useCallback } from "react";
import ProductList from "./ProductList";

const productsData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 },
  { id: 3, name: "Headphones", price: 3000 }
];

export default function App() {
  const [counter, setCounter] = useState(0);

  
  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");
    return productsData.reduce(
      (sum, product) => sum + product.price,
      0
    );
  }, [productsData]);

  
  const handleSelectProduct = useCallback((product) => {
    console.log("Selected product:", product.name);
  }, []);

  return (
    <div>
      <h2>Total Price: ₹{totalPrice}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>

      <ProductList
        products={productsData}
        onSelect={handleSelectProduct}
      />
    </div>
  );
}
