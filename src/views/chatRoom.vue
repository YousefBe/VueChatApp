<template>
  <div class="cont">
    <navbar />
    <chat-window/>
    <chat-form/>
  </div>
</template>

<script>
import getUser from "../controllers/getUser";
import Navbar from "../components/Navbar.vue";
import ChatForm from '../components/ChatForm.vue';
import ChatWindow from '../components/ChatWindow.vue';
export default {
  name: "chatRoom",
  components: { Navbar, ChatForm ,ChatWindow },
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    const { user } = getUser();
    this.user = user;
    console.log(this.user);
  },
  watch: {
    user() {
      if (!this.user) {
        this.$router.push({ name: "Welcome" });
      }
    },
  },
};
</script>

<style>
</style>