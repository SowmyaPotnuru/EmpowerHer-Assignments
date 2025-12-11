export function displayTodos(data){
  let container = document.getElementById("todoContainer");
  container.innerHTML = "";
  let div = document.createElement("div");
    div.innerHTML = `
      <p>S.No</p>
      <h3>Title</h3>
      <p>Status</p>
    `;
    container.appendChild(div);
  data.forEach(todo => {
    let div = document.createElement("div");
    div.innerHTML = `
      <p>${todo.id}.</p>
      <h3>${todo.title}</h3>
      <p>${todo.completed ? "Completed" : "Pending"}</p>
    `;
    container.appendChild(div);
  })
}

