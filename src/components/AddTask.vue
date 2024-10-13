<script>

export default {

    data() {
        return {
            newTask: "",
        };
    },


    methods: {
        addTask() {
            if (this.newTask.trim()) {

                this.$store.dispatch("addTask", this.newTask);

                this.newTask = "";

                this.$router.push("/");
            }
        },
    },
};
</script>


<template>
    <input v-model="newTask" @keyup.enter="addTask" placeholder="Введите новую задачу" />
</template>

<style>
input {
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 2px solid #000;
    background-color: #f5f5dc;
    box-shadow: 4px 4px 10px #000;
    font-weight: 600;
    padding: 5px 10px;
    outline: none;
    margin: 40px 0;
}
</style>
