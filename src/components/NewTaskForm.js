import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit}) {

  const selectCategories = categories.filter(category => category !== "All");
  const [newTask, setNewTask] = useState("");
  const [newCategory, setNewCategory] = useState("Code");

  function handleNewTask(event) {
    setNewTask(event.target.value)
  };

  function handleNewCategory(event) {
    setNewCategory(event.target.value)
  };

  function handleSubmit(event) {
    event.preventDefault()
    const newElement = {
      text: newTask,
      category: newCategory,
    }
    onTaskFormSubmit(newElement);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleNewTask}/>
      </label>
      <label>
        Category
        <select name="category" onChange={handleNewCategory}>
          {selectCategories.map(category => (
            <option key={category} >{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task"/>
    </form>
  );
}

export default NewTaskForm;
