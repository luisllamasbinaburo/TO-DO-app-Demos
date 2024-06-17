import React from 'react';

const TaskList = ({ tasks, onSelectTask }) => {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id} onClick={() => onSelectTask(task.id)}>
            {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
