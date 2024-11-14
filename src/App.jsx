
import { useState, useEffect } from "react"
import TodoInput from "../components/Todoinput"
import Todolist from "../components/Todolist"


function App() {

const [todovalue, settodovalue] = useState('')
const [todos, settodos] = useState([
])

function persistData(newList) {
  localStorage.setItem('todos', JSON.stringify({ todos: newList }))
}

function handleDeleteTodo(index){
  const newtodos = todos.filter((todo, todoIndex) => {

    return todoIndex != index
  })
  
  settodos(newtodos)
  persistData(newtodos)
 
}

function handleAddTodo(newtodo){
  const newtodos = [...todos, newtodo]
  
  settodos(newtodos)
  persistData(newtodos)
}

function handleEditTodo(index) {
  const valuetobeedited = todos[index]
  settodovalue(valuetobeedited)
  handleDeleteTodo(index)
}

useEffect(() => {
  if (!localStorage) {
    return
  }

  let localTodos = localStorage.getItem('todos')
  if (!localTodos) {
    return
  }

  console.log(localTodos)
  localTodos = JSON.parse(localTodos).todos
  settodos(localTodos)

}, [])

  return (
    <>
      <TodoInput todovalue={todovalue} settodovalue={settodovalue} handleAddTodo={handleAddTodo} />
      <Todolist  handleEditTodo={handleEditTodo}  handleDeleteTodo={handleDeleteTodo} todos={todos} />
      
    </>
  )
}

export default App
