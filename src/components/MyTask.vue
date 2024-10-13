<template>
    <div>
      <input v-model="newTask" @keyup.enter="addTask" placeholder="Добавить задачу" required />
      <button @click="addTask">+</button>
      <h2>Все задачи:</h2>
      <ol>
        <li v-for="(task, index) in allTasks" :key="index">
            <span :style="{ 
            textDecoration: task.completed ? 'line-through' : 'none',
            color: task.completed ? 'gray' : 'tomato'}">
            {{ task.text }}
          </span>
          <button @click="toggleTask(index)">✔️</button>
          <button @click="deleteTask(index)">❌</button>
        </li>
      </ol>
    </div>
  </template>
  
  <script>
  import { mapGetters } from "vuex";
  
  export default {
    data() {
      return {
        newTask: "",
      };
    },
    computed: {
      ...mapGetters(["allTasks"]),
    },
    methods: {
      addTask() {
        if (this.newTask.trim()) {
          this.$store.dispatch("addTask", this.newTask);
          this.newTask = "";
        }
      },
      deleteTask(index) {
        this.$store.dispatch("deleteTask", index);
      },
      toggleTask(index) {
        this.$store.dispatch("toggleTask", index);
      },
    },
  };
  </script>



<style>
.task {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

h2{
    text-align: center;
    margin: 40px;
    color: rgb(153, 0, 255);
}

ol {
    width: 100%;
    color: tomato;
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 20px;
}
</style>
