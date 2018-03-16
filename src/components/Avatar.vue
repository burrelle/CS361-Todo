<template>
<div class="avatar-select">
  <div class="control">
    <div class="select">
      <select v-model="icon">
        <option>Anchor</option>
        <option>Bug</option>
        <option>Person</option>
        <option>Football</option>
        <option>Beer</option>
      </select>
    </div>
  </div>
  <button class="button is-info is-outlined">Select</button>
  <div class="icon-display">
    <i class="fas fa-user-circle fa-2x"></i>
    <i class="fas fa-anchor fa-2x"></i>
    <i class="fas fa-bug fa-2x"></i>
    <i class="fas fa-football-ball fa-2x"></i>
    <i class="fab fa-untappd fa-2x" ></i>
  </div>
</div>
</template>



<script>
  import firebase from "firebase";
  import {
    avatarRef
  } from '../firebase';
  export default {
    name: "Avatar",
    props: ['username'],
    data() {
      return {
        icon: "Person"
      };
    },
    firebase: {
      avatar: avatarRef
    }, 
    methods: {
      addToFirebase(){
        avatarRef.push({
          username: props,
          
        })
      }
    }
  };

</script>

<style>
.avatar-select{
  display: flex;
}

.icon-display{
  padding-left: 10px;
}

</style>
