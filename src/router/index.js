import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import chatRoom from '../views/chatRoom.vue'
import {projectAuth} from "../firebase/config"

const requireAuth = (to , from , next)=>{
   let user = projectAuth.currentUser
   if (!user) {
     next({ name : 'Welcome'});
   }else{
     next();
   }
}

const routes = [
{
  path: '/',
  name: 'Welcome',
  component: Welcome
},
{
  path: '/chatroom',
  name: 'chatRoom',
  component: chatRoom,
  beforeEnter: requireAuth
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
