<script setup>
import {ref} from 'vue';


        const name = ref("Tushar Bhardwaj");
        const status =ref(true) ;
        const tasks = ref(['Task one', 'Task two', 'Task three']);
        const newTask = ref('heello');

        const changeStatus = () =>{
            if(status.value === true){
                status.value = false;
            } else {
                status.value = true;
            }
        };

        const addTask = () =>{
            if()
        };

</script>



<template>
    <h2>Vue Jobs</h2>
    <h1>{{name}}</h1>
    <p v-if="status">User is Active</p>
    <p v-else>User is Not Active</p>
    <button @click="changeStatus">Change-Status</button>
    <ul>
        <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
    <form @submit.prevent="addTask">
        <label for="newTask">
            <input type="text" id="NewTask" name="NewTask" v-model="newTask">
            <button type="submit">submit</button>
        </label>
    </form>
    <!-- <a :href="link">Click for google</a> -->
</template>



<style scoped>
/* *{
    background-color: white;
} */
h1{
    color: red;
}
</style>