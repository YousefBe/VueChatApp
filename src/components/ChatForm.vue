<template>
  <form class="m-3">
    <textarea
      class="w-full max-w-full mb-2 p-3 border-0 rounded-3xl outline-none"
      @keypress.enter.prevent="handleSubmit"
      placeholder="type a message and hit enter to seeeend"
      v-model="message"
    >
    </textarea>

    <div class="error">{{ error }}</div>
  </form>
</template>

<script>
import getUser from "../controllers/getUser";
import { timeStamp } from "../firebase/config";
import useCollection from "../controllers/useCollection";
export default {
  name: "ChatForm",
  mounted() {
    const { user } = getUser();
    this.user = user;
  },
  data() {
    return {
      message: "",
      user: null,
      error: null,
    };
  },
  methods: {
    async handleSubmit() {
      const chat = {
        message: this.message,
        sender: this.user.displayName,
        createdAt: timeStamp(),
      };
      const { error, addDoc } = useCollection("messages");

      await addDoc(chat);
      if (!error.value) {
        console.log(chat);
        this.message = "";
      } else {
        this.error = error;
      }
    },
  },
};
</script>

<style scope>
</style>