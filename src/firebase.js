import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyApnMkJQ6cGAl9UAynx9lVsJuuXEg1rpyc",
  authDomain: "todo-eb9ea.firebaseapp.com",
  databaseURL: "https://todo-eb9ea.firebaseio.com",
  projectId: "todo-eb9ea",
  storageBucket: "todo-eb9ea.appspot.com",
  messagingSenderId: "285062666233"
});

export const db = app.database();
export const todosRef = db.ref("todos");
