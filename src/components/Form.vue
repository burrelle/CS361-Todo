<template>
  <div class="form-component container top">
    <div class="field is-grouped is-grouped-right">
       <p class="control">
        <a class="button is-light">
          {{ emailAddress }}
        </a>
      </p>
      <p class="control">
        <a class="button is-primary" @click="logout">
          Logout
        </a>
      </p>
    </div>
    <div class="field">
      <form v-on:submit.prevent>
        <label class="label">Enter a Task:</label>
        <div class="control">
          <textarea id="txt-input" class="textarea" placeholder="Enter your task here..." v-model="description" required></textarea>
        </div>
        <div class="field is-grouped">
          <p class="control is-expanded">
            <label class="label">Start Date:</label>
            <input class="input start-date" type="date" v-model="startDate" required>
          </p>
          <p class="control is-expanded">
            <label class="label">Expected Completion Date:</label>
            <input class="input end-date" type="date" v-model="endDate" required>
          </p>
          <div class="field">
            <label class="label">Repeat:</label>
            <div class="control">
              <div class="select repeat-select">
                <select v-model="repeat">
                  <option value="Never" id="repeat-select-default">Never</option>
                  <option value="Every Day">Every Day</option>
                  <option value="Every Week">Every Week</option>
                  <option value="Every 2 Weeks">Every 2 Weeks</option>
                  <option value="Every Month">Every Month</option>
                  <option value="Every Year">Every Year</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <div class="field">
            <label class="label">Catagory: </label>
            <div class="control is-expanded">
              <div class="select catagories-select">
                <select v-model="catagory">
                  <option value="Health" id="catagory-default">Health</option>
                  <option value="Work">Work</option>
                  <option value="Home">Home</option>
                  <option value="Study">Study</option>
                  <option value="Social">Social</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Wish">Wish</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field">
            <label class="label">Difficulty:</label>
            <div class="control radio-buttons">
              <label class="radio">
                <input type="radio" value="Easy" v-model="difficulty" name="difficulty" checked> Easy
              </label>
              <label class="radio">
                <input type="radio" value="Medium" v-model="difficulty" name="difficulty"> Medium
              </label>
              <label class="radio">
                <input type="radio" value="Hard" v-model="difficulty" name="difficulty"> Hard
              </label>
            </div>
          </div>
        </div>

        <div class="field is-grouped">
          <p class="control">
            <button class="button is-info add-task" @click="addToFirebase()">
              Add Task
            </button>
          </p>
          <p class="control">
            <button class="button is-danger cancel-btn" @click="clearList">
              Cancel
            </button>
          </p>
        </div>
      </form>
    </div>
    <template v-if="!task.completed && !task.editing" v-for="task in tasks">
      <div class="card" v-bind:key="task['.key']">
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
              <b>Completion:</b> {{ completeTime(task.startDate, task.endDate) }} -
              <b>Repeats:</b> {{ task.repeat }}
            </p>
            <p>
              <b>Catagory:</b> {{ task.catagory }}</p>
            <p>
              <b>Difficulty:</b> {{ task.difficulty }} </p>
          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item" @click="completeTask(task['.key'])">Complete</a>
          <a href="#" class="card-footer-item" @click="setEditTask(task['.key'])">Edit</a>
          <a href="#" class="card-footer-item" @click="deleteTask(task['.key'])">Delete</a>
        </footer>
      </div>
    </template>

    <template v-if="!task.completed && task.editing" v-for="task in tasks">
      <div class="card" v-bind:key="task['.key']">
        <header class="card-header">
          <p class="card-header-title">
            <input class="input" type="text" v-model="task.description">
          </p>
        </header>
        <div class="card-content">
          <div class="content">
            <b>Starts:</b>
            <input class="input" type="date" v-model="task.startDate">
            <b>Ends:</b>
            <input class="input" type="date" v-model="task.endDate">
            <b>Repeats:</b>
            <br>
            <div class="select">
              <select v-model="task.repeat">
                <option value="Never">Never</option>
                <option value="Every Day">Every Day</option>
                <option value="Every Week">Every Week</option>
                <option value="Every 2 Weeks">Every 2 Weeks</option>
                <option value="Every Month">Every Month</option>
                <option value="Every Year">Every Year</option>
              </select>
            </div>
            <br>
            <b>Catagory:</b>
            <br>
            <div class="select">
              <select v-model="task.catagory">
                <option value="Health" id="catagory-default">Health</option>
                <option value="Work">Work</option>
                <option value="Home">Home</option>
                <option value="Study">Study</option>
                <option value="Social">Social</option>
                <option value="Shopping">Shopping</option>
                <option value="Wish">Wish</option>
              </select>
            </div>
            <br>
            <b>Difficulty:</b>
            <br>
            <div class="select">
              <select v-model="task.difficulty">
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
            </div>

          </div>
        </div>
        <footer class="card-footer">
          <a href="#" class="card-footer-item" @click="saveEdit(task)">Save</a>
          <a href="#" class="card-footer-item" @click="cancelEdit(task['.key'])">Cancel</a>
        </footer>
      </div>
    </template>

    <hr>
    <a class="button is-primary show-hide" @click="isVisable = true" v-show="!isVisable">Show Completed Tasks</a>
    <a class="button is-primary show-hide" @click="isVisable = false" v-show="isVisable">Hide Completed Tasks</a>
    <template v-if="task.completed && isVisable" v-for="task in tasks">
      <div class="card" v-bind:key="task['.key']">
        <header class="card-header">
          <p class="card-header-title">
            {{ task.description }}
          </p>
        </header>
        <footer class="card-footer">
          <a href="#" class="card-footer-item" @click="uncompleteTask(task['.key'])">Uncomplete</a>
          <a href="#" class="card-footer-item" @click="deleteTask(task['.key'])">Delete</a>
        </footer>
      </div>
    </template>
  </div>
</template>

<script>
  import moment from "moment";
  import {
    todosRef
  } from "../firebase";
  import firebase from 'firebase';
  import router from '../router'
  export default {
    name: "form-input",
    data() {
      return {
        description: "",
        startDate: "",
        endDate: "",
        repeat: "Never",
        catagory: "Health",
        difficulty: "Easy",
        completed: false,
        isVisable: false
      };
    },

    firebase: {
      tasks: todosRef
    },

    methods: {
      addToFirebase() {
        todosRef.push({
          description: this.description,
          startDate: this.startDate,
          endDate: this.endDate,
          repeat: this.repeat,
          completed: this.completed,
          catagory: this.catagory,
          difficulty: this.difficulty,
          editing: false
        });
        this.description = "";
        this.startDate = "";
        this.endDate = "";
        this.repeat = "Never";
        this.catagory = "Health";
        this.difficulty = "Easy";
        this.completed = false;
      },
      clearList(e) {
        this.description = "";
        this.startDate = "";
        this.endDate = "";
        this.repeat = "Never";
        this.completed = false;
        this.catagory = "Health";
        this.difficulty = "Easy";
        e.preventDefault();
      },

      completeTime: (startDate, endDate) => {
        return moment(startDate).to(moment(endDate));
      },

      completeTask(key) {
        todosRef.child(key).update({
          completed: true
        });
      },

      uncompleteTask(key) {
        todosRef.child(key).update({
          completed: false
        });
      },

      deleteTask(key) {
        todosRef.child(key).remove();
      },

      setEditTask(key) {
        todosRef.child(key).update({
          editing: true
        });
      },

      cancelEdit(key) {
        todosRef.child(key).update({
          editing: false
        });
      },

      saveEdit(task) {
        const key = task[".key"];
        todosRef.child(key).update({
          description: task.description,
          startDate: task.startDate,
          endDate: task.endDate,
          repeat: task.repeat,
          catagory: task.catagory,
          difficulty: task.difficulty,
          editing: false
        });
      }, 

      logout() {
        firebase.auth().signOut().then(() => {
          router.push('login')
        })
      }
    },
    
    computed: {
      emailAddress: () => {
        var user = firebase.auth().currentUser;
        if(user){
           return user.email;
        }
      }
    },

    filters: {
      moment: date => {
        return moment(date).format("MMMM Do YYYY");
      }
    }
  };

</script>

<style scoped>
  .top {
    padding-top: 10px;
  }

</style>
