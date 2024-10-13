<script>

import { RouterLink } from "vue-router";


export default {

  components: {
    RouterLink, 
  },
};
</script>

<template>
  <nav>
   
    <RouterLink class="navigation" to="/">Мои задачи</RouterLink>
   
    <RouterLink class="navigation" to="/addtask">Добавить задачу</RouterLink>
  </nav>
  <main>
    <div class="container">
   
      <h1>Список дел</h1>
   
      <RouterView />
    </div>
  </main>
</template>


<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #e8e8e8;
  color: #323232;
}
.container {
  max-width: 1000px;
  min-height: 50vh;
  margin: 0 auto;
  background-color: #add8e6;
  border-radius: 5px;
  border: 2px solid #000;
  box-shadow: 4px 4px 14px wheat;
  padding: 20px;
}
h1 {
  text-align: center;
}
nav {
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: center;
  margin: 20px 0;
}
.navigation,
button{
  padding: 5px 10px;
  border-radius: 5px;
  border: 2px solid #e8a6a6;
  background-color: #f5f5dc;
  box-shadow: 4px 4px  #bebeb6;
  font-size: 17px;
  font-weight: 600;
  color: #323232;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;
}
.navigation.router-link-active,
button:active {
  box-shadow: 0px 0px #000;
  transform: translate(3px, 3px);
}

.navigation.router-link-active,
button:hover{
    background-color: #59ea5e;
    
}

</style>
