<template>
  <div class="box-padding-top sign-up">
    <div class="box">
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              A Better Todo
            </h1>
            <h2 class="subtitle">
              Create an Account
            </h2>
          </div>
        </div>
      </section>
      <hr>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input email-input" type="email" placeholder="Email" v-model="email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
        </p>
      </div>
      <div class="field">
        <p class="control has-icons-left">
          <input class="input password-input" type="password" placeholder="Password" v-model="password">
          <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
          </span>
        </p>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button" @click="addIcon ^= true">
            Add an Avatar?
          </button>
        </div>
        <div class="avatar-select" v-if="addIcon">
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
          <div class="icon-display">
            <i class="fas fa-user-circle fa-2x"></i>
            <i class="fas fa-anchor fa-2x"></i>
            <i class="fas fa-bug fa-2x"></i>
            <i class="fas fa-football-ball fa-2x"></i>
            <i class="fab fa-untappd fa-2x"></i>
          </div>
        </div>
      </div>
      <div class="field">
        <p class="control">
          <button class="button is-primary btn-create" @click="signUp">
            Create Account
          </button>
          <router-link to="/login">
            <button class="btn-return button is-info">
              Return to Login
            </button>
          </router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import firebase from "firebase";
  import router from "../router";
  import {
    avatarRef
  } from '../firebase';
  export default {
    name: "SignUp",
    firebase: {
      avatar: avatarRef
    },
    data() {
      return {
        email: "",
        password: "",
        addIcon: false,
        icon: "Person"
      };
    },
    methods: {
      signUp: function () {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(
            user => {
              avatarRef.push({
              icon: this.icon,
              username: this.email
              });
              router.push("todo");
            },
            err => {
              swal({
                title: "Sign Up Unsuccessful",
                text: err.message,
                icon: "error",
                button: "Close"
              });
            }
          );
      }
    }
  };

</script>

<style>
  .box-padding-top {
    padding-top: 4em;
  }

  .avatar-select {
    display: flex;
  }

  .icon-display {
    padding-left: 10px;
  }

</style>
