function employeePerformance(employeesData){
  let filteredData = employeesData.filter(eObj => eObj.tasksCompleted > 5)
  let employeesList = filteredData.map((e) => {
    let level = (e.rating>4.5) ? "Excellent" : (e.rating>=3 && e.rating<=4.5) ? "Good" : "Needs Improvement"
   return {name:e.name, performance : level} 
  });
// console.log(employeeList)
  const priority = {
    "Excellent" : 3,
    "Good" : 2,
    "Needs Improvement" : 1
  }
  const finalList = employeesList.sort((a,b) => {
    if(priority[b.performance] > priority[a.performance]){
      return 1
    }else{
      return -1
    }
  })

  console.log(finalList);
}

let employeesData = [

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

]

employeePerformance(employeesData);
