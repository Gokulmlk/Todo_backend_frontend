import { useState } from "react";

export function CreateTodo({ onTodoAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (res) => {
        const json = await res.json();
        alert("Todo added");

        // ✅ Notify parent to refresh todos
        if (onTodoAdded) {
          onTodoAdded();
        }

        // Optionally reset inputs
        setTitle("");
        setDescription("");
      })
      .catch((err) => {
        console.error("Error adding todo:", err);
        alert("Failed to add todo");
      });
  };

  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button style={{ padding: 10, margin: 10 }} onClick={handleAdd}>
        Add a todo
      </button>
    </div>
  );
}
