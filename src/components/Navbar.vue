<template>
  <nav v-if="user"
    class="
      p-5
      border-b border-solid border-gray-100
      flex
      justify-between
      items-center
    "
  >
    <div>
      <p class="my-1 text-base text-gray-600">hi ya {{user.displayName}} 3amel a</p>
      <p class="my-1 text-sm text-gray-400">currently logged in as {{user.email}}</p>
    </div>
    <button class="button" @click="loggout">loggout</button>
  </nav>
</template>

<script>
import useLogout from "../controllers/loggoutController";
import getUser from "../controllers/getUser"
export default {
  name: "navbar",
  data() {
    return {
      error: null,
      user:null,
    };
  },
  mounted(){
      const {user} = getUser();
      this.user = user;
},
  methods: {
    async loggout() {
      const { error, logout } = useLogout();
      await logout();

      if (!error.value) {
        console.log("logged out");
        this.$router.push({name:"Welcome"})
      }
    },
  },
};
</script>

<style>
</style>