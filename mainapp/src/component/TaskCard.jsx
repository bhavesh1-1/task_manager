import React from "react";

function TaskCard({ task, deleteTask }) {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
}

export default TaskCard;
