<script>
export default{
    data(){
        return{
            name : 'Tushar Bhardwaj',
            status : true,
            tasks : ['Task one','Task Two','Task Three'],
            link : 'https://google.com',
        };
    },
    methods:{
        changeStatus(){
            if(this.status === true){
                this.status = false;
            }
            else{
                this.status = true;
            };
        
        },
    },
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
    <a :href="link">Click for google</a>
</template>



<style scoped>
/* *{
    background-color: white;
} */
h1{
    color: red;
}
</style>