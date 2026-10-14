import React from 'react'
import { useState } from 'react'

const App = () => {
  let [todolist , settodolist] = useState([])

  
  
  let saveToTodo = (e)=>{


    e.preventDefault()

    let todo = e.target.todo.value 
    // alert(todo)
    if(!todolist.includes(todo)){  // if your todo is not already in the list then add it to the list

      let finaltodolist = [...todolist , todo] // those three dots are called spread operator which is used to copy the existing array and add new element to it
      settodolist(finaltodolist)
      e.target.todo.value = ""

    }else{
      alert("This todo name is already in the list")
    }

  }

  let deletetodo = (index)=>{
    let finaltodolist = todolist.filter((_, i) => i !== index)
    settodolist(finaltodolist)
    
  }
  return (
    <div>
      <h1>TODO App</h1>
      <form action="" onSubmit={saveToTodo}>
        <input type="text" placeholder='Add a new task' name="todo" />
        <button>Save</button>
      </form>

      <ul>
        {todolist.map((todo, index) => (
          <li key={index}>
            {todo} <span onClick={() => deletetodo(index)}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
