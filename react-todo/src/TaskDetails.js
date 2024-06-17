import React from 'react';

const TaskDetails = ({ task, onUpdateTask }) => {
  if (!task) {
    return <div className="task-details">Select a task to see details</div>;
  }

  const handleDescriptionChange = (e) => {
    const updatedTask = { ...task, description: e.target.value };
    onUpdateTask(updatedTask);
  };

  const handleDateChange = (e) => {
    const updatedTask = { ...task, date: e.target.value };
    onUpdateTask(updatedTask);
  };

  return (
    <div className="task-details">
      <h2>Task Details</h2>
      <div>
        <label>Description:</label>
        <input
          type="text"
          value={task.description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div>
        <label>Date:</label>
        <input
          type="date"
          value={task.date}
          onChange={handleDateChange}
        />
      </div>
    </div>
  );
};

export default TaskDetails;
