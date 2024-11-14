import React from "react";
import TaskCard from "./TaskCard";
function TaskList({ tasks, deleteTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
