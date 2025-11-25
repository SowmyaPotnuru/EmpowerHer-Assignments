let items = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

let itemCounts = items.reduce((accumulator,item) => {
  accumulator[item] = (accumulator[item] || 0)+1 
  return accumulator
},{})

console.log(itemCounts)

const categories = Object.entries(itemCounts).sort((item1,item2) => {
  return item2[1] - item1[1]
}).map(item => item[0])
console.log(categories);