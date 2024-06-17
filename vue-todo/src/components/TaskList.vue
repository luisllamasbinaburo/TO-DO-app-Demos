<template>
  <div class="task-list">
    <h2>Tasks</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id" @click="selectTask(task.id)">
        {{ task.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  props: {
    tasks: Array,
  },
  methods: {
    selectTask(taskId) {
      this.$emit('selectTask', taskId);
    },
  },
};
</script>