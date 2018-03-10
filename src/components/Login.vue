<template>
    <div class="box-padding-top">
  <div class="box">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            A Better Todo
          </h1>
          <h2 class="subtitle">
            Login
          </h2>
        </div>
      </div>
    </section>
    <hr>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="email" placeholder="Email" v-model="email">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control has-icons-left">
        <input class="input" type="password" placeholder="Password" v-model="password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <button class="button is-primary" @click="signIn">
          Login
        </button>
        <router-link to="/sign-up">
          <button class="button is-info">
            Create Account
          </button>
        </router-link>
      </p>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert("Sign in succesful");
          },
          err => {
            alert(err.message);
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
</style>
