import React, { useState, useMemo } from "react";

    const generateTasks = () => {
    return Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        text: `Task ${i + 1}`,
        completed: i < 25, // First 25 tasks are completed, rest are active
    }));
    };


    const slowRender = (tasks) => {
        for (let i = 0; i < 100000; i++) {} // Reduce iterations
        return tasks;
    };
  

    const TodoApp = () => {
     const [tasks] = useState(generateTasks());
    const [filter, setFilter] = useState("all");
    const [darkMode, setDarkMode] = useState(false);

  const filteredTasks = useMemo(() => {
    console.log("Filtering tasks...");
    const filtered =
      filter === "all"
        ? tasks
        : tasks.filter((task) => task.completed === (filter === "completed"));
    return slowRender(filtered);
  }, [filter, tasks]);

  return (
    <div className={darkMode ? "dark bg-gray-900 text-white h-screen p-5" : "bg-white text-black h-screen p-5"}>
      <h1 className="text-2xl font-bold">Todo List</h1>
      <div className="flex gap-4 my-4">
        <button onClick={() => setFilter("all")} className="px-4 py-2 bg-blue-500 text-white rounded">All</button>
        <button onClick={() => setFilter("active")} className="px-4 py-2 bg-green-500 text-white rounded">Active</button>
        <button onClick={() => setFilter("completed")} className="px-4 py-2 bg-gray-500 text-white rounded">Completed</button>
        <button onClick={() => setDarkMode(!darkMode)} className="ml-auto px-4 py-2 bg-black text-white rounded">Toggle Dark Mode</button>
      </div>
      <ul className="mt-4">
        {filteredTasks.map((task) => (
          <li key={task.id} className="p-2 border-b border-gray-300">
            {task.text} {task.completed ? "✅" : "❌"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
