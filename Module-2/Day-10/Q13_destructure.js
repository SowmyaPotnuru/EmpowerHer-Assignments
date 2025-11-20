const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } }, { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

let peopleArr = []
for(let i=0; i<people.length; i++){
  const {name, address:{city, street}} = people[i]
  peopleArr.push(`${name} lives in ${city} on ${street.name}`)
}

console.log(peopleArr)