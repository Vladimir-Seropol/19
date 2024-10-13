import { createStore } from "vuex"; 

const store = createStore({ 
  state: { 
    tasks: [], 
  }, 

  mutations: { 
    ADD_TASK(state, task) { 
      state.tasks.push({ text: task, completed: false }); 
    }, 

    DELETE_TASK(state, index) { 
      state.tasks.splice(index, 1); 
    }, 

    TOGGLE_TASK(state, index) { 
      const task = state.tasks[index];
      if (task) {
        task.completed = !task.completed; 
      }
    } 
  }, 

  actions: { 
    addTask({ commit }, task) { 
      commit("ADD_TASK", task); 
    }, 

    deleteTask({ commit }, index) { 
      commit("DELETE_TASK", index); 
    }, 

    toggleTask({ commit }, index) { 
      commit("TOGGLE_TASK", index); 
    }, 
  }, 

  getters: { 
    allTasks(state) { 
      return state.tasks; 
    }, 
  }, 
}); 

export default store;




