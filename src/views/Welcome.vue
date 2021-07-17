<template>
  <div class="text-center py-5 cont">
    <p class=" text-2xl font-bold mb-8">Welcome to joe's Chat App</p>
    <div v-if="signInMode">
        <h2 class=" font-bold text-base uppercase ">Login </h2>
      <login-form />
        <p>No account yet ? <span @click="toggleFormMode" class=" cursor-pointer text-gray-600 uppercase font-semibold underline">Signup</span></p>
    </div>
    <div v-else>
      <h2 class=" font-bold text-base uppercase ">Signup Now!</h2>
      <signup-form />
        <p>Already have an account ? <span @click="toggleFormMode" class=" cursor-pointer text-gray-600 uppercase font-semibold underline">Login</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
export default {
  name: "Welcome",
  components: {
    SignupForm,
    LoginForm,
  },
  data() {
    return {
      signInMode: true,
    };
  },
  methods: {
    toggleFormMode() {
      this.signInMode = !this.signInMode;
    },
  },
};
</script>

<style>
</style>