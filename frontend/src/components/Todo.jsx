export function Todo({ todos }) {
  if (!Array.isArray(todos)) {
    return <div>Loading todos...</div>;
  }

  return (
    <div>
      {todos.map((todo, index) => (
        <div key={index}>
           <h1>{todo.title}</h1>
           <h2>{todo.description}</h2>
           <button>{todo.completed == true ? "Completed" : "Mark as Completed"}</button>
        </div>
      ))}
    </div>
  );
}



                   