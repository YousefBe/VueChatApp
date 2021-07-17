<template>
    <form @submit.prevent="HandleSubmit" class=" w-72 my-5 mx-auto" >
        <input class=" w-full p-3 rounded-3xl border border-solid border-gray-200 outline-none text-gray-400 my-3 mx-auto"  type="text" required placeholder="User Name" v-model="userName">
        <input class=" w-full p-3 rounded-3xl border border-solid border-gray-200 outline-none text-gray-400 my-3 mx-auto"  type="email" required placeholder="Email"  v-model="email" >
        <input class=" w-full p-3 rounded-3xl border border-solid border-gray-200 outline-none text-gray-400 my-3 mx-auto"  type="password" required placeholder="password"  v-model="password">

        <button class="button">Signup</button>
    </form>
</template>

<script>
export default {
    name:"SignupFrom",
    data() {
        return {
            userName:"",
            email:"",
            password:"",
        }
    },
    methods: {
        HandleSubmit(){
            console.log(this.email);
        }
    },
}
</script>

<style>

</style>