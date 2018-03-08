import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyDAddZw8sYkPQfrOUFdOSqOXgEImdA9eQo",
  authDomain: "todo-7b926.firebaseapp.com",
  databaseURL: "https://todo-7b926.firebaseio.com",
  projectId: "todo-7b926",
  storageBucket: "todo-7b926.appspot.com",
  messagingSenderId: "155796253530"
});

export const db = app.database();
export const todosRef = db.ref("todos");
