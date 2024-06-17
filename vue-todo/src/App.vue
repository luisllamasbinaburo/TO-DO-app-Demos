<template>
  <div class="app">
    <TaskList :tasks="tasks" @selectTask="selectTask" />
    <TaskDetails :task="selectedTask" @updateTask="updateTask" />    
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import TaskList from './components/TaskList.vue';
import TaskDetails from './components/TaskDetails.vue';

import './styles.css';

export default {
  name: 'App',
  components: {
    TaskList,
    TaskDetails,
  },
  setup() {
    const tasks = ref([
      { id: 1, description: 'Task 1', date: '2024-06-14' },
      { id: 2, description: 'Task 2', date: '2024-06-15' }
    ]);
    const selectedTaskId = ref(null);

    const selectTask = (taskId) => {
      selectedTaskId.value = taskId;
    };

    const updateTask = (updatedTask) => {
      tasks.value = tasks.value.map(task => task.id === updatedTask.id ? updatedTask : task);
    };

    const selectedTask = computed(() => tasks.value.find(task => task.id === selectedTaskId.value));

    return {
      tasks,
      selectedTaskId,
      selectTask,
      updateTask,
      selectedTask,
    };
  },
};
</script>