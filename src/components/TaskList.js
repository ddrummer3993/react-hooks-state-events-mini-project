import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks }) {
  console.log(tasks);

  function handleDelete(name) {
    console.log(name);
    const updatedTaskList = tasks.filter(task => task.text !== name)
    setTasks(updatedTaskList);
  }
  
  return (
    <div className="tasks">
      {tasks.map(task => (
        <Task 
          key={task.text} 
          text={task.text} 
          category={task.category}
          deleteTask={handleDelete}
        />
      ))}
    </div>
  );
}

export default TaskList;