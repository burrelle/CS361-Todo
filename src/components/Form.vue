<template>
  <div>
    <div class="field top">
      <form v-on:submit="addToList">
        <label class="label">Enter a Task:</label>
        <div class="control">
          <textarea id="txt-input" class="textarea" placeholder="Enter your task here..." v-model="description" required></textarea>
        </div>
        <div class="field is-grouped">
          <p class="control is-expanded">
            <label class="label">Start Date:</label>
            <input class="input" type="date" v-model="startDate" required>
          </p>
          <p class="control is-expanded">
            <label class="label">Expected Completion Date:</label>
            <input class="input" type="date" v-model="endDate" required>
          </p>
          <div class="field">
            <label class="label">Repeat:</label>
            <div class="control">
              <div class="select">
                <select v-model="repeat">
                  <option value="0">Never</option>
                  <option value="1">Every Day</option>
                  <option value="7">Every Week</option>
                  <option value="14">Every 2 Weeks</option>
                  <option value="30">Every Month</option>
                  <option value="365">Every Year</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div class="field is-grouped">
          <p class="control">
            <button class="button is-info">
              Add Task
            </button>
          </p>
          <p class="control">
            <button class="button is-danger" @click="clearList">
              Cancel
            </button>
          </p>
        </div>
      </form>
    </div>
    <template v-if="!task.completed" v-for="task in tasks">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            {{ task.description }}
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <p>
              <b>Starts:</b> {{ task.startDate | moment }} -
              <b>Ends:</b> {{ task.endDate | moment }} -
              <b>Completion {{ completeTime(task.startDate, task.endDate) }} </b>
            </p>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item" @click="task.completed = true">Complete</a>
          <!-- <a href="#" class="card-footer-item">Edit</a> -->
          <a href="#" class="card-footer-item">Delete</a>
        </footer>
      </div>
    </template>
    <hr>
    <a class="button is-primary" @click="isVisable = true" v-show="!isVisable">Show Completed Tasks</a>
    <a class="button is-primary" @click="isVisable = false" v-show="isVisable">Hide Completed Tasks</a>
    <template v-if="task.completed && isVisable" v-for="task in tasks">
      <div class="card">
      <header class="card-header">
          <p class="card-header-title">
            {{ task.description }}
          </p>
        </header>
        <footer class="card-footer">
          <a href="#" class="card-footer-item" @click="task.completed = false">Uncomplete</a>
          <a href="#" class="card-footer-item">Delete</a>
        </footer>
      </div>
    </template>
  </div>
</template>

<script>
  import moment from 'moment';
  export default {
    name: 'form-input',
    data() {
      return {
        description: '',
        startDate: '',
        endDate: '',
        repeat: 0,
        completed: false,
        isVisable: false,
        tasks: []
      }
    },

    methods: {
      addToList(e) {
        this.tasks.push({
          description: this.description,
          startDate: this.startDate,
          endDate: this.endDate,
          repeat: this.repeat,
          completed: this.completed,
        });
        this.description = "";
        this.startDate = ""
        this.endDate = "";
        this.repeat = 0;
        this.complted = false;
        e.preventDefault();
      },
      clearList(e) {
        this.description = "";
        this.startDate = ""
        this.endDate = "";
        this.repeat = 0;
        this.complted = false;
        e.preventDefault();
      },

      completeTime: (startDate, endDate) => {
        return moment(startDate).to(moment(endDate));
      }
    },

    filters: {
      moment: (date) => {
        return moment(date).format('MMMM Do YYYY')
      }
    }
  }

</script>

<style>
  .top {
    padding-top: 10px;
  }

</style>
