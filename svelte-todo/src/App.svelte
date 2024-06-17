<script>
  import { writable } from 'svelte/store';
  import TaskList from './TaskList.svelte';
  import TaskDetails from './TaskDetails.svelte';

  const tasks = writable([
    { id: 1, description: 'Task 1', date: '2024-06-14' },
    { id: 2, description: 'Task 2', date: '2024-06-15' }
  ]);

  let selectedTask = null;

  const selectTask = (task) => {
    selectedTask = task;
  };

  const updateTask = (updatedTask) => {
    tasks.update(ts =>
      ts.map(task => task.id === updatedTask.detail.id ? updatedTask.detail : task)
    );
    selectedTask = updatedTask;
  };
</script>


<div class="app">
  <TaskList {tasks} on:selectTask={selectTask} />
  <TaskDetails {selectedTask} on:updateTask={updateTask} />
</div>
