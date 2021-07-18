<template>
  <div class="cont">
    <navbar />
  </div>
</template>

<script>
import getUser from "../controllers/getUser";
import Navbar from "../components/Navbar.vue";
export default {
  name: "chatRoom",
  components: { Navbar },
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