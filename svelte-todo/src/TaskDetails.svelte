<script>
  import { createEventDispatcher } from 'svelte';

  export let selectedTask;

  const dispatch = createEventDispatcher();

    // Variables locales para descripción y fecha
  let description = '';
  let date = '';

  // Si hay una tarea seleccionada, inicializa los campos
  $: if (selectedTask) {
    const task = selectedTask.detail;
    description = task.description;
    date = task.date;
  }
 
  const updateTask = () => {   
    dispatch('updateTask', { ...selectedTask.detail, description, date });
  };
</script>

{#if selectedTask}

  <div class="task-details">    
    <h2>Task Details</h2>
    <div>
      <label>Description:</label>
      <input
        type="text"
        bind:value={description}
        on:input={updateTask}
      />
    </div>
    <div>
      <label>Date:</label>
      <input
        type="date"
        bind:value={date}
        on:input={updateTask}
      />
    </div>
  </div>
{:else}
  <div class="task-details">Select a task to see details</div>
{/if}
