import React, { useState, useMemo } from "react";

const TodoList = () => {
  const [filter, setFilter] = useState("all");

  // Generate 50 todos
  const todos = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    text: `Todo ${i + 1}`,
    completed: i % 2 === 0, // Alternate between completed & active
  }));

  // Artificial slowdown using useMemo
  const filteredTodos = useMemo(() => {
    console.log("Filtering todos... (slow)");
    for (let i = 0; i < 50000; i++) {} // Slow computation
    return todos.filter((todo) => {
      if (filter === "active") return !todo.completed;
      if (filter === "completed") return todo.completed;
      return true;
    });
  }, [filter]);

  return (
    <div style={{ padding: "10px", fontFamily: "Arial, sans-serif" }}>
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("completed")}>Completed</button>
      <p><b>Note:</b> List is artificially slowed down!</p>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
