function processProducts(products){
  const productNames = products.map(product => product.name);
  products.forEach(p => {
    if(p.price>50){ 
      console.log(`${p.name} is above $50`);
    }else{
      console.log(`${p.name} is below $50`);
    }
  })
  return productNames;
}
let products = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }]
processProducts(products)

// Output (Logged):

// Laptop is above $50

// Mouse is below $50