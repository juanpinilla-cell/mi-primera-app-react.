import React from 'react';

function TaskItem({ task, onDelete }) {
  return (
    <li className="task-item">
      <span>{task.text}</span>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Eliminar
      </button>
    </li>
  );
}

export default TaskItem;