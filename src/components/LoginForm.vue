<template>
    <form @submit.prevent="HandleSubmit" class=" w-72 my-5 mx-auto" >
        <input class=" w-full p-3 rounded-3xl border border-solid border-gray-200 outline-none text-gray-400 my-3 mx-auto" type="email" required placeholder="Email"  v-model="email" >
        <input class=" w-full p-3 rounded-3xl border border-solid border-gray-200 outline-none text-gray-400 my-3 mx-auto" type="password" required placeholder="password"  v-model="password">
            <div class="error">{{error}}</div>
        <button class="button">Login</button>
    </form>
</template>

<script>
import  useLogin from "../controllers/signInController"
export default {
    name:"LoginForm",
    data() {
        return {
            email:"",
            password:"",
            error:""
        }
    },
    methods: {
        async HandleSubmit(){
            this.error = "";
            const {error , login} = useLogin();
            await login(this.email , this.password)
            if (!error.value) {
               this.$router.push({name:"chatRoom"});
            }else{
                this.error = error.value;
            }
        }
    },
}
</script>

<style>

</style>