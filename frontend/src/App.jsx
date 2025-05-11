
import { useState } from 'react'
import './App.css'
import  {CreateTodo}  from './components/CreateTodo'
import { Todo } from './components/Todo'
import { useEffect } from 'react'


function App() {
  
  const [todos, setTodos] = useState([])

  
    fetch("http://localhost:3000/todo")
     .then(async function(res){
      const json = await res.json();
      setTodos(json.todos)
     })
  return (
    <>
    Hidfesdfdsfd
      <CreateTodo></CreateTodo>
      <Todo todos={todos}></Todo>
    </>
  )
}

export default App
