import React, { useState } from "react"
import TodoList from "./TodoList"
import "./index.css"

function App() {
  const [todo, newTodo] = useState("")
  const ChangeFunc = (event) => {
    newTodo(event.target.value)
  }
  const [todoArray, newTodoArray] = useState([])
  const BtnClicked = () => {
    newTodoArray((oldValue) => {
      return [...oldValue, todo]
    })
    newTodo("")
  }
  const deleteTodo = (id) => {
    newTodoArray((oldValue)=>{
      return oldValue.filter((arrElement, index)=>{
        return index!==id
      })
    })
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input 
          type="text" 
          placeholder="Add Todo" 
          onChange={ChangeFunc} 
            value={todo}
          />
          <button onClick={BtnClicked}> + </button>

          <ol>
            {todoArray.map((items,index) => {
              return <TodoList
                id={index}
                item={items}
                onSelect={deleteTodo}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
