import { displayTodos } from "./displayTodos.js";

let url = "https://jsonplaceholder.typicode.com/todos";


export function loadTodos(){
  if(localStorage.getItem("isLoggedIn") !== "true"){
    window.location.href = "login.html";
    return
  }

  try{
    fetch(url)
            .then((response) => response.json())
            .then((data) => {displayTodos(data)});
  }
  catch(error){
    console.log(error);
  }
}

