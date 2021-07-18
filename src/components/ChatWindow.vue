<template>
  <div class="chat-window bg-gray-50 py-8 px-5">
      <div class="error" v-if="error">{{error}}</div>
      <div v-if="documents" ref="messages" class=" messages  max-h-96 overflow-auto">
          <div v-for="doc in formatedDocuments" :key="doc.id" class="single my-5 mx-0">
              <span class="created-at block text-gray-400 text-xs mb-1">{{doc.createdAt}}</span>
              <span class="name font-bold mr-2">{{doc.sender}}</span>
              <span class="message">{{doc.message}}</span>
          </div>
      </div>
  </div> 
</template>

<script>
import { formatDistanceToNow} from "date-fns"
import getCollection from "../controllers/getCollection"
export default {
    name:"chatWindow",
    data() {
        return {
            documents :null,
            error :null,
        }
    },
    computed:{
        formatedDocuments(){
            if (this.documents) {
                return this.documents.map((doc)=>{
                    let time =formatDistanceToNow(doc.createdAt.toDate())
                    return {...doc , createdAt:time}
                })
            }
        },
    },
    mounted() {
        const {error , documents} = getCollection("messages");
        this.documents = documents;
        this.error = error
        // console.log(error , documents);
    },
    updated(){
      if (this.documents) {
          this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight
      }
    }
 
}
</script>

<style>

</style>