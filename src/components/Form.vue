<template>
  <div class="field">
    <form>
    <label class="label">Enter a Task:</label>
    <div class="control">
      <textarea class="textarea" placeholder="Enter your task here..." v-model="task.description" required></textarea>
    </div>
    <div class="field is-grouped">
      <p class="control is-expanded">
        <label class="label">Start Date:</label>
        <input class="input" type="date" v-model="task.startDate" required>
      </p>
      <p class="control is-expanded">
        <label class="label">Expected Completion Date:</label>
        <input class="input" type="date" v-model="task.endDate" required>
      </p>
    </div>
    <div class="field is-grouped">
      <p class="control">
        <button class="button is-info" @click="addToList(), clearInput()">
          Add Task
        </button>
      </p>
      <p class="control">
        <button class="button is-danger" @click="clearInput()">
          Cancel
        </button>
      </p>
    </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'form-input',
    data() {
      return {
        task: {
          description: '',
          startDate: '',
          endDate: '',
          completed: false
        },

        tasks: []
      }
    },

    methods: {
      addToList() {
        this.tasks.push(this.task);
      },
      clearInput() {
        this.task.description = '';
        this.task.startDate = '';
        this.task.endDate = '';
        this.task.completed = false;
      }
    }
  }

</script>

<style>


</style>
