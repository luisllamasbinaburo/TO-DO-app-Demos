import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskDetails from './TaskDetails';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Task 1', date: '2024-06-14' },
    { id: 2, description: 'Task 2', date: '2024-06-15' }
  ]);

  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const selectTask = (taskId) => {
    setSelectedTaskId(taskId);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };

  const selectedTask = tasks.find(task => task.id === selectedTaskId);

  return (
    <div className="app">
      <TaskList tasks={tasks} onSelectTask={selectTask} />
      <TaskDetails task={selectedTask} onUpdateTask={updateTask} />
    </div>
  );
};

export default App;
