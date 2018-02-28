<template>
  <div class="container">
    <form-input></form-input>
    <task-list></task-list>
  </div>
</template>

<script>
import formInput from "./components/Form.vue";
import taskList from "./components/Task.vue"
export default {
  name: 'app', 
  components: { formInput, taskList }
}
</script>

<style>

</style>
