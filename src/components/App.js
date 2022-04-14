import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log(CATEGORIES);
console.log(TASKS);

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setCategory] = useState("All");

  function handleCategoryChange(category) {
    console.log(category);
    setCategory(category);
  }

  function onTaskFormSubmit (element) {
    console.log(element);
    setTasks([...tasks, element]);
  }

  const tasksToDisplay = tasks.filter(task => {
    if (selectedCategory === "All") return true;

    return task.category === selectedCategory;
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        categories={CATEGORIES} 
        onCategoryChange={handleCategoryChange}
      />
      <NewTaskForm 
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList tasks={tasksToDisplay} setTasks={setTasks}/>
    </div>
  );
}

export default App;
