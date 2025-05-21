
import { useState } from 'react'
import './App.css'
import  {CreateTodo}  from './components/CreateTodo'
import { Todo } from './components/Todo'
import { useEffect } from 'react'


function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch("http://localhost:3000/todo")
      .then(async (res) => {
        const json = await res.json();
        setTodos(json.todos);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <>
      <CreateTodo onTodoAdded={fetchTodos} />
      <Todo todos={todos} />
    </>
  );
}


export default App
