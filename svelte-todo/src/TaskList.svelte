<script>
  import { createEventDispatcher } from 'svelte';

  export let tasks;
  const dispatch = createEventDispatcher();

  const selectTask = (task) => {
    dispatch('selectTask', task);
  };
</script>

<div class="task-list">
  <h2>Tasks</h2>
  <ul>
    {#each $tasks as task}
      <li on:click={() => selectTask(task)}>
        {task.description}
      </li>
    {/each}
  </ul>
</div>
