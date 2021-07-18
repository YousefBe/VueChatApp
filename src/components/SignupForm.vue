<template>
    <form @submit.prevent="HandleSubmit" class=" w-72 my-5 mx-auto" >
        <input class=" w-full p-3 rounded-3xl border border-solid border-gray-200 outline-none text-gray-400 my-3 mx-auto"  type="text" required placeholder="User Name" v-model="userName">
        <input class=" w-full p-3 rounded-3xl border border-solid border-gray-200 outline-none text-gray-400 my-3 mx-auto"  type="email" required placeholder="Email"  v-model="email" >
        <input class=" w-full p-3 rounded-3xl border border-solid border-gray-200 outline-none text-gray-400 my-3 mx-auto"  type="password" required placeholder="password"  v-model="password">
            <div class="error">{{error}}</div>
        <button class="button my-2">Signup</button>
    </form>
</template>

<script>
import useSignUp from "../controllers/singUpController"
export default {
    name:"SignupFrom",
    data() {
        return {
            userName:"",
            email:"",
            password:"",
            error:'',
        }
    },
    methods: {
        async HandleSubmit(){
            const {error , signUp}  = useSignUp();
            await signUp(this.email , this.password , this.userName);
            if (error) {
               this.error = error
            }
        }
    },
}
</script>

<style>

</style>