<template>
  <div class="task-details">
    <h2>Task Details</h2>
    <div v-if="task">
      <div>
        <label>Description:</label>
        <input type="text" v-model="localTask.description" @input="updateTask" />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" v-model="localTask.date" @input="updateTask" />
      </div>
    </div>
    <div v-else>Select a task to see details</div>
  </div>
</template>

<script>
import { reactive, watch } from 'vue';

export default {
  name: 'TaskDetails',
  props: {
    task: Object,
  },
  setup(props, { emit }) {
    const localTask = reactive({ ...props.task });

    watch(() => props.task, (newTask) => {
      Object.assign(localTask, newTask);
    });

    const updateTask = () => {
      emit('updateTask', { ...localTask });
    };

    return {
      localTask,
      updateTask,
    };
  },
};
</script>